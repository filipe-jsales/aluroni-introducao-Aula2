import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import Cardapio from './pages/Cardapio';
import Inicio from './pages/Inicio';

ReactDOM.render(
	<React.StrictMode>
		<Cardapio />
		<Inicio/>

	</React.StrictMode>,
	document.getElementById('root')
);
