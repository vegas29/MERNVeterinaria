import {useState} from 'react';
import AdminNav from "./AdminNav";
import Alerta from "./Alerta";
import useAuth from '../hooks/useAuth';

const CambiarPassword = () => {

    const {guardarPassword} = useAuth();

    const [alerta, setAlerta] = useState({});
    const [password, setPassword] = useState({
        pwd_actual: '',
        pwd_nuevo: ''
    });

    const handleSubmit = async e =>{
        e.preventDefault();

        if(Object.values(password).some(campo=> campo === '')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })

            return;
        }

        if(password.pwd_nuevo.length < 6){
            setAlerta({
                msg: 'La contraseña debe tener minimo 6 caracteres',
                error: true
            })

            console.log(password.pwd_nuevo.length);

            return;
        }

        const respuesta = await guardarPassword(password);

        setAlerta(respuesta);
    }

    const {msg} = alerta;
    return (
        <>
            <AdminNav/>

            <h2 className="font-black text-3xl text-center mt-10">Cambiar contraseña</h2>
            <p className="text-xl mt-5 mb-10 text-center">Modifica tu {''} 
                <span className="text-indigo-600 font-bold">contraseña aquí</span>
            </p>

            <div className="flex justify-center">
                <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">

                    {msg && <Alerta alerta={alerta}/>}
                    <form 
                        onSubmit={handleSubmit}
                    >
                        <div className="my-3">
                            <label htmlFor="" className="uppercase font-bold text-gray-600">Contraseña actual</label> 
                            <input 
                                type="password"
                                className="border bg-gray-50 p-2 w-full mt-5 rounded-lg"
                                name="pwd_actual"
                                placeholder='Escribe tu contraseña actual'
                                onChange={e => setPassword({
                                    ...password,
                                    [e.target.name]: e.target.value
                                })}
                            />   
                        </div>

                        <div className="my-3">
                            <label htmlFor="" className="uppercase font-bold text-gray-600">Contraseña nueva</label> 
                            <input 
                                type="password"
                                className="border bg-gray-50 p-2 w-full mt-5 rounded-lg"
                                name="pwd_nuevo"
                                placeholder='Escribe tu contraseña nueva'
                                onChange={e => setPassword({
                                    ...password,
                                    [e.target.name]: e.target.value
                                })}
                            />   
                        </div>

                        <input 
                            type="submit"
                            value="Actualizar contraseña"
                            className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5 cursor-pointer hover:bg-indigo-800" 
                        />
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default CambiarPassword;