import Inicio from 'pages/Inicio';
import Cardapio from 'pages/cardapio';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/Menu/PaginaPadrao';
import Sobre from 'pages/Sobre';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound/Index';
import Prato from 'pages/Prato';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu/>
        <Routes>
          <Route path='/' element={<PaginaPadrao/>}>
            <Route index element={<Inicio/>}></Route>
            <Route path='cardapio' element={<Cardapio/>}/>
            <Route path='sobre' element={<Sobre/>}/>
          </Route>
          <Route path='prato/:id' element={<Prato/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}