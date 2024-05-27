import {
	Box,
	Button,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useAppDispatch } from '../../../../../store/hooks';
import { showModal } from '../../../../../store/modules/ContextModal/contextSlice';
import { ModalClientSecondLine } from '../ModalClient';
import { useState } from 'react';

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

export const SecondLineSm = ({
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
	const dispatch = useAppDispatch();

	return (
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
				<Box
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
							justifyContent: 'center',
							alignItems: 'center',
							mb: 2,
							mt: 4,
						}}
					>
						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '12px',
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
								fontSize: '10px',
								flex: 0.3,
								textAlign: 'center',
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
								fontSize: '10px',
								flex: 0.3,
								textAlign: 'center',
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
							mt: 2,
							mb: 2,
						}}
					>
						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '10px',
								flex: 1,
								textAlign: 'center',
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
								fontSize: '10px',
								flex: 1,
								textAlign: 'center',
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
								fontSize: '10px',
								flex: 0.3,
								textAlign: 'center',
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
								fontSize: '10px',
								flex: 1,
								textAlign: 'center',
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
						}}
					>
						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '10px',
								flex: 0.78,
								textAlign: 'center',
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
								fontSize: '10px',
								flex: 1,
								textAlign: 'center',
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
								fontSize: '10px',
								flex: 0.78,
								textAlign: 'center',
							}}
						>
							Telefone:
							<br />
							{phoneClient}
						</Typography>
					</Box>
				</Box>
				<Button
					size="small"
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
				municipalRegistrationClient={municipalRegistrationClient}
				setMunicipalRegistrationClient={setMunicipalRegistrationClient}
				phoneClient={phoneClient}
				setPhoneClient={setPhoneClient}
			/>
		</>
	);
};
