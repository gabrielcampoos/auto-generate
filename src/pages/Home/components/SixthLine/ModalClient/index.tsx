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
import { hideModalSixthLine } from '../../../../../store/modules/ContextModalSixthLine/contextSliceSixthLine';
import { totalValueCreate } from '../../../../../store/modules/TotalValue/totalValueSlice';
import { nfeCreate } from '../../../../../store/modules/Nfe/nfeSlice';

interface ClientProps {
	valueTotal: string;
	setValueTotal: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalClientSixthLine = ({
	valueTotal,
	setValueTotal,
}: ClientProps) => {
	const dispatch = useAppDispatch();
	const { context, isOpen } = useAppSelector(
		(state) => state.contextSixthLine,
	);

	const closeModal = () => {
		dispatch(hideModalSixthLine());
	};

	const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		switch (context) {
			case 'createSixthLine':
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
					{context === 'createSixthLine' && 'Criar dados'}
					{/* {context === 'editar' && 'Editar os'}
					{context === 'excluir' && 'Excluir os'} */}
				</DialogTitle>
				{context !== 'deleteSixthLine' && (
					<>
						<DialogContent>
							<TextField
								autoFocus
								margin="dense"
								id="value"
								name="value"
								label="Valor Total"
								type="number"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setValueTotal(ev.target.value)
								}
								value={valueTotal}
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
