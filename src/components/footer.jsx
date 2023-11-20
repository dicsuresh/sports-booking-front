import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/logo.png'
function Footer() {
    return (
        <footer className="bg-blue-400 ">
            <div className="container mx-auto w-full h-full">
                <div className="items-center gap-y-5 py16">
                    <div className="flex gap-1 items-center text-xl md:text-2xl font-bold">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src={logo} width={50} height={50} alt="bookingsports Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BookingSports</span>
                    </a>
                    </div>
                    
                </div>

            </div>

        </footer>

    )

}

export default Footer;