import {useState} from 'react';
import { Link } from "react-router-dom";
import Alerta from './Alerta';
import clienteAxios from '../config/axios';

const RecuperarPassword = () => {

    const [email, setEmail] = useState('');
    const [alerta, setAlerta] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();

        if(email === '' || email.length < 6){
            setAlerta({msg: 'El correo es obligatorio', error:true});
            return;
        }
        
        try {
            const {data} = await clienteAxios.post('/veterinarios/recuperar-contra', {email})
            console.log(data);
            setAlerta({msg:data.msg});

            setEmail('');
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error:true
            })
        }
    }

    const {msg} = alerta;
    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">Recupera el acceso a tu cuenta y no pierdas tus {""}<span className="text-black">pacientes</span></h1>
            </div>

            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
                {msg && <Alerta
                    alerta={alerta}
                />}
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Correo
                        </label>
                        <input
                            type="text"
                            placeholder="Correo de registro"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Enviar instrucciones"
                        className="bg-indigo-700 w-full py-3 px-3 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                    />

                </form>

                <nav className='mt-10 lg:flex lg:justify-between'>
                    <Link to="/"
                        className='block text-center my-5 text-gray-500'
                    >¿Tienes una cuenta? Inicia sesion</Link>
                    <Link to="/registrar"
                        className='block text-center my-5 text-gray-500'
                    >¿No tienes una cuenta? Registrate</Link>
                </nav>

            </div>        
        </>
    );
}
 
export default RecuperarPassword;