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
	ResponseCreateClientDto,
	ResponseCreateCompanyDto,
	ResponseCreateInfoDto,
	ResponseFinalClientGetDto,
	ResponseInfoGetDto,
} from '../../types';
import { Company } from '../../types/Company';

const initialState = {
	info: {
		id: '',
		item: '',
		text: '',
		address: '',
		value: '',
	},
	loading: false,
};

export const infoCreate = createAsyncThunk(
	'info/create',
	async (newInfo: Info, { dispatch }) => {
		try {
			const response = await serviceApi.post('/info', newInfo);
			const responseApi = response.data as ResponseCreateInfoDto;

			dispatch(
				showNotification({
					message: responseApi.message,
					success: responseApi.success,
				}),
			);

			return responseApi;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response = error.response?.data as ResponseCreateInfoDto;

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

export const infoGet = createAsyncThunk(
	'info/infoGet',
	async (_, { dispatch }) => {
		try {
			const response = await serviceApi.get('/info');

			const responseApi = response.data as ResponseInfoGetDto;

			dispatch(
				showNotification({
					message: responseApi.message,
					success: responseApi.success,
				}),
			);

			return responseApi;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response = error.response?.data as ResponseInfoGetDto;

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

export const infoSlice = createSlice({
	name: 'info',
	initialState: initialState,
	reducers: {
		setInfo: (state, action) => {
			return {
				...state,
				info: {
					id: action.payload.id,
					item: action.payload.item,
					text: action.payload.text,
					address: action.payload.address,
					value: action.payload.value,
				},
			};
		},
	},

	extraReducers: (builder) => {
		builder.addCase(infoCreate.pending, (state) => {
			return {
				...state,
				loading: true,
			};
		});

		builder.addCase(infoCreate.fulfilled, (state, action) => {
			const payload = action.payload as ResponseCreateInfoDto;

			if (payload.success && payload.data) {
				return {
					info: {
						id: payload.data?.id ?? '',
						item: payload.data?.item ?? '',
						text: payload.data?.text ?? '',
						address: payload.data?.address ?? '',
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

		builder.addCase(infoCreate.rejected, (state) => {
			return {
				...state,
				loading: false,
			};
		});

		builder.addCase(infoGet.pending, (state) => {
			return {
				...state,
				loading: true,
			};
		});

		builder.addCase(infoGet.fulfilled, (state, action) => {
			const payload = action.payload as ResponseInfoGetDto;

			if (payload.success && payload.data) {
				return {
					info: {
						id: payload.data.id ?? '',
						item: payload.data.item ?? '',
						text: payload.data.text ?? '',
						address: payload.data.address ?? '',
						value: payload.data.value ?? '',
					},
					loading: false,
				};
			}

			if (!payload.success) {
				return initialState;
			}
		});

		builder.addCase(infoGet.rejected, () => {
			return initialState;
		});
	},
});

export const { setInfo } = infoSlice.actions;

export default infoSlice.reducer;
