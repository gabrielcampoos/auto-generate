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
	ResponseCreateNfeDto,
	ResponseNfeDto,
	ResponseNfeListDto,
} from '../../types/ResponseRequest';
import { showNotification } from '../Notification/notificationSlice';
import serviceApi from '../../../configs/services/api';
import { Client } from '../../types';
import { Nfe, NfeDeleteDto } from '../../types/Nfe';

export const nfeCreate = createAsyncThunk(
	'nfe/create',
	async (newNfe: Nfe, { dispatch }) => {
		try {
			const response = await serviceApi.post('/nfe', newNfe);

			dispatch(
				showNotification({
					success: response.data.success,
					message: response.data.message,
				}),
			);

			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response: ResponseCreateNfeDto = {
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

export const nfeList = createAsyncThunk(
	'nfe/nfeList',
	async (_, { dispatch }) => {
		try {
			const response = await serviceApi.get('/nfe');

			dispatch(
				showNotification({
					message: response.data?.message,
					success: response.data?.success,
				}),
			);

			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response: ResponseNfeListDto = {
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

export const nfeDelete = createAsyncThunk(
	'nfe/delete',
	async (data: NfeDeleteDto, { dispatch }) => {
		try {
			const response = await serviceApi.delete(`/nfe/${data.id}`);

			dispatch(
				showNotification({
					success: response.data.success,
					message: response.data.message,
				}),
			);

			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response: ResponseNfeDto = {
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

const nfeAdapter = createEntityAdapter<Nfe>({
	selectId: (state) => state.id,
});

export const { selectAll: nfeListAll } = nfeAdapter.getSelectors(
	(global: RootState) => global.nfes,
);

const nfeSlice = createSlice({
	name: 'nfe',
	initialState: nfeAdapter.getInitialState({
		loading: false,
		message: '',
	}),
	reducers: {
		refresh(state) {
			return { ...state };
		},
	},

	extraReducers: (builder) => {
		builder.addCase(nfeList.pending, (state) => {
			state.loading = true;
			state.message = 'Carregando notas.';
		});

		builder.addCase(nfeList.fulfilled, (state, action) => {
			const { message, data } = action.payload;

			state.loading = false;
			state.message = message;

			if (!data || data.length === 0) {
				state.message = 'Nada encontrado.';
				return;
			}

			nfeAdapter.setAll(state, data);
		});

		builder.addCase(nfeCreate.pending, (state) => {
			state.loading = true;
			state.message = 'Carregando notas.';
		});

		builder.addCase(nfeCreate.fulfilled, (state, action) => {
			const { message, data } = action.payload;

			state.loading = false;
			state.message = message;

			if (!data?.id) {
				console.log(action.payload);
				return;
			}

			nfeAdapter.addOne(state, data);
		});

		builder.addCase(nfeCreate.rejected, (state) => {
			state.loading = false;
			state.message = 'Cliente final não criado.';
		});

		builder.addCase(nfeDelete.pending, (state) => {
			state.loading = true;
			state.message = 'Excluindo nota...';
		});
		builder.addCase(nfeDelete.fulfilled, (state, action) => {
			const { message, success, data } = action.payload;
			state.loading = false;
			state.message = message;

			if (success) {
				nfeAdapter.removeOne(state, data);
			}
		});
		builder.addCase(nfeDelete.rejected, (state) => {
			state.loading = false;
			state.message = 'Nota não excluida.';
		});
	},
});

export default nfeSlice.reducer;
export const { refresh } = nfeSlice.actions;
