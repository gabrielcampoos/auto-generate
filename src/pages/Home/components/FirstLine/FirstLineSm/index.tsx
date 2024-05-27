import { Box, Button, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch } from '../../../../../store/hooks';
import { showModalFirstLine } from '../../../../../store/modules/ContextModalFirstLine/contextSliceFirstLine';
import { ModalClientFirstLine } from '../ModalClient';

interface DisabledButton {
	disabledFirstLine: boolean;
	setDisabledFirstLine: React.Dispatch<React.SetStateAction<boolean>>;
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
	nameCompany: string;
	setNameCompany: React.Dispatch<React.SetStateAction<string>>;
	socialReasonCompany: string;
	setSocialReasonCompany: React.Dispatch<React.SetStateAction<string>>;
	addressCompany: string;
	setAddressCompany: React.Dispatch<React.SetStateAction<string>>;
	zipCodeCompany: string;
	setZipCodeCompany: React.Dispatch<React.SetStateAction<string>>;
	cnpjCompany: string;
	setCnpjCompany: React.Dispatch<React.SetStateAction<string>>;
	numberCompany: string;
	setNumberCompany: React.Dispatch<React.SetStateAction<string>>;
}

export const FirstLineSm = ({
	disabledFirstLine,
	setDisabledFirstLine,
	count,
	setCount,
	nameCompany,
	setNameCompany,
	socialReasonCompany,
	setSocialReasonCompany,
	addressCompany,
	setAddressCompany,
	zipCodeCompany,
	setZipCodeCompany,
	cnpjCompany,
	setCnpjCompany,
	numberCompany,
	setNumberCompany,
}: DisabledButton) => {
	const dispatch = useAppDispatch();

	const newData = new Date();
	const dataFormatada =
		newData.getDate() +
		'/' +
		(newData.getMonth() + 1) +
		'/' +
		newData.getFullYear();

	return (
		<>
			<Grid
				container
				spacing={{ xs: 2, sm: 2, md: 4 }}
				columns={{ xs: 12, sm: 12, md: 12 }}
				sx={{
					border: '1px solid #000',
				}}
			>
				<Grid
					item
					xs={6}
					sm={6}
					md={6}
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							gap: 2,
						}}
					>
						<Typography
							component="h1"
							variant="h5"
							sx={{
								textDecoration: 'underline',
								fontSize: '12px',
								fontWeight: 700,
							}}
						>
							{nameCompany}
						</Typography>

						<Box
							sx={{
								width: '90%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'flex-start',
								flexDirection: 'column',
							}}
						>
							<Typography
								component="h1"
								variant="h6"
								sx={{
									fontSize: '10px',
								}}
							>
								{socialReasonCompany}
							</Typography>
							<Typography
								component="p"
								variant="subtitle1"
								sx={{
									fontSize: '10px',
								}}
							>
								{addressCompany}
								<br />
								CEP: {zipCodeCompany}
							</Typography>
							<Typography
								component="p"
								variant="subtitle1"
								sx={{
									fontSize: '10px',
								}}
							>
								CNPJ: {cnpjCompany}
							</Typography>
						</Box>
					</Box>
				</Grid>

				<Grid
					item
					xs={6}
					sm={6}
					md={6}
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						borderLeft: '1px solid #000',
					}}
				>
					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							gap: 2,
						}}
					>
						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '12px',
							}}
						>
							FATURA DE LOCAÇÃO
						</Typography>

						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '10px',
							}}
						>
							N°: 0000{count}
						</Typography>

						<Typography
							component="p"
							variant="subtitle1"
							sx={{
								fontSize: '10px',
							}}
						>
							Emissão: {`${dataFormatada}`}
						</Typography>
					</Box>
				</Grid>
				<Button
					disabled={disabledFirstLine}
					sx={{
						width: '50%',
						justifyContent: 'flex-start',
						alignItems: 'center',
						pl: 2,
						borderRight: '1px solid #000',
						borderRadius: '0',
						ml: 0.1,
					}}
					onClick={() => {
						setDisabledFirstLine(true);
						dispatch(showModalFirstLine('createFirstLine'));
					}}
				>
					add
				</Button>
			</Grid>
			<ModalClientFirstLine
				nameCompany={nameCompany}
				setNameCompany={setNameCompany}
				socialReasonCompany={socialReasonCompany}
				setSocialReasonCompany={setSocialReasonCompany}
				addressCompany={addressCompany}
				setAddressCompany={setAddressCompany}
				zipCodeCompany={zipCodeCompany}
				setZipCodeCompany={setZipCodeCompany}
				cnpjCompany={cnpjCompany}
				setCnpjCompany={setCnpjCompany}
				numberCompany={numberCompany}
				setNumberCompany={setNumberCompany}
			/>
		</>
	);
};
