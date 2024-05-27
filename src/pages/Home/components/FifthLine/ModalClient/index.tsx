import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from '@mui/material';
import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { hideModal } from '../../../../../store/modules/ContextModal/contextSlice';
import { hideModalFirstLine } from '../../../../../store/modules/ContextModalFirstLine/contextSliceFirstLine';
import { hideModalFifthLine } from '../../../../../store/modules/ContextModalFifthLine/contextSliceFifthLine';
import { paymentCreate } from '../../../../../store/modules/Payment/paymentSlice';
import { nfeCreate } from '../../../../../store/modules/Nfe/nfeSlice';

interface ClientProps {
	formOfPaymentPayment: string;
	setFormOfPaymentPayment: React.Dispatch<React.SetStateAction<string>>;
	valuePayment: string;
	setValuePayment: React.Dispatch<React.SetStateAction<string>>;
	maturityPayment: string;
	setMaturityPayment: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalClientFifthLine = ({
	formOfPaymentPayment,
	setFormOfPaymentPayment,
	valuePayment,
	setValuePayment,
	maturityPayment,
	setMaturityPayment,
}: ClientProps) => {
	const dispatch = useAppDispatch();
	const { context, isOpen } = useAppSelector(
		(state) => state.contextFifthLine,
	);

	const closeModal = () => {
		dispatch(hideModalFifthLine());
	};

	const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		switch (context) {
			case 'createFifthLine':
				closeModal();
				break;
			// case 'editar':
			// 	//lógica para editar
			// 	if (osSelecionada.id) {
			// 		dispatch(
			// 			editarOs({
			// 				id: osSelecionada.id,
			// 				equipamento: equipamento,
			// 				descricao: descricao,
			// 				valor: valor,
			// 			}),
			// 		);
			// 	}
			// 	setEquipamento('');
			// 	setDescricao('');
			// 	setValor(0);

			// 	dispatch(apagaId());
			// 	fechaModal();

			// 	break;
			// case 'excluir':
			// 	//lógica de exclusão
			// 	if (osSelecionada.id) {
			// 		dispatch(excluirOs(osSelecionada.id));
			// 	}
			// 	dispatch(apagaId());
			// 	fechaModal();
			// 	dispatch(refresh);
			// 	break;
		}
	};

	return (
		<Dialog open={isOpen}>
			<Box component={'form'} onSubmit={handleSubmit}>
				<DialogTitle>
					{context === 'createFifthLine' && 'Criar dados'}
					{/* {context === 'editar' && 'Editar os'}
					{context === 'excluir' && 'Excluir os'} */}
				</DialogTitle>
				{context !== 'deleteFifthLine' && (
					<>
						<DialogContent>
							<TextField
								autoFocus
								margin="dense"
								id="formOfPayment"
								name="formOfPayment"
								label="Forma de Pagamento"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setFormOfPaymentPayment(ev.target.value)
								}
								value={formOfPaymentPayment}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="value"
								name="value"
								label="Valor"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setValuePayment(ev.target.value)
								}
								value={valuePayment}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="maturity"
								name="maturity"
								label="Vencimento"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setMaturityPayment(ev.target.value)
								}
								value={maturityPayment}
								multiline
								minRows={3}
							/>
						</DialogContent>
						<DialogActions>
							<Button
								type="button"
								variant="outlined"
								onClick={closeModal}
							>
								Cancelar
							</Button>
							<Button
								type="submit"
								color="success"
								variant="contained"
							>
								Salvar
							</Button>
						</DialogActions>
					</>
				)}

				{/* {contexto === 'excluir' && (
					<>
						<DialogContent>
							<Typography variant="body1">
								Você deseja mesmo finalizar essa ordem de
								serviço?
							</Typography>
						</DialogContent>

						<DialogActions>
							<Button
								type="button"
								variant="outlined"
								onClick={fechaModal}
							>
								Cancelar
							</Button>
							<Button
								type="submit"
								color="error"
								variant="contained"
							>
								Finalizar
							</Button>
						</DialogActions>
					</>
				)} */}
			</Box>
		</Dialog>
	);
};
