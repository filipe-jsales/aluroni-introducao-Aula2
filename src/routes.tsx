import Footer from 'components/Footer';
import Header from 'components/Header';
import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import Sobre from 'pages/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Menu />
                <Routes>
                    <Route path='/' element={<Header />}>
                        <Route index element={<Inicio />}></Route>
                        <Route path='cardapio' element={<Cardapio />}></Route>
                        <Route path='sobre' element={<Sobre />}></Route>
                    </Route>
                    <Route path='prato/:id' element={<Prato />}></Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
                <Footer />
            </Router>
        </main>

    );
}