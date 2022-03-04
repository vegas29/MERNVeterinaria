import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import RutaProtegida from './layout/RutaProtegida';

import Login from './components/Login';
import Registrar from './components/Registrar';
import RecuperarPassword from './components/RecuperarPassword';
import ConfirmarCuenta from './components/ConfirmarCuenta';
import NuevoPassword from './components/NuevoPassword';
import AdministrarPacientes from './components/AdministrarPacientes';
import CambiarPassword from './components/CambiarPassword';
import EditarPerfil from './components/EditarPerfil';

import { AuthProvider } from './context/AuthProvider';
import { PacientesProvider } from './context/PacientesProvider';

const App = () => {

  
  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
          <Routes>
            <Route path="/" element={<AuthLayout/>}>
              <Route index element={<Login/>}/>
              <Route path="registrar" element={<Registrar/>}/>
              <Route path="recuperar-password" element={<RecuperarPassword/>}/>
              <Route path="recuperar-password/:token" element={<NuevoPassword/>}/>
              <Route path="confirmar/:id" element={<ConfirmarCuenta/>}/>
            </Route>      

            <Route path="/admin" element={<RutaProtegida/>}>
              <Route index element={<AdministrarPacientes/>}/>
              <Route path='perfil' element={<EditarPerfil/>}/>
              <Route path='cambiar-password' element={<CambiarPassword/>}/>
            </Route>
          </Routes>  
        </PacientesProvider>  
      </AuthProvider>
    </BrowserRouter>
  );
}
 
export default App;