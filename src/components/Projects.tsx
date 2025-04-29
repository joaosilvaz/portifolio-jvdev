'use client';

import { motion } from 'framer-motion';
import Link from "next/link";

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
            "A aplicação permite que usuários insiram seu consumo médio de energia elétrica e localização para receber uma estimativa personalizada de economia com energia solar.",
        image: "/images/god-of-war.png",
        techs: ["Vite", "TypeScript", "Tailwind CSS", "React"],
        liveLink: "https://lp-check-point1.vercel.app/",
        githubLink: "https://github.com/joaosilvaz/LP-CheckPoint1",
    },
    {
        title: "Monitoramento Inteligente de Ambientes Aquáticos",
        description:
            "Desenvolvi um dispositivo inovador para o monitoramento em tempo real da qualidade da água, oferecendo dados essenciais para a preservação da vida marinha.  Nosso equipamento acompanha três parâmetros fundamentais: Temperatura; pH da água; Nível da água;",
        image: "/images/ocean-guard.png",
        techs: ["Next", "TypeScript", "Tailwind CSS", "React"],
        liveLink: "https://ocean-guard-flax.vercel.app/",
        githubLink: "https://github.com/joaosilvaz/OceanGuard",
    },
];

export default function Projetos() {
    return (
        <section id="projetos" className="bg-[linear-gradient(90deg,_rgb(3,7,18)_0%,_rgb(30,30,37)_35%,_rgb(6,5,5)_100%)] text-white pt-50 pb-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
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
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
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
                            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                            <p className="text-[rgb(146,158,176)] mb-6 text-sm">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techs.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-gray-800 text-sm px-3 py-1 rounded-full text-gray-100"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between gap-2 mt-auto pt-3">
                                <Link
                                    href={project.liveLink}
                                    target="_blank"
                                    className="bg-gradient-to-l from-purple-500 to-cyan-400 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all ease-in duration-100 hover:shadow-[0px_4px_15px_rgba(255,255,255,0.4)]"
                                >
                                    Live preview
                                </Link>
                                <Link
                                    href={project.githubLink} target="blank"
                                    className="border border-white text-white px-4 py-3 rounded-full font-semibold text-sm hover:bg-white hover:text-black transition-all ease-in duration-200 text-center"
                                >
                                    Check on GitHub
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
