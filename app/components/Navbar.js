'use client'

import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi'
import { MdCancelPresentation } from "react-icons/md";
export default function Navbar() {
    const navigation = [
        { name: 'Home', to: '/' },
        { name: 'About Us', to: '/about' },
        { name: 'Helpline', to: '/helpline' },
        // { name: 'FAQ', to: "/faq" },
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
                        <p className="text-sm font-semibold leading-6 text-violet-500 mt-2">E-Ticket</p>
                        </Link>
                    
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={showMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                          
                            <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer mt-2 text-gray-900 "

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
                <ul className={active ? 'flex-col flex fixed inset-0 left-1/4 lg:left-3/4  gap-6  md: lg:block bg-white text-gray-900 text-start ml-24 ' : 'hidden'}>
                    <div className="grid grid-cols-2 md:gap-96">
                        <MdCancelPresentation className="text-xl text-violet-500 mt-4 ml-5" onClick={showMenu}></MdCancelPresentation>
                        <p onClick={showMenu} className="mt-4 text-sm  ">Cancel</p>
                    </div>
                    <li>
                        <Link href="/" className="text-gray-900 px-5 py-1 text-sm  font-medium block" onClick={showMenu}>Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-900 px-5 py-1 text-sm font-medium block " onClick={showMenu}>About</Link>
                    </li>
                    <li>
                        <Link href="/helpline" className="text-gray-900 px-5 py-1 text-sm font-medium block" onClick={showMenu}>Contact Us</Link>
                    </li>
                    <li>
                        <Link href="/login" className="text-violet-500 px-5 py-1 text-sm font-medium block" onClick={showMenu}>Signin</Link>
                    </li>
                    


                </ul>
            </header> 
        </div>
    );
};

;