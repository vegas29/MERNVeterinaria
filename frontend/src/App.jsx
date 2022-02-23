import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './components/Login';
import Registrar from './components/Registrar';
import RecuperarPassword from './components/RecuperarPassword';
import ConfirmarCuenta from './components/ConfirmarCuenta';
import NuevoPassword from './components/NuevoPassword';

import { AuthProvider } from './context/AuthProvider';

const App = () => {

  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout/>}>
            <Route index element={<Login/>}/>
            <Route path="registrar" element={<Registrar/>}/>
            <Route path="recuperar-password" element={<RecuperarPassword/>}/>
            <Route path="recuperar-password/:token" element={<NuevoPassword/>}/>
            <Route path="confirmar/:id" element={<ConfirmarCuenta/>}/>
          </Route>      
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
 
export default App;