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
                            &lt;/&gt; João Vitor
                        </span>
                    </Link>
                    <ul className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
                        <li><Link href="#home" className="hover:text-blue-300 transition-all">Home</Link></li>
                        <li><Link href="#about" className="hover:text-blue-300 transition-all">Sobre mim</Link></li>
                        <li><Link href="#projetos" className="hover:text-blue-300 transition-all">Projetos</Link></li>
                        <li><Link href="#home" className="hover:text-blue-300 transition-all">Tecnologias</Link></li>
                        <li><Link href="#contato" className="hover:text-blue-300 transition-all">Contato</Link></li>
                    </ul>
                </div>

                <hr className="w-full border-gray-800 mb-10" />

                <div className="flex items-center gap-2 mb-4">
                    <Link href="#" className="bg-slate-100 text-black p-2 rounded-full hover:bg-slate-300 transition-all">
                        <FaLinkedin size={20} />
                    </Link>
                    <Link href="#" className="bg-slate-100 text-black p-2 rounded-full hover:bg-slate-300 transition-all">
                        <FaGithub size={20} />
                    </Link>
                </div>

                <p className="text-sm text-slate-400">&copy; 2025 João Vitor da Silva Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
