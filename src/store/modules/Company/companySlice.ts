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
	ResponseCompanyGetDto,
	ResponseCreateClientDto,
	ResponseCreateCompanyDto,
	ResponseFinalClientGetDto,
} from '../../types';
import { Company } from '../../types/Company';

const initialState = {
	company: {
		id: '',
		name: '',
		socialReason: '',
		address: '',
		zipCode: '',
		cnpj: '',
		number: '',
	},
	loading: false,
};

export const companyCreate = createAsyncThunk(
	'company/create',
	async (newCompany: Company, { dispatch }) => {
		try {
			const response = await serviceApi.post('/company', newCompany);

			const responseApi = response.data as ResponseCreateCompanyDto;

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
					?.data as ResponseCreateCompanyDto;

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

export const companyGet = createAsyncThunk(
	'company/companyGet',
	async (_, { dispatch }) => {
		try {
			const response = await serviceApi.get('/company');

			const responseApi = response.data as ResponseCompanyGetDto;

			dispatch(
				showNotification({
					message: responseApi.message,
					success: responseApi.success,
				}),
			);

			return responseApi;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response = error.response?.data as ResponseCompanyGetDto;

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

export const companySlice = createSlice({
	name: 'company',
	initialState: initialState,
	reducers: {
		setCompany: (state, action) => {
			return {
				...state,
				company: {
					id: action.payload.id,
					name: action.payload.name,
					socialReason: action.payload.socialReason,
					address: action.payload.address,
					zipCode: action.payload.zipCode,
					cnpj: action.payload.cnpj,
					number: action.payload.number,
				},
			};
		},
	},

	extraReducers: (builder) => {
		builder.addCase(companyCreate.pending, (state) => {
			return {
				...state,
				loading: true,
			};
		});

		builder.addCase(companyCreate.fulfilled, (state, action) => {
			const payload = action.payload as ResponseCreateCompanyDto;

			if (payload.success && payload.data) {
				return {
					company: {
						id: payload.data?.id ?? '',
						name: payload.data?.name ?? '',
						socialReason: payload.data?.socialReason ?? '',
						address: payload.data?.address ?? '',
						zipCode: payload.data?.zipCode ?? '',
						cnpj: payload.data?.cnpj ?? '',
						number: payload.data?.number ?? '',
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

		builder.addCase(companyCreate.rejected, (state) => {
			return {
				...state,
				loading: false,
			};
		});

		builder.addCase(companyGet.pending, (state) => {
			return {
				...state,
				loading: true,
			};
		});

		builder.addCase(companyGet.fulfilled, (state, action) => {
			const payload = action.payload as ResponseCompanyGetDto;

			if (payload.success && payload.data) {
				return {
					company: {
						id: payload.data.id,
						name: payload.data.name,
						socialReason: payload.data.socialReason,
						address: payload.data.address,
						zipCode: payload.data.zipCode,
						cnpj: payload.data.cnpj,
						number: payload.data.number,
					},
					loading: false,
				};
			}

			if (!payload.success) {
				return initialState;
			}
		});

		builder.addCase(companyGet.rejected, () => {
			return initialState;
		});
	},
});

export const { setCompany } = companySlice.actions;

export default companySlice.reducer;
