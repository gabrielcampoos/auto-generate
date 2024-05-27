import {
	Box,
	Button,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { SixthLineSm } from './SixthLineSm';
import { useState } from 'react';
import { useAppDispatch } from '../../../../store/hooks';
import { showModalSixthLine } from '../../../../store/modules/ContextModalSixthLine/contextSliceSixthLine';
import { ModalClientSixthLine } from './ModalClient';

interface DisabledButton {
	disabled: boolean;
	setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
	valueTotal: string;
	setValueTotal: React.Dispatch<React.SetStateAction<string>>;
}

export const SixthLine = ({
	disabled,
	setDisabled,
	count,
	setCount,
	valueTotal,
	setValueTotal,
}: DisabledButton) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const dispatch = useAppDispatch();

	return (
		<>
			{(smDown && (
				<>
					<SixthLineSm
						disabled={disabled}
						setDisabled={setDisabled}
						count={count}
						setCount={setCount}
						valueTotal={valueTotal}
						setValueTotal={setValueTotal}
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
							}}
						>
							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									borderBottom: '1px solid #000',
									pt: 3,
									pb: 3,
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
									OBSERVAÇÃO: Não incidência de ISSQN sobre
									locação de bens móveis decorrente do veto
									presidencial ao subitem 3.01 da lista anexa
									a LC 116/2003.
								</Typography>
							</Box>
						</Grid>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								pt: 4,
							}}
						>
							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									borderBottom: '1px solid #000',
								}}
							>
								<Button
									disabled={disabled}
									onClick={() => {
										setDisabled(true);
										dispatch(
											showModalSixthLine(
												'createSixthLine',
											),
										);
									}}
								>
									Add
								</Button>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										fontWeight: 700,
										flex: 0.4,
									}}
								>
									Valor Total da Fatura: R$ {valueTotal}
								</Typography>
							</Box>
						</Box>
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
							}}
						>
							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									pt: 3,
									pb: 3,
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
									NÃO INCIDÊNCIA DE ISS LEI COMPLEMENTAR Nº
									116, DE 31 DE JULHO DE 2003.
								</Typography>
							</Box>
						</Grid>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Box
								sx={{
									width: '82.5%',
									display: 'flex',
									justifyContent: 'flex-start',
									alignItems: 'center',
									borderRight: '1px solid #000',
									borderTop: '1px solid #000',
									pl: 4,
								}}
							>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
									}}
								>
									RECEBI(EMOS) DE EMPRESA, AS LOCAÇÕES
									CONSTANTES NESSA FATURA INDICADA AO LADO
								</Typography>
							</Box>

							<Box
								sx={{
									width: '20%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									borderTop: '1px solid #000',
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
							</Box>
						</Box>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								borderTop: '1px solid #000',
							}}
						>
							<Box
								sx={{
									width: '50%',
									display: 'flex',
									justifyContent: 'flex-start',
									alignItems: 'center',
									borderRight: '1px solid #000',
								}}
							>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										pl: 4,
										mb: 3,
									}}
								>
									DATA DO RECEBIMENTO
								</Typography>
							</Box>

							<Box
								sx={{
									width: '50%',
									display: 'flex',
									justifyContent: 'flex-start',
									alignItems: 'center',
									borderRight: '1px solid #000',
								}}
							>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										pl: 2,
										mb: 3,
									}}
								>
									IDENTIFICAÇÃO E ASSINATURA DO RECEBIDOR
								</Typography>
							</Box>

							<Box
								sx={{
									width: '24.2%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										textAlign: 'center',
										mb: 3,
									}}
								>
									Nº 0000{count}
								</Typography>
							</Box>
						</Box>
					</Grid>
					<ModalClientSixthLine
						valueTotal={valueTotal}
						setValueTotal={setValueTotal}
					/>
				</>
			)}
		</>
	);
};
