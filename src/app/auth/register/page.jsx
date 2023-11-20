
function RegisterPage(){
    return (
        <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
            <form className="">
                <h1 className='text-slate-200 font-bold text-4xl mb-4'>
                    Registro
                </h1>
                <label htmlFor='username' className='text-slate-500 mb-2 block text-sm'> 
                    Usuario:
                </label>
                <input type="text"
                className='w-full p-3 rounded block mb-2 bg-slate-900 text-slate-300'
                placeholder='usuario123'
                />
                <label htmlFor='email' className='text-slate-500 mb-2 block text-sm'> 
                    Email:
                </label>
                <input type="email"
                className='w-full p-3 rounded block mb-2 bg-slate-900 text-slate-300'
                placeholder='usuario@email.com'
                />
                <label htmlFor='password' className='text-slate-500 mb-2 block text-sm'> 
                    Contraseña:
                </label>
                <input type="password"
                className='w-full p-3 rounded block mb-2 bg-slate-900 text-slate-300'
                placeholder='*******'
                />
                <label htmlFor='confirmPassword' className='text-slate-500 mb-2 block text-sm'> 
                    Confirmar contraseña:
                </label>
                <input 
                type="password"
                className='w-full p-3 rounded block mb-2 bg-slate-900 text-slate-300'
                placeholder='*******'
                />
                <button className='w-full bg-blue-500 text-white p-3 rounded-lg'>
                    Registrarme
                </button>
            </form>
        </div>
        )}
        
export default RegisterPage