import {
	Box,
	Button,
	Container,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useState } from 'react';
import { ModalClientFourthLine } from './ModalClient';
import { useAppDispatch } from '../../../../store/hooks';
import { showModalFourthLine } from '../../../../store/modules/ContextModalFourthLine/contextSliceFourthLine';
import { FourthLineSm } from './FourthLineSm';

interface DisabledButton {
	disabled: boolean;
	setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
	itemInfo: number;
	setItemInfo: React.Dispatch<React.SetStateAction<number>>;
	textInfo: string;
	setTextInfo: React.Dispatch<React.SetStateAction<string>>;
	addressInfo: string;
	setAddressInfo: React.Dispatch<React.SetStateAction<string>>;
	valueInfo: number;
	setValueInfo: React.Dispatch<React.SetStateAction<number>>;
}

export const FourthLine = ({
	disabled,
	setDisabled,
	itemInfo,
	setItemInfo,
	textInfo,
	setTextInfo,
	addressInfo,
	setAddressInfo,
	valueInfo,
	setValueInfo,
}: DisabledButton) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const dispatch = useAppDispatch();

	return (
		<>
			{(smDown && (
				<>
					<FourthLineSm
						disabled={disabled}
						setDisabled={setDisabled}
						itemInfo={itemInfo}
						setItemInfo={setItemInfo}
						textInfo={textInfo}
						setTextInfo={setTextInfo}
						addressInfo={addressInfo}
						setAddressInfo={setAddressInfo}
						valueInfo={valueInfo}
						setValueInfo={setValueInfo}
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
									DADOS DA LOCAÇÃO
								</Typography>
							</Box>
						</Grid>
						<Container>
							<Grid
								item
								xs={12}
								sm={12}
								md={12}
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'space-around',
									alignItems: 'center',
								}}
							>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										borderTop: '1px solid #000',
										borderRight: '1px solid #000',
										borderLeft: '1px solid #000',
										borderBottom: '1px solid #000',
										flex: 1,
										textAlign: 'center',
										fontWeight: 700,
									}}
								>
									Código
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										borderTop: '1px solid #000',
										borderRight: '1px solid #000',
										borderBottom: '1px solid #000',
										flex: 1,
										textAlign: 'center',
										fontWeight: 700,
									}}
								>
									Descrição / Configuração
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										borderTop: '1px solid #000',
										borderRight: '1px solid #000',
										borderBottom: '1px solid #000',
										flex: 1,
										textAlign: 'center',
										fontWeight: 700,
									}}
								>
									Quantidade / Valor Unitário
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										borderTop: '1px solid #000',
										borderRight: '1px solid #000',
										borderBottom: '1px solid #000',
										flex: 1,
										textAlign: 'center',
										fontWeight: 700,
									}}
								>
									Valor Total
								</Typography>
							</Grid>
							<Box
								sx={{
									width: '100%',
									height: '100%',
									display: 'flex',
									justifyContent: 'space-around',
									alignItems: 'center',
								}}
							>
								<Box
									sx={{
										width: '100%',
										height: '100%',
										display: 'flex',
									}}
								>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontSize: '12px',
											borderRight: '1px solid #000',
											borderLeft: '1px solid #000',
											borderBottom: '1px solid #000',
											flex: 1,
											textAlign: 'center',
										}}
									>
										{itemInfo}
									</Typography>

									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontSize: '12px',
											borderRight: '1px solid #000',
											borderBottom: '1px solid #000',
											flex: 1,
											textAlign: 'center',
										}}
									>
										{textInfo}
									</Typography>

									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontSize: '12px',
											borderBottom: '1px solid #000',
											flex: 1,
											textAlign: 'center',
										}}
									>
										{addressInfo}
									</Typography>

									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontSize: '12px',
											borderRight: '1px solid #000',
											borderLeft: '1px solid #000',
											borderBottom: '1px solid #000',
											flex: 1,
											textAlign: 'center',
										}}
									>
										R$ {valueInfo}
									</Typography>
								</Box>
							</Box>
						</Container>
						<Button
							disabled={disabled}
							sx={{
								mt: 3,
							}}
							onClick={() => {
								setDisabled(true);
								dispatch(
									showModalFourthLine('createFourthLine'),
								);
							}}
						>
							Add
						</Button>
					</Grid>
					<ModalClientFourthLine
						itemInfo={itemInfo}
						setItemInfo={setItemInfo}
						textInfo={textInfo}
						setTextInfo={setTextInfo}
						addressInfo={addressInfo}
						setAddressInfo={setAddressInfo}
						valueInfo={valueInfo}
						setValueInfo={setValueInfo}
					/>
				</>
			)}
		</>
	);
};
