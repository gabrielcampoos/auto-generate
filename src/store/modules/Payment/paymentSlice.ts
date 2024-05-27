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
	Info,
	Payment,
	ResponseCreateClientDto,
	ResponseCreateCompanyDto,
	ResponseCreateInfoDto,
	ResponseCreatePaymentDto,
	ResponseFinalClientGetDto,
	ResponsePaymentGetDto,
} from '../../types';
import { Company } from '../../types/Company';

const initialState = {
	payment: {
		id: '',
		formOfPayment: '',
		value: '',
		maturity: '',
	},
	loading: false,
};

export const paymentCreate = createAsyncThunk(
	'payment/create',
	async (newPayment: Payment, { dispatch }) => {
		try {
			const response = await serviceApi.post('/payment', newPayment);
			const responseApi = response.data as ResponseCreatePaymentDto;

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
					?.data as ResponseCreatePaymentDto;

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

export const paymentGet = createAsyncThunk(
	'payment/paymentGet',
	async (_, { dispatch }) => {
		try {
			const response = await serviceApi.get('/payment');

			const responseApi = response.data as ResponsePaymentGetDto;

			dispatch(
				showNotification({
					message: responseApi.message,
					success: responseApi.success,
				}),
			);

			return responseApi;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response = error.response?.data as ResponsePaymentGetDto;

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

export const paymentSlice = createSlice({
	name: 'payment',
	initialState: initialState,
	reducers: {
		setPayment: (state, action) => {
			return {
				...state,
				payment: {
					id: action.payload.id,
					formOfPayment: action.payload.formOfPayment,
					maturity: action.payload.maturity,
					value: action.payload.value,
				},
			};
		},
	},

	extraReducers: (builder) => {
		builder.addCase(paymentCreate.pending, (state) => {
			return {
				...state,
				loading: true,
			};
		});

		builder.addCase(paymentCreate.fulfilled, (state, action) => {
			const payload = action.payload as ResponseCreatePaymentDto;

			if (payload.success && payload.data) {
				return {
					payment: {
						id: payload.data?.id ?? '',
						formOfPayment: payload.data?.formOfPayment ?? '',
						maturity: payload.data?.maturity ?? '',
						value: payload.data?.value ?? '',
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

		builder.addCase(paymentCreate.rejected, (state) => {
			return {
				...state,
				loading: false,
			};
		});

		builder.addCase(paymentGet.pending, (state) => {
			return {
				...state,
				loading: true,
			};
		});

		builder.addCase(paymentGet.fulfilled, (state, action) => {
			const payload = action.payload as ResponsePaymentGetDto;

			if (payload.success && payload.data) {
				return {
					payment: {
						id: payload.data.id ?? '',
						formOfPayment: payload.data.formOfPayment ?? '',
						maturity: payload.data.maturity ?? '',
						value: payload.data.value ?? '',
					},
					loading: false,
				};
			}

			if (!payload.success) {
				return initialState;
			}
		});

		builder.addCase(paymentGet.rejected, () => {
			return initialState;
		});
	},
});

export const { setPayment } = paymentSlice.actions;

export default paymentSlice.reducer;
