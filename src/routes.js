import Inicio from 'pages/Inicio';
import Cardapio from 'pages/cardapio';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/cardapio' element={<Cardapio/>}/>
      </Routes>
    </Router>
  );
}