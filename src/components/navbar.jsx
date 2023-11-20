import Link from "next/link";
import Image from "next/image";
import logo from '../../public/logo.png'
function Navbar() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={logo} width={50} height={50} alt="bookingsports Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BookingSports</span>
                </a>
                <div className="hidden md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"> Home </Link>
                        </li>

                        <li>
                        <Link href="/about" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"> About </Link>
                        </li>

                        <li>
                        <Link href="/auth/login" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"> Sign In </Link>
                        </li>

                        <li>
                        <Link href="/auth/register" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"> Sign Up </Link>
                        </li>

                        <li>
                        <Link href="/contact" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"> Contacto </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        


    )



}

export default Navbar;