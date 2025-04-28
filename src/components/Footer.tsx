// components/Footer.tsx

import Link from 'next/link';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[linear-gradient(90deg,_rgb(3,7,18)_0%,_rgb(30,30,37)_35%,_rgb(6,5,5)_100%)] text-white transition-all py-[50px] overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                <div className="flex items-center gap-30 mb-12">
                    <Link href="/home">
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
                            &lt;/&gt; JV.dev
                        </span>
                    </Link>
                    <ul className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
                        <li><a href="#" className="hover:text-blue-300 transition-all">Home</a></li>
                        <li><a href="/sobre-mim" className="hover:text-blue-300 transition-all">Sobre mim</a></li>
                        <li><a href="#projetos" className="hover:text-blue-300 transition-all">Projetos</a></li>
                        <li><a href="#" className="hover:text-blue-300 transition-all">Tecnologias</a></li>
                        <li><a href="#contato" className="hover:text-blue-300 transition-all">Contato</a></li>
                    </ul>
                </div>

                <hr className="w-full border-gray-800 mb-10" />

                <div className="flex items-center gap-4 mb-4">
                    <a href="#" className="bg-slate-100 text-black p-2 rounded-full hover:bg-slate-300 transition-all">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="#" className="bg-slate-100 text-black p-2 rounded-full hover:bg-slate-300 transition-all">
                        <FaGithub size={20} />
                    </a>
                    <a href="#" className="bg-slate-100 text-black p-2 rounded-full hover:bg-slate-300 transition-all">
                        <FaInstagram size={20} />
                    </a>
                </div>

                <p className="text-sm text-slate-400">&copy; 2025 João Vitor da Silva Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
