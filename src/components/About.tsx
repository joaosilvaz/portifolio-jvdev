'use client';
import Image from "next/image";
import { motion } from 'framer-motion'; // Importando motion
import { li } from "framer-motion/client";

export default function About() {
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
                                Meu nome é João Vitor, tenho 18 anos. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na FIAP, e atuo há cerca de 11 meses como Desenvolvedor de Software na MRM McCann Worldgroup, uma agência global focada em soluções digitais e inovação.

                                <br /><br />
                                Tenho nível avançado de inglês, certificado pela Wizard by Pearson, o que amplia minhas habilidades de comunicação e me permite colaborar com projetos de escopo internacional com fluência e segurança.
                            </p>
                            <p>
                                No frontend, possuo expertise em HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS e SCSS, o que me permite criar interfaces modernas, responsivas e com ótima usabilidade. <br /> No backend, trabalho com Node.js, Java, Python e SQL, desenvolvendo APIs robustas e escaláveis.
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
                                        <img
                                            className="w-14 h-14 object-contain"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDRMun7l-k_b6II0SivAMoIkQnX50MXfk-ug&s"
                                            alt="MRM Logo"
                                        />
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
