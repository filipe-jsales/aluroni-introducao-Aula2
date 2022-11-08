import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import Router from './routes'; 

// const componenteAtual = window.location.pathname === '/' ? <Inicio/> : <Cardapio/>;

ReactDOM.render(
	<React.StrictMode>
		<Router/>

	</React.StrictMode>,
	document.getElementById('root')
);
