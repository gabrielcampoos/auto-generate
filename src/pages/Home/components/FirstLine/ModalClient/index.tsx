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
import { hideModalFirstLine } from '../../../../../store/modules/ContextModalFirstLine/contextSliceFirstLine';
import { clientCreate } from '../../../../../store/modules/Client/clientSlice';
import { companyCreate } from '../../../../../store/modules/Company/companySlice';
import { nfeCreate } from '../../../../../store/modules/Nfe/nfeSlice';

interface ClientProps {
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

export const ModalClientFirstLine = ({
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
}: ClientProps) => {
	const dispatch = useAppDispatch();
	const { context, isOpen } = useAppSelector(
		(state) => state.contextSliceFirstLine,
	);

	const closeModal = () => {
		dispatch(hideModalFirstLine());
	};

	const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		switch (context) {
			case 'createFirstLine':
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
					{context === 'createFirstLine' && 'Criar cabeçalho'}
					{/* {context === 'editar' && 'Editar os'}
					{context === 'excluir' && 'Excluir os'} */}
				</DialogTitle>
				{context !== 'deleteFirstLine' && (
					<>
						<DialogContent>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								name="name"
								label="Nome Fantasia"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setNameCompany(ev.target.value)
								}
								value={nameCompany}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="socialReason"
								name="socialReason"
								label="Razão Social"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setSocialReasonCompany(ev.target.value)
								}
								value={socialReasonCompany}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="address"
								name="address"
								label="Endereço"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setAddressCompany(ev.target.value)
								}
								value={addressCompany}
								multiline
								minRows={3}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="number"
								name="number"
								label="Número"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setNumberCompany(ev.target.value)
								}
								value={numberCompany}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="zipCode"
								name="zipCode"
								label="CEP"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setZipCodeCompany(ev.target.value)
								}
								value={zipCodeCompany}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="cnpj"
								name="cnpj"
								label="CNPJ"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setCnpjCompany(ev.target.value)
								}
								value={cnpjCompany}
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
