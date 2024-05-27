import { combineReducers } from '@reduxjs/toolkit';

import loadingSlice from './Loading/loadingSlice';
import notificationSlice from './Notification/notificationSlice';
import contextSliceSecondLine from './ContextModal/contextSlice';
import contextSliceFourthLine from './ContextModalFourthLine/contextSliceFourthLine';
import contextSliceFirstLine from './ContextModalFirstLine/contextSliceFirstLine';
import contextSliceFifthLine from './ContextModalFifthLine/contextSliceFifthLine';
import contextSliceSixthLine from './ContextModalSixthLine/contextSliceSixthLine';
import clientSlice from './Client/clientSlice';
import clientAdapter from './Client/clientAdapter';
import companySlice from './Company/companySlice';
import infoSlice from './Info/infoSlice';
import paymentSlice from './Payment/paymentSlice';
import totalValueSlice from './TotalValue/totalValueSlice';
import nfeSlice from './Nfe/nfeSlice';
import nfeAdapter from './Nfe/nfeAdapter';

const rootReducer = combineReducers({
	// a cada novo slice, adicionamos uma nova propriedade neste objeto
	// propriedade - nome na store
	// valor - reducer/manager deste estado global
	// modal: modalSlice,
	notification: notificationSlice,
	client: clientSlice,
	nfe: nfeSlice,
	nfes: nfeAdapter,
	company: companySlice,
	info: infoSlice,
	payment: paymentSlice,
	totalValue: totalValueSlice,
	clients: clientAdapter,
	loading: loadingSlice,
	contextSliceFirstLine: contextSliceFirstLine,
	contextSecondLine: contextSliceSecondLine,
	contextFourthLine: contextSliceFourthLine,
	contextFifthLine: contextSliceFifthLine,
	contextSixthLine: contextSliceSixthLine,

	// modal: modalTarefasSlice,
});

export default rootReducer;
