import { Client } from './Client';
import { ClientState } from './ClientState';
import { CompanyState } from './CompanyState';
import { InfoState } from './InfoState';
import { Nfe } from './Nfe';
import { NfeState } from './NfeState';
import { PaymentState } from './PaymentState';
import { TotalValueState } from './TotalValueState';

export interface ResponseCreateClientDto {
	success: boolean;
	message: string;
	data?: ClientState & { id?: string };
}

export interface ResponseCreateNfeDto {
	success: boolean;
	message: string;
	data?: NfeState & { id?: string; createdAt?: Date };
}

export interface ResponseCreateCompanyDto {
	success: boolean;
	message: string;
	data?: CompanyState & { id?: string };
}

export interface ResponseCreateInfoDto {
	success: boolean;
	message: string;
	data?: InfoState & { id?: string };
}

export interface ResponseCreatePaymentDto {
	success: boolean;
	message: string;
	data?: PaymentState & { id?: string };
}

export interface ResponseCreateTotalValueDto {
	success: boolean;
	message: string;
	data?: TotalValueState & { id?: string };
}

export interface ResponseClientListDto {
	success: boolean;
	message: string;
	data?: Client;
}

export interface ResponseNfeListDto {
	success: boolean;
	message: string;
	data?: Nfe;
}

export interface ResponseFinalClientGetDto {
	success: boolean;
	message: string;
	data?: {
		id: string;
		name: string;
		cpf: string;
		address: string;
		district: string;
		zipCode: string;
		uf: string;
		city: string;
		municipalRegistration: string;
		phone: string;
	};
}

export interface ResponseNfeGetDto {
	success: boolean;
	message: string;
	data?: {
		id: string;
		nameClient: string;
		cpfClient: string;
		addressClient: string;
		districtClient: string;
		zipCodeClient: string;
		ufClient: string;
		cityClient: string;
		municipalRegistrationClient: string;
		phoneClient: string;
		nameCompany: string;
		socialReasonCompany: string;
		addressCompany: string;
		zipCodeCompany: string;
		cnpjCompany: string;
		numberCompany: string;
		itemInfo: number;
		textInfo: string;
		addressInfo: string;
		valueInfo: number;
		formOfPaymentPayment: string;
		valuePayment: string;
		maturityPayment: string;
		valueTotal: string;
		createdAt: Date;
	};
}

export interface ResponseCompanyGetDto {
	success: boolean;
	message: string;
	data?: {
		id: string;
		name: string;
		socialReason: string;
		address: string;
		zipCode: string;
		cnpj: string;
		number: string;
	};
}

export interface ResponseInfoGetDto {
	success: boolean;
	message: string;
	data?: {
		id: string;
		item?: string;
		text?: string;
		address?: string;
		value?: string;
	};
}

export interface ResponsePaymentGetDto {
	success: boolean;
	message: string;
	data?: {
		id: string;
		formOfPayment?: string;
		value?: string;
		maturity?: string;
	};
}

export interface ResponseTotalValueGetDto {
	success: boolean;
	message: string;
	data?: {
		id: string;
		value?: string;
	};
}

export interface ResponseNfeDto {
	success: boolean;
	message: string;
	data?: Nfe[];
}
