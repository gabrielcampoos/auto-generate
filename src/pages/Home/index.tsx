import {
	Box,
	Button,
	Container,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { FirstLine } from './components/FirstLine';
import { SecondLine } from './components/SecondLine';
import { FourthLine } from './components/FourthLine';
import { FifthLine } from './components/FifthLine';
import { SixthLine } from './components/SixthLine';
import generatePDF, { Margin, Options } from 'react-to-pdf';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import ListClients from './components/ListClients';
import { useNavigate } from 'react-router-dom';
import {
	clientCreate,
	clientGet,
} from '../../store/modules/Client/clientSlice';
import { companyGet } from '../../store/modules/Company/companySlice';
import { infoGet } from '../../store/modules/Info/infoSlice';
import { paymentGet } from '../../store/modules/Payment/paymentSlice';
import { totalValueGet } from '../../store/modules/TotalValue/totalValueSlice';
import { nfeCreate, nfeGet } from '../../store/modules/Nfe/nfeSlice';
import {
	nfeDelete,
	nfeList,
	nfeListAll,
	refresh,
} from '../../store/modules/Nfe/nfeAdapter';

export const AutoGenerateNfe = () => {
	const [checked, setChecked] = useState('');

	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const selectNfe = useAppSelector(nfeListAll);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleClickGenerate = (id: string) => {
		const nfe = selectNfe.find((nfe) => nfe.id === id);
		localStorage.setItem('nfe', JSON.stringify(nfe));
	};

	const handleClickStop = (id: string) => {
		const nfe = selectNfe.find((nfe) => nfe.id === id);

		dispatch(nfeDelete({ id: nfe!.id }));
		dispatch(refresh());
		window.location.reload();
	};

	useEffect(() => {
		dispatch(nfeList());
	}, [dispatch]);

	return (
		<>
			{(smDown && (
				<>
					<Box
						sx={{
							width: '100%',
							height: '100vh',
						}}
					>
						<Grid
							spacing={{ xs: 2, sm: 2, md: 2 }}
							columns={{ xs: 12, sm: 12 }}
							container
							sx={{
								width: '100%',
								pt: 5,
								pb: 5,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								background: '#2d3091',
							}}
						>
							<Grid item xs={12} sm={12}>
								<Typography
									sx={{
										color: '#fff',
										fontSize: '1rem',
										letterSpacing: '.1rem',
										fontWeight: 700,
										textAlign: 'center',
									}}
								>
									Clientes Mensais
								</Typography>
							</Grid>
							<Grid item xs={12} sm={12}>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-around',
										alignItems: 'center',
									}}
								>
									<Button
										variant="contained"
										size="small"
										onClick={() => {
											navigate('/nfe');
										}}
									>
										Criar cliente
									</Button>

									<Button
										variant="contained"
										size="small"
										color="success"
										onClick={() => {
											handleClickGenerate(checked);
											navigate('/nfe');
										}}
									>
										Gerar
									</Button>

									<Button
										variant="contained"
										color="error"
										size="small"
										onClick={() => handleClickStop(checked)}
									>
										Parar
									</Button>
								</Box>
							</Grid>
						</Grid>
						<ListClients
							checked={checked}
							setChecked={setChecked}
						/>
					</Box>
				</>
			)) || (
				<>
					<Box
						sx={{
							width: '100%',
							height: '100vh',
						}}
					>
						<Box
							sx={{
								width: '100%',
								pt: 5,
								pb: 5,
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								background: '#2d3091',
							}}
						>
							<Typography
								sx={{
									color: '#fff',
									fontSize: '2rem',
									letterSpacing: '.2rem',
									fontWeight: 700,
									flexGrow: 0.2,
									textAlign: 'center',
								}}
							>
								Clientes Mensais
							</Typography>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-around',
									alignItems: 'center',
									flexGrow: 0.2,
								}}
							>
								<Button
									variant="contained"
									onClick={() => {
										navigate('/nfe');
									}}
								>
									Criar cliente
								</Button>

								<Button
									variant="contained"
									color="success"
									onClick={() => {
										handleClickGenerate(checked);
										navigate('/nfe');
									}}
								>
									Gerar
								</Button>

								<Button
									variant="contained"
									color="error"
									onClick={() => handleClickStop(checked)}
								>
									Parar
								</Button>
							</Box>
						</Box>
						<ListClients
							checked={checked}
							setChecked={setChecked}
						/>
					</Box>
				</>
			)}
		</>
	);
};
