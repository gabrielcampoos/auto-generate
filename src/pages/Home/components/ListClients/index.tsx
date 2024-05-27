import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
	clientList,
	clientListAll,
} from '../../../../store/modules/Client/clientAdapter';
import { nfeList, nfeListAll } from '../../../../store/modules/Nfe/nfeAdapter';
import { nfeGet } from '../../../../store/modules/Nfe/nfeSlice';

interface ListClientsProps {
	checked: string;
	setChecked: React.Dispatch<React.SetStateAction<string>>;
}

export default function ListClients({ checked, setChecked }: ListClientsProps) {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const selectNfe = useAppSelector(nfeListAll);

	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(nfeList());
	}, [dispatch]);

	const handleToggle = (value: string) => () => {
		const nfe = selectNfe.find((nfe) => nfe.id === value);

		setChecked(nfe!.id);

		// const newChecked = [...checked];

		// if (value === nfe?.id) {
		// 	newChecked.push(value);
		// } else {
		// 	newChecked.splice(
		// 		checked.findIndex((client) => client.indexOf(value)),
		// 		1,
		// 	);
		// }
		// setChecked(newChecked);
	};
	const newData = new Date();
	const dataFormatada =
		newData.getDate() +
		'/' +
		(newData.getMonth() + 1) +
		'/' +
		newData.getFullYear();

	const nextDate =
		newData.getDate() +
		'/' +
		(newData.getMonth() + 2) +
		'/' +
		newData.getFullYear();

	return (
		<>
			{(smDown && (
				<>
					<List
						dense
						sx={{ width: '100%', bgcolor: 'background.paper' }}
					>
						{selectNfe.map(
							({
								id,
								nameClient,
								cpfClient,
								addressClient,
								districtClient,
								zipCodeClient,
								ufClient,
								cityClient,
								municipalRegistrationClient,
								phoneClient,
								createdAt,
							}) => {
								const labelId = `checkbox-list-secondary-label-${id}`;
								return (
									<ListItem
										key={id}
										secondaryAction={
											<Checkbox
												edge="end"
												inputProps={{
													'aria-labelledby': labelId,
												}}
												size="small"
												onChange={handleToggle(id)}
											/>
										}
										disablePadding
										sx={{
											mb: 2,
										}}
									>
										<ListItemButton>
											<ListItemText id={labelId}>
												<Box
													sx={{
														width: '100%',
													}}
												>
													<Box
														key={id}
														sx={{
															width: '100%',
															display: 'flex',
															justifyContent:
																'space-between',
															alignItems:
																'center',
														}}
													>
														<Typography>
															<span
																style={{
																	fontWeight: 700,
																	fontSize:
																		'.7rem',
																}}
															>
																Nome:
															</span>{' '}
														</Typography>

														<Typography>
															<span
																style={{
																	fontWeight: 700,
																	fontSize:
																		'.7rem',
																}}
															>
																Cidade:
															</span>{' '}
														</Typography>

														<Typography>
															<span
																style={{
																	fontWeight: 700,
																	fontSize:
																		'.7rem',
																}}
															>
																Telefone:
															</span>{' '}
														</Typography>
														<Typography>
															<span
																style={{
																	fontWeight: 700,
																	fontSize:
																		'.7rem',
																}}
															>
																Data:
															</span>{' '}
														</Typography>

														<Typography>
															<span
																style={{
																	fontWeight: 700,
																	color: 'red',
																	fontSize:
																		'.7rem',
																}}
															>
																Gerar novamente:
															</span>{' '}
														</Typography>
													</Box>

													<Box
														key={id}
														sx={{
															width: '100%',
															display: 'flex',
															justifyContent:
																'space-around',
															alignItems:
																'center',
														}}
													>
														<Typography>
															<span
																style={{
																	fontWeight: 700,
																	fontSize:
																		'.7rem',
																}}
															>
																{nameClient}
															</span>
														</Typography>

														<Typography>
															<span
																style={{
																	fontWeight: 700,
																	fontSize:
																		'.7rem',
																}}
															>
																{cityClient}
															</span>
														</Typography>

														<Typography>
															<span
																style={{
																	fontWeight: 700,
																	fontSize:
																		'.7rem',
																}}
															>
																{phoneClient}
															</span>
														</Typography>
														<Typography>
															<span
																style={{
																	fontWeight: 700,
																	fontSize:
																		'.7rem',
																}}
															>
																{`${dataFormatada}`}
															</span>
														</Typography>
														<Typography>
															<span
																style={{
																	fontWeight: 700,
																	fontSize:
																		'.7rem',
																}}
															>
																{`${nextDate}`}
															</span>
														</Typography>
													</Box>
												</Box>
											</ListItemText>
										</ListItemButton>
									</ListItem>
								);
							},
						)}
					</List>
				</>
			)) || (
				<>
					<List
						dense
						sx={{ width: '100%', bgcolor: 'background.paper' }}
					>
						{selectNfe.map(
							({
								id,
								nameClient,
								cpfClient,
								addressClient,
								districtClient,
								zipCodeClient,
								ufClient,
								cityClient,
								municipalRegistrationClient,
								phoneClient,
								createdAt,
							}) => {
								const labelId = `checkbox-list-secondary-label-${id}`;
								return (
									<ListItem
										key={id}
										secondaryAction={
											<Checkbox
												edge="end"
												inputProps={{
													'aria-labelledby': labelId,
												}}
												onChange={handleToggle(id)}
											/>
										}
										disablePadding
										sx={{
											mb: 2,
										}}
									>
										<ListItemButton>
											<ListItemText id={labelId}>
												<Box
													key={id}
													sx={{
														width: '100%',
														display: 'flex',
														justifyContent:
															'space-around',
														alignItems: 'center',
													}}
												>
													<Typography>
														<span
															style={{
																fontWeight: 700,
															}}
														>
															Nome:
														</span>{' '}
														{nameClient}
													</Typography>
													<Typography>
														<span
															style={{
																fontWeight: 700,
															}}
														>
															Cpf:{' '}
														</span>
														{cpfClient}
													</Typography>
													<Typography>
														<span
															style={{
																fontWeight: 700,
															}}
														>
															Endereço:
														</span>{' '}
														{addressClient}
													</Typography>
													<Typography>
														<span
															style={{
																fontWeight: 700,
															}}
														>
															Bairro:
														</span>{' '}
														{districtClient}
													</Typography>
													<Typography>
														<span
															style={{
																fontWeight: 700,
															}}
														>
															Cep:
														</span>{' '}
														{zipCodeClient}
													</Typography>
													<Typography>
														<span
															style={{
																fontWeight: 700,
															}}
														>
															Uf:
														</span>{' '}
														{ufClient}
													</Typography>
													<Typography>
														<span
															style={{
																fontWeight: 700,
															}}
														>
															Cidade:
														</span>{' '}
														{cityClient}
													</Typography>
													<Typography>
														<span
															style={{
																fontWeight: 700,
															}}
														>
															Registro municipal:
														</span>{' '}
														{
															municipalRegistrationClient
														}
													</Typography>
													<Typography>
														<span
															style={{
																fontWeight: 700,
															}}
														>
															Telefone:
														</span>{' '}
														{phoneClient}
													</Typography>
													<Typography>
														<span
															style={{
																fontWeight: 700,
															}}
														>
															Data:
														</span>{' '}
														{`${dataFormatada}`}
													</Typography>

													<Typography>
														<span
															style={{
																fontWeight: 700,
																color: 'red',
															}}
														>
															Gerar novamente:
														</span>{' '}
														{`${nextDate}`}
													</Typography>
												</Box>
											</ListItemText>
										</ListItemButton>
									</ListItem>
								);
							},
						)}
					</List>
				</>
			)}
		</>
	);
}
