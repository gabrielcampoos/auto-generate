import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { showNotification } from '../Notification/notificationSlice';
import serviceApi from '../../../configs/services/api';
import {
	Client,
	ResponseCreateClientDto,
	ResponseFinalClientGetDto,
} from '../../types';

const initialState = {
	client: {
		id: '',
		name: '',
		cpf: '',
		address: '',
		district: '',
		zipCode: '',
		uf: '',
		city: '',
		municipalRegistration: '',
		phone: '',
	},
	loading: false,
};

export const clientCreate = createAsyncThunk(
	'client/create',
	async (newClient: Client, { dispatch }) => {
		try {
			const response = await serviceApi.post('/client', newClient);

			const responseApi = response.data as ResponseCreateClientDto;

			dispatch(
				showNotification({
					message: responseApi.message,
					success: responseApi.success,
				}),
			);

			return responseApi;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response = error.response
					?.data as ResponseCreateClientDto;

				dispatch(
					showNotification({
						message: response.message,
						success: response.success,
					}),
				);

				return response;
			}

			return {
				success: false,
				message: 'Erro inesperado.',
			};
		}
	},
);

export const clientGet = createAsyncThunk(
	'client/clientGet',
	async (_, { dispatch }) => {
		try {
			const response = await serviceApi.get('/client');

			const responseApi = response.data as ResponseFinalClientGetDto;

			dispatch(
				showNotification({
					message: responseApi.message,
					success: responseApi.success,
				}),
			);

			return responseApi;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response = error.response
					?.data as ResponseFinalClientGetDto;

				dispatch(
					showNotification({
						message: response.message,
						success: response.success,
					}),
				);

				return response;
			}

			return {
				success: false,
				message: 'Erro inesperado.',
			};
		}
	},
);

export const clientSlice = createSlice({
	name: 'client',
	initialState: initialState,
	reducers: {
		setClient: (state, action) => {
			return {
				...state,
				client: {
					id: action.payload.id,
					name: action.payload.name,
					cpf: action.payload.cpf,
					address: action.payload.address,
					district: action.payload.district,
					zipCode: action.payload.zipCode,
					uf: action.payload.uf,
					city: action.payload.city,
					municipalRegistration: action.payload.municipalRegistration,
					phone: action.payload.phone,
				},
			};
		},
	},

	extraReducers: (builder) => {
		builder.addCase(clientCreate.pending, (state) => {
			return {
				...state,
				loading: true,
			};
		});

		builder.addCase(clientCreate.fulfilled, (state, action) => {
			const payload = action.payload as ResponseCreateClientDto;

			if (payload.success && payload.data) {
				return {
					client: {
						id: payload.data?.id ?? '',
						name: payload.data?.name ?? '',
						cpf: payload.data?.cpf ?? '',
						address: payload.data?.address ?? '',
						district: payload.data?.district ?? '',
						zipCode: payload.data?.zipCode ?? '',
						uf: payload.data?.uf ?? '',
						city: payload.data?.city ?? '',
						municipalRegistration:
							payload.data?.municipalRegistration ?? '',
						phone: payload.data?.phone ?? '',
					},
					loading: false,
				};
			}

			if (!payload.success) {
				return {
					...state,
					loading: false,
				};
			}
		});

		builder.addCase(clientCreate.rejected, (state) => {
			return {
				...state,
				loading: false,
			};
		});

		builder.addCase(clientGet.pending, (state) => {
			return {
				...state,
				loading: true,
			};
		});

		builder.addCase(clientGet.fulfilled, (state, action) => {
			const payload = action.payload as ResponseFinalClientGetDto;

			if (payload.success && payload.data) {
				return {
					client: {
						id: payload.data.id,
						name: payload.data.name,
						cpf: payload.data.cpf,
						address: payload.data.address,
						district: payload.data.district,
						zipCode: payload.data.zipCode,
						uf: payload.data.uf,
						city: payload.data.city,
						municipalRegistration:
							payload.data.municipalRegistration,
						phone: payload.data.phone,
						isLogged: true,
					},
					loading: false,
				};
			}

			if (!payload.success) {
				return initialState;
			}
		});

		builder.addCase(clientGet.rejected, () => {
			return initialState;
		});
	},
});

export const { setClient } = clientSlice.actions;

export default clientSlice.reducer;
