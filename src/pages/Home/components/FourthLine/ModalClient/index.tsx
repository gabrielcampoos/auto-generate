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
import { hideModalFourthLine } from '../../../../../store/modules/ContextModalFourthLine/contextSliceFourthLine';
import { TextEnum, TextType } from '../../../../../store/types';
import { infoCreate } from '../../../../../store/modules/Info/infoSlice';
import { nfeCreate } from '../../../../../store/modules/Nfe/nfeSlice';

interface ClientProps {
	itemInfo: number;
	setItemInfo: React.Dispatch<React.SetStateAction<number>>;
	textInfo: string;
	setTextInfo: React.Dispatch<React.SetStateAction<string>>;
	addressInfo: string;
	setAddressInfo: React.Dispatch<React.SetStateAction<string>>;
	valueInfo: number;
	setValueInfo: React.Dispatch<React.SetStateAction<number>>;
}

export const ModalClientFourthLine = ({
	itemInfo,
	setItemInfo,
	textInfo,
	setTextInfo,
	addressInfo,
	setAddressInfo,
	valueInfo,
	setValueInfo,
}: ClientProps) => {
	const dispatch = useAppDispatch();
	const { context, isOpen } = useAppSelector(
		(state) => state.contextFourthLine,
	);

	const closeModal = () => {
		dispatch(hideModalFourthLine());
	};

	const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		switch (context) {
			case 'createFourthLine':
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
					{context === 'createFourthLine' && 'Criar dados'}
					{/* {context === 'editar' && 'Editar os'}
					{context === 'excluir' && 'Excluir os'} */}
				</DialogTitle>
				{context !== 'deleteFourtLine' && (
					<>
						<DialogContent>
							<TextField
								autoFocus
								margin="dense"
								id="item"
								name="item"
								label="Código"
								type="number"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setItemInfo(Number(ev.target.value))
								}
								value={itemInfo}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="text"
								name="text"
								label="1 - BANHEIROS / 2 - LOCAÇÃO"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) => {
									if (ev.target.value === '1') {
										setTextInfo(
											'Os sanitários portáteis são autônomos, dispensam redes de água e esgoto. Possuem vaso sanitário, suporte para papel e mictório.Todo equipamento é de fabricação PRÓPRIA, produzido em polietileno, de acordo com as normas da ABNT e NRs, metragem e piso antiderrapante, aberturas para a circulação de ar, teto translúcido para absorção de luz, trinco e porta com fechamento automático.  Altura: 2,25m Largura: 1,04m Comprimento: 1,04m',
										);
									} else {
										setTextInfo(
											'Módulo habitável termo acústico é um produto que pode ser usado em Módulo para Sanitários, em todo o tipo de eventos culturais e esportivos, em escolas e obras em geral. \n Com equipes e serviços especializados na locação e venda de estruturas modulares, pode ser usado  tanto soluções definitivas como provisórias às mais variadas necessidades. Com tecnologia considerada na sua construção bem como as suas especificações técnicas,  nosso produto obedecer às normas NR10, NR18 e NR24.Possuindo 12 metros² e 6 box para utilização.',
										);
									}
								}}
								value={textInfo}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="address"
								name="address"
								label="Quantidade / Valor Unitário"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setAddressInfo(ev.target.value)
								}
								value={addressInfo}
								multiline
								minRows={3}
							/>

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
									setValueInfo(Number(ev.target.value))
								}
								value={valueInfo}
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
