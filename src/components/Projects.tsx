'use client';

import { motion } from 'framer-motion';
import Link from "next/link";
import { useState } from 'react';

const projects = [
    {
        title: "Plataforma de Economia com Energias Renováveis",
        description:
            "A aplicação permite que usuários insiram seu consumo médio de energia elétrica e localização para receber uma estimativa personalizada de economia com energia solar.",
        image: "/images/ecosmart.png",
        techs: ["Next", "TypeScript", "Tailwind CSS", "React"],
        liveLink: "https://global-solution-s2.vercel.app/",
        githubLink: "https://github.com/joaosilvaz/Global-Solution-S2",
    },
    {
        title: "Desenvolvimento Landing Page - God of War Ragnarok",
        description:
            "Landing page temática inspirada no universo de God of War: Ragnarok, com foco em visual impactante e performance.",
        image: "/images/god-of-war.png",
        techs: ["Vite", "TypeScript", "Tailwind CSS", "React"],
        liveLink: "https://lp-check-point1.vercel.app/",
        githubLink: "https://github.com/joaosilvaz/LP-CheckPoint1",
    },
    {
        title: "Monitoramento Inteligente de Ambientes Aquáticos",
        description:
            "Nosso equipamento acompanha três parâmetros fundamentais: Temperatura; pH da água; Nível da água;",
        image: "/images/ocean-guard.png",
        techs: ["Next", "TypeScript", "Tailwind CSS", "React"],
        liveLink: "https://ocean-guard-flax.vercel.app/",
        githubLink: "https://github.com/joaosilvaz/OceanGuard",
    },
    {
        title: "E-commerce",
        description:
            "Simulador de e-commerce com layout responsivo, onde o usuário pode visualizar produtos, adicionar ao carrinho e simular uma compra. ",
        image: "/images/e-commerce.png",
        techs: ["HTML", "CSS", "Javascript"],
        liveLink: "https://e-commerce-two-puce.vercel.app/",
        githubLink: "https://github.com/joaosilvaz/e-commerce",
    },
    {
        title: "Sistema Bancário",
        description:
            "O sistema permite criar contas, consultar saldo, realizar depósitos, saques e transferências via PIX. Utilizei enums para tipos de conta (CORRENTE, POUPANÇA, SALÁRIO) e status da conta (ATIVA, INATIVA).",
        image: "/images/bank-project.jpg",
        techs: ["Java", "Spring Boot"],
        liveLink: "",
        githubLink: "https://github.com/joaosilvaz/bank-project",
    },
];

export default function Projetos() {
    const [showAll, setShowAll] = useState(false);

    const visibleProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section id="projetos" className="bg-gradient-custom text-white pt-50 pb-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto md:text-left text-center">
                <motion.h2
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    Projetos
                </motion.h2>
                <p className="text-gray-300 mb-12 max-w-xl">
                    Aqui você encontra alguns dos projetos mais relevantes que desenvolvi ao longo da minha jornada como desenvolvedor.
                </p>

                <div className="grid gap-10 grid-cols-1 min-[900px]:grid-cols-2 min-[1218px]:grid-cols-3">
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8 }}
                            className="h-auto border border-cyan-400 rounded-xl px-8 py-8 bg-gradient-custom shadow-md flex flex-col justify-between"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="md:text-2xl text-xl font-bold mb-4">{project.title}</h3>
                            <p className="text-[rgb(146,158,176)] mb-6 md:text-sm text-sm">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4 md:justify-start justify-center">
                                {project.techs.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-gray-800 text-sm px-3 py-1 rounded-full text-gray-100"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col min-[370px]:flex-row justify-between gap-3 mt-auto pt-3">
                                {project.liveLink && (
                                    <Link
                                        href={project.liveLink}
                                        target="_blank"
                                        className="bg-gradient-to-l from-purple-500 to-cyan-400 text-white px-3 py-3 md:px-3 rounded-full font-semibold text-sm transition-all ease-in duration-100 hover:shadow-[0px_4px_15px_rgba(255,255,255,0.4)] text-center w-full min-[370px]:w-auto"
                                    >
                                        Live preview
                                    </Link>
                                )}
                                <Link
                                    href={project.githubLink}
                                    target="_blank"
                                    className="border border-white text-white px-2 py-3 rounded-full font-semibold md:px-4 lg:px-2 text-sm hover:bg-white hover:text-black transition-all ease-in duration-200 text-center w-full min-[370px]:w-auto"
                                >
                                    Check on GitHub
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:opacity-90 text-white px-6 py-3 rounded-full font-semibold transition duration-200 cursor-pointer"
                    >
                        {showAll ? 'Ver menos' : 'Ver mais '}
                    </button>
                </div>
            </div>
        </section>
    );
}