'use client';
import Image from "next/image";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";

export default function About() {
    const [showTechs, setShowTechs] = useState(false);

    return (
        <div id="about" className="flex flex-col bg-gradient-custom text-white">
            <main className="flex-grow px-6 pt-30 pb-12 md:px-16 md:pt-40 md:pb-4">
                <div className="max-w-7xl mx-auto md:text-left text-center">
                    <motion.h2
                        className="text-4xl font-bold mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        Sobre mim
                    </motion.h2>

                    <motion.article
                        className="flex flex-col md:flex-row items-center gap-10"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex-shrink-0">
                            <Image
                                src='/images/profile.png'
                                alt="Foto de perfil"
                                width={300}
                                height={300}
                                className="rounded-full shadow-xl shadow-blue-500/50 border-4 border-transparent"
                            />
                        </div>
                        <div className="text-gray-300 space-y-4 text-justify text-lg">
                            <p>
                                Olá! Me chamo João Vitor, tenho 18 anos.
                                Atualmente curso Análise e Desenvolvimento de Sistemas na FIAP e atuo há quase 1 ano como Desenvolvedor de Software na MRM McCann Worldgroup, uma agência global especializada em inovação e soluções digitais.
                                <br /><br />
                                Tenho inglês avançado, certificado pela Wizard by Pearson, o que me permite colaborar com segurança em projetos internacionais.
                                <br /><br />
                                Minha experiência inclui o desenvolvimento full stack, onde contribuo ativamente em todas as etapas do projeto — desde a criação de interfaces intuitivas no front-end até a implementação da lógica de negócios no back-end. Estou sempre em busca de aprimorar minhas habilidades e me manter atualizado com as últimas tecnologias e práticas do mercado.<Link href="#tecnologias" className="text-[rgb(99,94,255)] hover:opacity-90 transition-all duration-200"> Veja minhas tecnologias.</Link>
                            </p>

                        </div>
                    </motion.article>

                    <motion.article
                        className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="col-span-1 md:col-span-2 lg:col-span-2 text-gray-300 space-y-4 text-justify pt-10 flex flex-col">
                            <h2 className="font-bold text-2xl flex items-center gap-3">
                                <span className="block size-4 rounded-full bg-gradient-to-r from-[#945dd6] via-[#6978d1] to-[#13adc7] shadow-md shadow-blue-500/50"></span>
                                Experiência:
                            </h2>
                            <ul>
                                <li className="flex border-b-2 border-b-gray-800 pt-3 pb-3 items-center gap-4">
                                    <div>
                                        <Link href="https://www.mrmbrasil.com.br/" target="blank">
                                            <img
                                                className="w-14 h-14 object-contain"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDRMun7l-k_b6II0SivAMoIkQnX50MXfk-ug&s"
                                                alt="MRM Logo"
                                            />
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="text-lg text-white">Full Stack Developer - MRM McCann WorldGroup</p>
                                        <p className="text-sm text-gray-400">Junho 2024 - Atual</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden lg:flex lg:col-span-1 text-gray-300 space-y-4 text-justify pt-10 flex-col">
                        </div>
                    </motion.article>
                </div>
            </main>
        </div>
    );
}
