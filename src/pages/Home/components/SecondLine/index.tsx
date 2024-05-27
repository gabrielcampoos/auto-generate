import {
	Box,
	Button,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useAppDispatch } from '../../../../store/hooks';
import { showModal } from '../../../../store/modules/ContextModal/contextSlice';
import { ModalClientSecondLine } from './ModalClient';
import { useState } from 'react';
import { SecondLineSm } from './SecondLineSm';
import { clientCreate } from '../../../../store/modules/Client/clientSlice';

interface DisabledButton {
	disabledSecondLine: boolean;
	setDisabledSecondLine: React.Dispatch<React.SetStateAction<boolean>>;
	nameClient: string;
	setNameClient: React.Dispatch<React.SetStateAction<string>>;
	cpfClient: string;
	setCpfClient: React.Dispatch<React.SetStateAction<string>>;
	addressClient: string;
	setAddressClient: React.Dispatch<React.SetStateAction<string>>;
	districtClient: string;
	setDistrictClient: React.Dispatch<React.SetStateAction<string>>;
	zipCodeClient: string;
	setZipCodeClient: React.Dispatch<React.SetStateAction<string>>;
	ufClient: string;
	setUfClient: React.Dispatch<React.SetStateAction<string>>;
	cityClient: string;
	setCityClient: React.Dispatch<React.SetStateAction<string>>;
	municipalRegistrationClient: string;
	setMunicipalRegistrationClient: React.Dispatch<
		React.SetStateAction<string>
	>;
	phoneClient: string;
	setPhoneClient: React.Dispatch<React.SetStateAction<string>>;
}

export const SecondLine = ({
	disabledSecondLine,
	setDisabledSecondLine,
	nameClient,
	setNameClient,
	cpfClient,
	setCpfClient,
	addressClient,
	setAddressClient,
	districtClient,
	setDistrictClient,
	zipCodeClient,
	setZipCodeClient,
	ufClient,
	setUfClient,
	cityClient,
	setCityClient,
	municipalRegistrationClient,
	setMunicipalRegistrationClient,
	phoneClient,
	setPhoneClient,
}: DisabledButton) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const dispatch = useAppDispatch();

	return (
		<>
			{(smDown && (
				<>
					<SecondLineSm
						disabledSecondLine={disabledSecondLine}
						setDisabledSecondLine={setDisabledSecondLine}
						nameClient={nameClient}
						setNameClient={setNameClient}
						cpfClient={cpfClient}
						setCpfClient={setCpfClient}
						addressClient={addressClient}
						setAddressClient={setAddressClient}
						districtClient={districtClient}
						setDistrictClient={setDistrictClient}
						zipCodeClient={zipCodeClient}
						setZipCodeClient={setZipCodeClient}
						ufClient={ufClient}
						setUfClient={setUfClient}
						cityClient={cityClient}
						setCityClient={setCityClient}
						municipalRegistrationClient={
							municipalRegistrationClient
						}
						setMunicipalRegistrationClient={
							setMunicipalRegistrationClient
						}
						phoneClient={phoneClient}
						setPhoneClient={setPhoneClient}
					/>
				</>
			)) || (
				<>
					<Grid
						container
						spacing={{ xs: 2, sm: 2, md: 4 }}
						columns={{ xs: 12, sm: 12, md: 12 }}
						sx={{
							borderLeft: '1px solid #000',
							borderRight: '1px solid #000',
							borderBottom: '1px solid #000',
						}}
					>
						<Grid
							item
							xs={12}
							sm={12}
							md={12}
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'column',
							}}
						>
							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'flex-start',
									alignItems: 'center',
									mb: 2,
									pt: 2,
								}}
							>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										fontWeight: 700,
									}}
								>
									DESTINATÁRIO
								</Typography>
							</Box>

							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
							>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										flex: 0.5,
									}}
								>
									Razão Social / Nome Cliente:
									<br />
									{nameClient}
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										flex: 0.5,
									}}
								>
									CNPJ / CPF:
									<br />
									{cpfClient}
								</Typography>
							</Box>

							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									mt: 3,
								}}
							>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										flex: 1,
									}}
								>
									Endereço:
									<br />
									{addressClient}
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										flex: 0.4,
									}}
								>
									Bairro:
									<br />
									{districtClient}
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										flex: 0.4,
									}}
								>
									CEP:
									<br />
									{zipCodeClient}
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										flex: 0.2,
									}}
								>
									UF:
									<br />
									{ufClient}
								</Typography>
							</Box>

							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									mt: 3,
								}}
							>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										textAlign: 'start',
										flex: 1,
									}}
								>
									Cidade:
									<br />
									{cityClient}
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										textAlign: 'start',
										flex: 0.6,
									}}
								>
									Inscrição Estadual:
									<br />
									{municipalRegistrationClient}
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										flex: 0.4,
									}}
								>
									Telefone:
									<br />
									{phoneClient}
								</Typography>
							</Box>
						</Grid>
						<Button
							disabled={disabledSecondLine}
							onClick={() => {
								setDisabledSecondLine(true);
								dispatch(showModal('create'));
							}}
						>
							add
						</Button>
					</Grid>
					<ModalClientSecondLine
						nameClient={nameClient}
						setNameClient={setNameClient}
						cpfClient={cpfClient}
						setCpfClient={setCpfClient}
						addressClient={addressClient}
						setAddressClient={setAddressClient}
						districtClient={districtClient}
						setDistrictClient={setDistrictClient}
						zipCodeClient={zipCodeClient}
						setZipCodeClient={setZipCodeClient}
						ufClient={ufClient}
						setUfClient={setUfClient}
						cityClient={cityClient}
						setCityClient={setCityClient}
						municipalRegistrationClient={
							municipalRegistrationClient
						}
						setMunicipalRegistrationClient={
							setMunicipalRegistrationClient
						}
						phoneClient={phoneClient}
						setPhoneClient={setPhoneClient}
					/>
				</>
			)}
		</>
	);
};
