import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from '@mui/material';
import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { hideModal } from '../../../../../store/modules/ContextModal/contextSlice';
import { clientCreate } from '../../../../../store/modules/Client/clientSlice';
import { nfeCreate } from '../../../../../store/modules/Nfe/nfeSlice';

interface ClientProps {
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

export const ModalClientSecondLine = ({
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
}: ClientProps) => {
	const dispatch = useAppDispatch();
	const { context, isOpen } = useAppSelector(
		(state) => state.contextSecondLine,
	);

	const closeModal = () => {
		dispatch(hideModal());
	};

	const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		switch (context) {
			case 'create':
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
					{context === 'create' && 'Criar cliente'}
					{/* {context === 'editar' && 'Editar os'}
					{context === 'excluir' && 'Excluir os'} */}
				</DialogTitle>
				{context !== 'delete' && (
					<>
						<DialogContent>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								name="name"
								label="Nome Cliente"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setNameClient(ev.target.value)
								}
								value={nameClient}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="cpf"
								name="cpf"
								label="CNPJ / CPF"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) => setCpfClient(ev.target.value)}
								value={cpfClient}
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
									setAddressClient(ev.target.value)
								}
								value={addressClient}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="district"
								name="district"
								label="Bairro"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setDistrictClient(ev.target.value)
								}
								value={districtClient}
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
									setZipCodeClient(ev.target.value)
								}
								value={zipCodeClient}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="uf"
								name="uf"
								label="UF"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) => setUfClient(ev.target.value)}
								value={ufClient}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="city"
								name="city"
								label="Cidade"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setCityClient(ev.target.value)
								}
								value={cityClient}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="municipalRegistration"
								name="municipalRegistration"
								label="Inscrição Estadual"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setMunicipalRegistrationClient(
										ev.target.value,
									)
								}
								value={municipalRegistrationClient}
								multiline
								minRows={3}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="phone"
								name="phone"
								label="Telefone"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setPhoneClient(ev.target.value)
								}
								value={phoneClient}
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
