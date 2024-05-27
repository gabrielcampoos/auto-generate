import { Box, Button, Container, useMediaQuery, useTheme } from '@mui/material';
import { FirstLine } from '../../FirstLine';
import { SecondLine } from '../../SecondLine';
import { FourthLine } from '../../FourthLine';
import { FifthLine } from '../../FifthLine';
import { SixthLine } from '../../SixthLine';
import generatePDF, { Margin, Options } from 'react-to-pdf';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { nfeCreate } from '../../../../../store/modules/Nfe/nfeSlice';

export const NfeSm = () => {
	const [disabledFirstLine, setDisabledFirstLine] = useState(false);
	const [disabledSecondLine, setDisabledSecondLine] = useState(false);
	const [disabledFifthLine, setDisabledFifhtLine] = useState(false);
	const [disabledSixthLine, setDisabledSixthLine] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [widthPdf, setWidthPdf] = useState('100%');
	const [count, setCount] = useState(0);

	const [nameCompany, setNameCompany] = useState('');
	const [socialReasonCompany, setSocialReasonCompany] = useState('');
	const [addressCompany, setAddressCompany] = useState('');
	const [zipCodeCompany, setZipCodeCompany] = useState('');
	const [cnpjCompany, setCnpjCompany] = useState('');
	const [numberCompany, setNumberCompany] = useState('');

	const [nameClient, setNameClient] = useState('');
	const [cpfClient, setCpfClient] = useState('');
	const [addressClient, setAddressClient] = useState('');
	const [districtClient, setDistrictClient] = useState('');
	const [zipCodeClient, setZipCodeClient] = useState('');
	const [ufClient, setUfClient] = useState('');
	const [cityClient, setCityClient] = useState('');
	const [municipalRegistrationClient, setMunicipalRegistrationClient] =
		useState('');
	const [phoneClient, setPhoneClient] = useState('');

	const [itemInfo, setItemInfo] = useState(0);
	const [textInfo, setTextInfo] = useState('');
	const [addressInfo, setAddressInfo] = useState('');
	const [valueInfo, setValueInfo] = useState(0);

	const [formOfPaymentPayment, setFormOfPaymentPayment] = useState('');
	const [valuePayment, setValuePayment] = useState('');
	const [maturityPayment, setMaturityPayment] = useState('');

	const [valueTotal, setValueTotal] = useState('');

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('nfe')) {
			const nfe = JSON.parse(localStorage.getItem('nfe') as string);
			setNameCompany(nfe.nameCompany);
			setSocialReasonCompany(nfe.socialReasonCompany);
			setAddressCompany(nfe.addressCompany);
			setZipCodeCompany(nfe.zipCodeCompany);
			setCnpjCompany(nfe.cnpjCompany);
			setNumberCompany(nfe.numberCompany);

			setNameClient(nfe.nameClient);
			setCpfClient(nfe.cpfClient);
			setAddressClient(nfe.addressClient);
			setDistrictClient(nfe.districtClient);
			setZipCodeClient(nfe.zipCodeClient);
			setUfClient(nfe.ufClient);
			setCityClient(nfe.cityClient);
			setMunicipalRegistrationClient(nfe.municipalRegistrationClient);
			setPhoneClient(nfe.phoneClient);

			setItemInfo(nfe.itemInfo);
			setTextInfo(nfe.textInfo);
			setAddressInfo(nfe.addressInfo);
			setValueInfo(nfe.valueInfo);

			setFormOfPaymentPayment(nfe.formOfPaymentPayment);
			setValuePayment(nfe.valuePayment);
			setMaturityPayment(nfe.maturityPayment);

			setValueTotal(nfe.valueTotal);
		}
	}, []);

	useEffect(() => {
		if (!localStorage.getItem('count')) {
			console.log(0);
		}
		const number = Number(localStorage.getItem('count'));
		setCount(number);
	}, [dispatch]);

	const targetRef = () => document.getElementById('targetRef');

	const options: Options = {
		method: 'save',

		page: {
			// margin is in MM, default is Margin.NONE = 0
			margin: Margin.SMALL,
			// default is 'A4'
			format: 'A4',
			// default is 'portrait'
			orientation: 'portrait',
		},
	};

	return (
		<>
			<Container
				sx={{
					width: widthPdf,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						width: '100%',
						height: '100vh',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						pt: 12,
					}}
				>
					<Container
						id="targetRef"
						disableGutters
						sx={{
							width: '100%',
							pt: 4,
							pl: 6,
						}}
					>
						<FirstLine
							disabledFirstLine={disabledFirstLine}
							setDisabledFirstLine={setDisabledFirstLine}
							count={count}
							setCount={setCount}
							nameCompany={nameCompany}
							setNameCompany={setNameCompany}
							addressCompany={addressCompany}
							setAddressCompany={setAddressCompany}
							cnpjCompany={cnpjCompany}
							setCnpjCompany={setCnpjCompany}
							numberCompany={numberCompany}
							setNumberCompany={setNumberCompany}
							socialReasonCompany={socialReasonCompany}
							setSocialReasonCompany={setSocialReasonCompany}
							zipCodeCompany={zipCodeCompany}
							setZipCodeCompany={setZipCodeCompany}
						/>
						<SecondLine
							disabledSecondLine={disabledSecondLine}
							setDisabledSecondLine={setDisabledSecondLine}
							addressClient={addressClient}
							setAddressClient={setAddressClient}
							cityClient={cityClient}
							setCityClient={setCityClient}
							cpfClient={cpfClient}
							setCpfClient={setCpfClient}
							districtClient={districtClient}
							setDistrictClient={setDistrictClient}
							municipalRegistrationClient={
								municipalRegistrationClient
							}
							setMunicipalRegistrationClient={
								setMunicipalRegistrationClient
							}
							nameClient={nameClient}
							setNameClient={setNameClient}
							phoneClient={phoneClient}
							setPhoneClient={setPhoneClient}
							ufClient={ufClient}
							setUfClient={setUfClient}
							zipCodeClient={zipCodeClient}
							setZipCodeClient={setZipCodeClient}
						/>

						<FourthLine
							disabled={disabled}
							setDisabled={setDisabled}
							addressInfo={addressInfo}
							setAddressInfo={setAddressInfo}
							itemInfo={itemInfo}
							setItemInfo={setItemInfo}
							textInfo={textInfo}
							setTextInfo={setTextInfo}
							valueInfo={valueInfo}
							setValueInfo={setValueInfo}
						/>
						<FifthLine
							disabledFifthLine={disabledFifthLine}
							setDisabledFifthLine={setDisabledFifhtLine}
							formOfPaymentPayment={formOfPaymentPayment}
							setFormOfPaymentPayment={setFormOfPaymentPayment}
							maturityPayment={maturityPayment}
							setMaturityPayment={setMaturityPayment}
							valuePayment={valuePayment}
							setValuePayment={setValuePayment}
						/>
						<SixthLine
							disabled={disabledSixthLine}
							setDisabled={setDisabledSixthLine}
							count={count}
							setCount={setCount}
							valueTotal={valueTotal}
							setValueTotal={setValueTotal}
						/>

						<Button
							onClick={() => {
								setWidthPdf('2480px');

								setTimeout(() => {
									generatePDF(targetRef, options);
									setCount(count + 1);
									dispatch(
										nfeCreate({
											id: '',
											addressClient: addressClient,
											addressCompany: addressCompany,
											addressInfo: addressInfo,
											cityClient: cityClient,
											cnpjCompany: cnpjCompany,
											cpfClient: cpfClient,
											districtClient: districtClient,
											formOfPaymentPayment:
												formOfPaymentPayment,
											itemInfo: itemInfo,
											maturityPayment: maturityPayment,
											municipalRegistrationClient:
												municipalRegistrationClient,
											nameClient: nameClient,
											nameCompany: nameCompany,
											numberCompany: numberCompany,
											phoneClient: phoneClient,
											socialReasonCompany:
												socialReasonCompany,
											textInfo: textInfo,
											ufClient: ufClient,
											valueInfo: valueInfo,
											valuePayment: valuePayment,
											valueTotal: valueTotal,
											zipCodeClient: zipCodeClient,
											zipCodeCompany: zipCodeCompany,
										}),
									);
									localStorage.clear();
									navigate('/');
								}, 1000);
							}}
						>
							Download PDF
						</Button>
					</Container>
				</Box>
			</Container>
		</>
	);
};
