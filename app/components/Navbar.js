'use client'

import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi'
import { MdCancelPresentation } from "react-icons/md";
export default function Navbar() {
    const navigation = [
        { name: 'Home', to: '/' },
        { name: 'Buses', to: '/buses' },
        
        { name: 'About Us', to: '/about' },
        { name: 'Helpline', to: '/helpline' },
        { name: 'FAQ', to: "/faq" },
    ]
    const [active, setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }
    return (
        <div>
             <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between lg:p-6 pr-4 pl-2 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="/">
                        <p className="text-sm font-semibold leading-6 text-gray-900 mt-2">E-Ticket</p>
                        </Link>
                    
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={showMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                          
                            <FiMenu className="lg:hidden block h-10 w-10 cursor-pointer "

                            />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.to} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>

                    </div>
                </nav>
                <ul className={active ? 'flex-col flex fixed inset-0 left-1/4 lg:left-3/4 uppercase   gap-6  md: lg:block bg-black text-white text-center ml-24 ' : 'hidden'}>
                    <div className="grid grid-cols-2 md:gap-96">
                        <MdCancelPresentation className="text-5xl" onClick={showMenu}></MdCancelPresentation>
                        <p onClick={showMenu} className="mt-3 ">Cancel</p>
                    </div>
                    <li>
                        <Link href="/" className="text-white px-5 py-2  font-semibold block">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white px-5 py-2  font-semibold block ">About</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white px-5 py-2 font-semibold block">Contact Us</Link>
                    </li>
                    <li>
                        <Link href="/buses" className="text-white px-5 py-2  font-semibold block ">Buses</Link>
                    </li>


                </ul>
            </header> 
        </div>
    );
};

;