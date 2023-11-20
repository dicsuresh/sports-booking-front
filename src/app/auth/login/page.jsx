import Image from "next/image"
import fondo from '../../../../public/fondo_login.jpg'
function loginPage() {
    return (

        <main className="z-auto relative w-screen h-screen justify-center items-center flex flex-col">
               <Image
                    src={fondo}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                />
            <div className="absolute max-w-screen-lg m-auto h-[60vh] w-[80vh] py-5 px-5 my-10 text-center text-2x1 rounded-2xl bg-white shadow-[0px_8px_48px_rgba(0,0,0,0.25)]">
                <div className='flex justify-center items-center '>
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
                        <label htmlFor='password' className='text-slate-500 mb-2 block text-sm'>
                            Contraseña:
                        </label>
                        <input type="password"
                            className='w-full p-3 rounded block mb-2 bg-slate-900 text-slate-300'
                            placeholder='*******'
                        />
                        <button className='w-full bg-blue-500 text-white p-3 rounded-lg'>
                            Iniciar Sesión
                        </button>
                    </form>
                </div>
            </div>
           
        </main>

    )
}

export default loginPage 