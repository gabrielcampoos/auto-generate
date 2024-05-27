import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AutoGenerateNfe } from '../../pages/Home';
import { Nfe } from '../../pages/Home/components/Nfe';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AutoGenerateNfe />} />
				<Route path="/nfe" element={<Nfe />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
