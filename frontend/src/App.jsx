import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './components/Login';
import Registrar from './components/Registrar';
import RecuperarPassword from './components/RecuperarPassword';
import ConfirmarCuenta from './components/ConfirmarCuenta';

const App = () => {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route index element={<Login/>}/>
          <Route path="registrar" element={<Registrar/>}/>
          <Route path="recuperar-password" element={<RecuperarPassword/>}/>
          <Route path="confirmar/:id" element={<ConfirmarCuenta/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;