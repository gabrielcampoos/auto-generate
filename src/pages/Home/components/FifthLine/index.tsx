import {
	Box,
	Button,
	Container,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { FifthLineSm } from './FifthLineSm';
import { useState } from 'react';
import { useAppDispatch } from '../../../../store/hooks';
import { showModalFifthLine } from '../../../../store/modules/ContextModalFifthLine/contextSliceFifthLine';
import { ModalClientFifthLine } from './ModalClient';

interface DisabledButton {
	disabledFifthLine: boolean;
	setDisabledFifthLine: React.Dispatch<React.SetStateAction<boolean>>;
	formOfPaymentPayment: string;
	setFormOfPaymentPayment: React.Dispatch<React.SetStateAction<string>>;
	valuePayment: string;
	setValuePayment: React.Dispatch<React.SetStateAction<string>>;
	maturityPayment: string;
	setMaturityPayment: React.Dispatch<React.SetStateAction<string>>;
}

export const FifthLine = ({
	disabledFifthLine,
	setDisabledFifthLine,
	formOfPaymentPayment,
	setFormOfPaymentPayment,
	valuePayment,
	setValuePayment,
	maturityPayment,
	setMaturityPayment,
}: DisabledButton) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const dispatch = useAppDispatch();

	return (
		<>
			{(smDown && (
				<>
					<FifthLineSm
						disabledFifthLine={disabledFifthLine}
						setDisabledFifthLine={setDisabledFifthLine}
						formOfPaymentPayment={formOfPaymentPayment}
						setFormOfPaymentPayment={setFormOfPaymentPayment}
						valuePayment={valuePayment}
						setValuePayment={setValuePayment}
						maturityPayment={maturityPayment}
						setMaturityPayment={setMaturityPayment}
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
									pt: 2,
									pb: 4,
								}}
							>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										fontWeight: 600,
									}}
								>
									FORMA DE PAGAMENTO: {formOfPaymentPayment}:
									R$ {valuePayment} VENCIMENTO:{' '}
									{maturityPayment}
									{/* Lei nº 8.846, de 1994, art, 1º, Locação de
									bens móveis. Comprovação de receita.
									Impossibilidade de emissão de nota fiscal. O
									auferimento de receitas pelas pessoas
									jurídicas, quando desobrigadas ou
									impossibilitadas de emissão de nota fiscal
									ou documento equivalente, em razão da
									não-autorização para impressão pelo órgão
									competente, deve ser comprovado com
									documentos de indiscutível idoneidade e
									conteúdo esclarecedor das operações a que se
									refiram, tais como recibos, livros de
									registro, contratos etc, desde que a lei não
									imponha forma especial. */}
								</Typography>
							</Box>
						</Grid>
						<Button
							disabled={disabledFifthLine}
							onClick={() => {
								setDisabledFifthLine(true);
								dispatch(showModalFifthLine('createFifthLine'));
							}}
						>
							add
						</Button>
					</Grid>
					<ModalClientFifthLine
						formOfPaymentPayment={formOfPaymentPayment}
						setFormOfPaymentPayment={setFormOfPaymentPayment}
						valuePayment={valuePayment}
						setValuePayment={setValuePayment}
						maturityPayment={maturityPayment}
						setMaturityPayment={setMaturityPayment}
					/>
				</>
			)}
		</>
	);
};
