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
	ResponseCreateNfeDto,
	ResponseFinalClientGetDto,
	ResponseNfeGetDto,
} from '../../types';
import { Nfe } from '../../types/Nfe';

const initialState = {
	nfe: {
		id: '',
		nameClient: '',
		cpfClient: '',
		addressClient: '',
		districtClient: '',
		zipCodeClient: '',
		ufClient: '',
		cityClient: '',
		municipalRegistrationClient: '',
		phoneClient: '',
		nameCompany: '',
		socialReasonCompany: '',
		addressCompany: '',
		zipCodeCompany: '',
		cnpjCompany: '',
		numberCompany: '',
		itemInfo: 0,
		textInfo: '',
		addressInfo: '',
		valueInfo: 0,
		formOfPaymentPayment: '',
		valuePayment: '',
		maturityPayment: '',
		valueTotal: '',
	},
	loading: false,
};

export const nfeCreate = createAsyncThunk(
	'nfe/create',
	async (newNfe: Nfe, { dispatch }) => {
		try {
			const response = await serviceApi.post('/nfe', newNfe);

			const responseApi = response.data as ResponseCreateNfeDto;

			dispatch(
				showNotification({
					message: responseApi.message,
					success: responseApi.success,
				}),
			);

			return responseApi;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response = error.response?.data as ResponseCreateNfeDto;

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

export const nfeGet = createAsyncThunk(
	'nfe/nfeGet',
	async (_, { dispatch }) => {
		try {
			const response = await serviceApi.get('/nfeGet');

			const responseApi = response.data as ResponseNfeGetDto;

			dispatch(
				showNotification({
					message: responseApi.message,
					success: responseApi.success,
				}),
			);

			return responseApi;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response = error.response?.data as ResponseNfeGetDto;

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

export const nfeSlice = createSlice({
	name: 'nfe',
	initialState: initialState,
	reducers: {
		setNfe: (state, action) => {
			return {
				...state,
				nfe: {
					id: action.payload.id,
					nameClient: action.payload.nameClient,
					cpfClient: action.payload.cpfClient,
					addressClient: action.payload.addressClient,
					districtClient: action.payload.districtClient,
					zipCodeClient: action.payload.zipCodeClient,
					ufClient: action.payload.ufClient,
					cityClient: action.payload.cityClient,
					municipalRegistrationClient:
						action.payload.municipalRegistrationClient,
					phoneClient: action.payload.phoneClient,
					nameCompany: action.payload.nameCompany,
					socialReasonCompany: action.payload.socialReasonCompany,
					addressCompany: action.payload.addressCompany,
					zipCodeCompany: action.payload.zipCodeCompany,
					cnpjCompany: action.payload.cnpjCompany,
					numberCompany: action.payload.numberCompany,
					itemInfo: action.payload.itemInfo,
					textInfo: action.payload.textInfo,
					addressInfo: action.payload.addressInfo,
					valueInfo: action.payload.valueInfo,
					formOfPaymentPayment: action.payload.formOfPaymentPayment,
					valuePayment: action.payload.valuePayment,
					maturityPayment: action.payload.maturityPayment,
					valueTotal: action.payload.valueTotal,
				},
			};
		},
	},

	extraReducers: (builder) => {
		builder.addCase(nfeCreate.pending, (state) => {
			return {
				...state,
				loading: true,
			};
		});

		builder.addCase(nfeCreate.fulfilled, (state, action) => {
			const payload = action.payload as ResponseCreateNfeDto;

			if (payload.success && payload.data) {
				return {
					nfe: {
						id: payload.data?.id ?? '',
						nameClient: payload.data?.nameClient ?? '',
						cpfClient: payload.data?.cpfClient ?? '',
						addressClient: payload.data?.addressClient ?? '',
						districtClient: payload.data?.districtClient ?? '',
						zipCodeClient: payload.data?.zipCodeClient ?? '',
						ufClient: payload.data?.ufClient ?? '',
						cityClient: payload.data?.cityClient ?? '',
						municipalRegistrationClient:
							payload.data?.municipalRegistrationClient ?? '',
						phoneClient: payload.data?.phoneClient ?? '',
						nameCompany: payload.data?.nameCompany ?? '',
						socialReasonCompany:
							payload.data?.socialReasonCompany ?? '',
						addressCompany: payload.data?.addressCompany ?? '',
						zipCodeCompany: payload.data?.zipCodeCompany ?? '',
						cnpjCompany: payload.data?.cnpjCompany ?? '',
						numberCompany: payload.data?.numberCompany ?? '',
						itemInfo: payload.data?.itemInfo ?? '',
						textInfo: payload.data?.textInfo ?? '',
						addressInfo: payload.data?.addressInfo ?? '',
						valueInfo: payload.data?.valueInfo ?? '',
						formOfPaymentPayment:
							payload.data?.formOfPaymentPayment ?? '',
						valuePayment: payload.data?.valuePayment ?? '',
						maturityPayment: payload.data?.maturityPayment ?? '',
						valueTotal: payload.data?.valueTotal ?? '',
						createdAt: payload.data?.createdAt ?? '',
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

		builder.addCase(nfeCreate.rejected, (state) => {
			return {
				...state,
				loading: false,
			};
		});

		builder.addCase(nfeGet.pending, (state) => {
			return {
				...state,
				loading: true,
			};
		});

		builder.addCase(nfeGet.fulfilled, (state, action) => {
			const payload = action.payload as ResponseNfeGetDto;

			if (payload.success && payload.data) {
				return {
					nfe: {
						id: payload.data.id,
						nameClient: payload.data.nameClient,
						cpfClient: payload.data.cpfClient,
						addressClient: payload.data.addressClient,
						districtClient: payload.data.districtClient,
						zipCodeClient: payload.data.zipCodeClient,
						ufClient: payload.data.ufClient,
						cityClient: payload.data.cityClient,
						municipalRegistrationClient:
							payload.data.municipalRegistrationClient,
						phoneClient: payload.data.phoneClient,
						nameCompany: payload.data.nameCompany,
						socialReasonCompany: payload.data.socialReasonCompany,
						addressCompany: payload.data.addressCompany,
						zipCodeCompany: payload.data.zipCodeCompany,
						cnpjCompany: payload.data.cnpjCompany,
						numberCompany: payload.data.numberCompany,
						itemInfo: payload.data.itemInfo,
						textInfo: payload.data.textInfo,
						addressInfo: payload.data.addressInfo,
						valueInfo: payload.data.valueInfo,
						formOfPaymentPayment: payload.data.formOfPaymentPayment,
						valuePayment: payload.data.valuePayment,
						maturityPayment: payload.data.maturityPayment,
						valueTotal: payload.data.valueTotal,
						createdAt: payload.data.createdAt,
					},
					loading: false,
				};
			}

			if (!payload.success) {
				return initialState;
			}
		});

		builder.addCase(nfeGet.rejected, () => {
			return initialState;
		});
	},
});

export const { setNfe } = nfeSlice.actions;

export default nfeSlice.reducer;
