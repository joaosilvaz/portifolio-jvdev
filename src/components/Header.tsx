'use client'

import { useState } from 'react'
import { FaLinkedinIn, FaGithub, FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { changeLanguage } from 'i18next'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header data-aos="zoom-out" className="fixed bg-back-dark !bg-opacity-80 backdrop-blur-sm transition max-lg:relative z-10 shadow-[0px_3px_15px_0px] shadow-[#151725] w-full md:px-28 px-4 py-10 flex items-center justify-between text-white">
            <div className="text-2xl font-bold flex items-center gap-2 z-20">
                <span className="text-purple-500">&lt;/&gt;</span>
                <Link href="#home">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">João Vitor</span>
                </Link>
            </div>

            <nav className="hidden md:flex gap-14 text-base font-medium">
                <Link href="#home" className="relative group">
                    <span>Home</span>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-600 group-hover:w-full"></span>
                </Link>
                <Link href="#about" className="relative group">
                    <span>Sobre mim</span>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-600 group-hover:w-full"></span>
                </Link>
                <Link href="#projetos" className="relative group">
                    <span>Projetos</span>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-600 group-hover:w-full"></span>
                </Link>
                <Link href="#tecnologias" className="relative group">
                    <span>Tecnologias</span>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-600 group-hover:w-full"></span>
                </Link>
                <Link href="#contato" className="relative group">
                    <span>Contato</span>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-600 group-hover:w-full"></span>
                </Link>
            </nav>

            <button className="md:hidden z-20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            <div
                className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 flex flex-col items-center justify-center gap-8 text-white text-xl z-10 transition-all duration-500 ease-in-out
        ${isMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
    `}
            >
                <Link href="#home" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link href="#about" onClick={() => setIsMenuOpen(false)}>Sobre mim</Link>
                <Link href="#projetos" onClick={() => setIsMenuOpen(false)}>Projetos</Link>
                <Link href="#tecnologias" onClick={() => setIsMenuOpen(false)}>Tecnologias</Link>
                <Link href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</Link>
            </div>

            <div className="hidden md:flex items-center gap-2 z-20">
                <div className="flex gap-2">
                    <img src="/images/bandeira-brasil.png" alt="PT" onClick={() => changeLanguage('pt')} className="cursor-pointer w-8 h-8" />
                    <img src="/images/bandeira-eua.png" alt="EN" onClick={() => changeLanguage('en')} className="cursor-pointer w-8 h-8" />
                </div>

                <div className="w-px h-6 bg-gray-400 mx-4" />

                <Link href="https://www.linkedin.com/in/jo%C3%A3o-vitor-da-silva-5677202b1/" target="_blank" className="p-2 rounded-full bg-gray-100 text-black hover:bg-slate-300 transition-all">
                    <FaLinkedinIn size={18} />
                </Link>
                <Link href="https://github.com/joaosilvaz" target="_blank" className="p-2 rounded-full bg-gray-100 text-black hover:bg-slate-300 transition-all">
                    <FaGithub size={18} />
                </Link>
            </div>
        </header>
    )
}
