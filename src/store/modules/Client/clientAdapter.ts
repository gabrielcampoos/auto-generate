import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { RootState } from '../..';
import {
	ResponseClientListDto,
	ResponseCreateClientDto,
} from '../../types/ResponseRequest';
import { showNotification } from '../Notification/notificationSlice';
import serviceApi from '../../../configs/services/api';
import { Client } from '../../types';

export const clientCreate = createAsyncThunk(
	'client/create',
	async (newClient: Client, { dispatch }) => {
		try {
			const response = await serviceApi.post('/client', newClient);

			dispatch(
				showNotification({
					success: response.data.success,
					message: response.data.message,
				}),
			);

			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response: ResponseCreateClientDto = {
					success: error.response?.data.success,
					message: error.response?.data.message,
				};

				dispatch(
					showNotification({
						message: error.response?.data.message,
						success: false,
					}),
				);
				return response;
			}

			return {
				success: false,
				message: 'Algo de errado não está certo. A requisição falhou.',
			};
		}
	},
);

export const clientList = createAsyncThunk(
	'client/clientList',
	async (_, { dispatch }) => {
		try {
			const response = await serviceApi.get('/client');

			dispatch(
				showNotification({
					message: response.data?.message,
					success: response.data?.success,
				}),
			);

			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response: ResponseClientListDto = {
					success: error.response?.data.success,
					message: error.response?.data.message,
				};

				dispatch(
					showNotification({
						message: error.response?.data.message,
						success: false,
					}),
				);

				return response;
			}

			return {
				success: false,
				message: 'Algo de errado não está certo. A requisição falhou.',
			};
		}
	},
);

const clientAdapter = createEntityAdapter<Client>({
	selectId: (state) => state.id,
});

export const { selectAll: clientListAll } = clientAdapter.getSelectors(
	(global: RootState) => global.clients,
);

const clientSlice = createSlice({
	name: 'client',
	initialState: clientAdapter.getInitialState({
		loading: false,
		message: '',
	}),
	reducers: {
		refresh(state) {
			return { ...state };
		},
	},

	extraReducers: (builder) => {
		builder.addCase(clientList.pending, (state) => {
			state.loading = true;
			state.message = 'Carregando clientes finais.';
		});

		builder.addCase(clientList.fulfilled, (state, action) => {
			const { message, data } = action.payload;

			state.loading = false;
			state.message = message;

			if (!data || data.length === 0) {
				state.message = 'Nada encontrado.';
				return;
			}

			clientAdapter.setAll(state, data);
		});

		builder.addCase(clientCreate.pending, (state) => {
			state.loading = true;
			state.message = 'Carregando clientes finais.';
		});

		builder.addCase(clientCreate.fulfilled, (state, action) => {
			const { message, data } = action.payload;

			state.loading = false;
			state.message = message;

			if (!data?.id) {
				console.log(action.payload);
				return;
			}

			clientAdapter.addOne(state, data);
		});

		builder.addCase(clientCreate.rejected, (state) => {
			state.loading = false;
			state.message = 'Cliente final não criado.';
		});
	},
});

export default clientSlice.reducer;
export const { refresh } = clientSlice.actions;
