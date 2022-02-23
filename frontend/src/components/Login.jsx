import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">Inicia sesion y administra tus {""}<span className="text-black">pacientes</span></h1>
            </div>
            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
                <form>
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
                        />
                    </div>

                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Contraseña
                        </label>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>

                    <input
                        type="submit"
                        value="Iniciar Sesion"
                        className="bg-indigo-700 w-full py-3 px-3 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                    />
                </form>

                <nav className='mt-10 lg:flex lg:justify-between'>
                    <Link to="/registrar"
                        className='block text-center my-5 text-gray-500'
                    >¿No tienes una cuenta? Registrate</Link>
                    <Link to="/recuperar-password"
                        className='block text-center my-5 text-gray-500'
                    >Olvide mi contraseña</Link>
                </nav>
            </div>    
        </>
    );
}
 
export default Login;