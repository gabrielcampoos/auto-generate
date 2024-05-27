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
	ResponseCreateTotalValueDto,
	ResponseFinalClientGetDto,
	ResponseTotalValueGetDto,
	TotalValue,
} from '../../types';
import { Company } from '../../types/Company';

const initialState = {
	totalValue: {
		id: '',
		value: '',
	},
	loading: false,
};

export const totalValueCreate = createAsyncThunk(
	'totalValue/create',
	async (newTotalValue: TotalValue, { dispatch }) => {
		try {
			const response = await serviceApi.post(
				'/totalValue',
				newTotalValue,
			);
			const responseApi = response.data as ResponseCreateTotalValueDto;

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
					?.data as ResponseCreateTotalValueDto;

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

export const totalValueGet = createAsyncThunk(
	'totalValue/totalValueGet',
	async (_, { dispatch }) => {
		try {
			const response = await serviceApi.get('/totalValue');

			const responseApi = response.data as ResponseTotalValueGetDto;

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
					?.data as ResponseTotalValueGetDto;

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

export const totalValueSlice = createSlice({
	name: 'totalValue',
	initialState: initialState,
	reducers: {
		setTotalValue: (state, action) => {
			return {
				...state,
				totalValue: {
					id: action.payload.id,
					value: action.payload.value,
				},
			};
		},
	},

	extraReducers: (builder) => {
		builder.addCase(totalValueCreate.pending, (state) => {
			return {
				...state,
				loading: true,
			};
		});

		builder.addCase(totalValueCreate.fulfilled, (state, action) => {
			const payload = action.payload as ResponseCreateTotalValueDto;

			if (payload.success && payload.data) {
				return {
					totalValue: {
						id: payload.data?.id ?? '',
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

		builder.addCase(totalValueCreate.rejected, (state) => {
			return {
				...state,
				loading: false,
			};
		});

		builder.addCase(totalValueGet.pending, (state) => {
			return {
				...state,
				loading: true,
			};
		});

		builder.addCase(totalValueGet.fulfilled, (state, action) => {
			const payload = action.payload as ResponseTotalValueGetDto;

			if (payload.success && payload.data) {
				return {
					totalValue: {
						id: payload.data.id ?? '',
						value: payload.data.value ?? '',
					},
					loading: false,
				};
			}

			if (!payload.success) {
				return initialState;
			}
		});

		builder.addCase(totalValueGet.rejected, () => {
			return initialState;
		});
	},
});

export const { setTotalValue } = totalValueSlice.actions;

export default totalValueSlice.reducer;
