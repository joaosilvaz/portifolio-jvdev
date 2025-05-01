"use client";
import { motion } from 'framer-motion';
import { FaReact, FaSass, FaHtml5, FaPhp, FaCss3Alt, FaFigma, FaJava } from 'react-icons/fa';
import { FaAmazon } from 'react-icons/fa6';
import { SiNextdotjs, SiStyledcomponents, SiTailwindcss, SiJavascript, SiTypescript, SiJquery } from 'react-icons/si';
import TiltCard from '@/components/TiltCard';
import { img } from 'framer-motion/client';

const technologies = [
    {
        icon: <img src="/typescript.svg" alt="" />,
        title: 'TypeScript',
        description: 'Superset do JavaScript que adiciona tipagem estática. Ideal para projetos grandes, onde segurança e clareza no código são fundamentais. Aumenta a produtividade e reduz bugs em aplicações React/Node.',
        link: 'https://www.typescriptlang.org',
    },
    {
        icon: <img src="/javascript.svg" alt="Java icon" className="w-10 h-10 object-contain rounded-lg" />,
        title: 'JavaScript',
        description: 'Linguagem essencial da web. Usada no front-end com frameworks como React, e também no back-end com Node.js. Flexível, assíncrona, e indispensável para aplicações interativas.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        icon: <img src="/react.svg" alt="" />,
        title: 'React',
        description: 'Biblioteca JavaScript para criar interfaces interativas. Trabalha com componentes reutilizáveis, hooks e estado. Muito popular no mercado por sua modularidade e performance.',
        link: 'https://reactjs.org',
    },
    {
        icon: <img src="/nextjs.svg" alt="" />,
        title: 'Next',
        description: 'Framework React que adiciona renderização do lado do servidor (SSR), geração estática (SSG), rotas automáticas e otimizações de performance. Muito usado para SEO e aplicações modernas.',
        link: 'https://nextjs.org',
    },
    {
        icon: <img src="/python.svg" alt="Python icon" className="w-10 h-10 object-contain rounded-lg" />,
        title: 'Python',
        description: 'Extremamente versátil. Usada em automações, back-end com frameworks como Django/Flask, e especialmente em ciência de dados, IA e scripts rápidos. Sintaxe simples e legível.',
        link: 'https://www.python.org/doc/',
    },
    {
        icon: <img src="/java.svg" alt="Java icon" className="w-10 h-10 object-contain rounded-lg" />,
        title: 'Java',
        description: 'Forte em programação orientada a objetos. Muito usada em sistemas corporativos, Android e back-end. Excelente para lidar com performance, segurança e estrutura de código.',
        link: 'https://www.oracle.com/java/',
    },
    {
        icon: <img src="/html.svg" alt="" />,
        title: 'HTML',
        description: 'Base de toda estrutura da web. Permite construir layouts semânticos, acessíveis e bem organizados. Trabalha em conjunto com CSS e JS para páginas responsivas e modernas.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
        icon: <img src="/tailwind.svg" alt="" />,
        title: 'Tailwind',
        description: 'Framework utilitário que permite estilizar HTML direto com classes. Super produtivo, com foco em responsividade, performance e personalização. Evita CSS desnecessário.',
        link: 'https://tailwindcss.com/',
    },
    {
        icon: <img src="/nodejs.svg" alt="" />,
        title: 'NodeJS',
        description: 'Permite rodar JavaScript no back-end. Usado para criar APIs, automações, servidores web e aplicações em tempo real com WebSockets. Tem um ecossistema gigantesco via NPM.',
        link: 'https://nodejs.org/en',
    },
    {
        icon: <img src="/aws.svg" alt="" />,
        title: 'AWS Cloud',
        description: 'Plataforma de cloud computing da Amazon. Usada para hospedar APIs, bancos, armazenar arquivos, escalar sistemas. Ferramentas como EC2, S3 e Lambda são comuns em projetos modernos.',
        link: 'https://aws.amazon.com',
     
    },
    {
        icon: <img src="/azure.svg" alt="" />,
        title: 'Azure Cloud',
        description: 'Plataforma cloud da Microsoft. Oferece soluções para web apps, bancos de dados, CI/CD e mais. Muito usada em ambientes corporativos e integra bem com o ecossistema Microsoft.',
        link: 'https://azure.microsoft.com/pt-br/',
    },
    {
        icon: <img src="/sql.svg" alt="" />,
        title: 'SQL',
        description: 'Linguagem de consulta para banco de dados relacionais como MySQL, PostgreSQL e SQL Server. Essencial para CRUDs, análise de dados, joins e modelagem de tabelas com eficiência.',
        link: 'https://learn.microsoft.com/pt-br/sql/?view=sql-server-ver16',
    },
];

export default function Technologies() {
    return (
        <section id='tecnologias' className="bg-gradient-custom text-white pt-50 pb-20 px-6 max-w-7xl mx-auto">
            <div className="md:text-left text-center mb-12">
                <motion.h2
                    className="text-4xl font-bold"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    Tecnologias
                </motion.h2>
                <motion.div className="mt-4 text-gray-400 max-w-xl">
                Conheça minhas habilidades e experiências em tecnologia, onde compartilho ideias e soluções.
                </motion.div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
                {technologies.map((tech, index) => (
                    <TiltCard
                        key={index}
                        className="relative rounded-xl p-6 bg-black/10 border border-gray-800 cursor-pointer transition shadow-lg"
                    >
                        <a href={tech.link} target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center gap-5 mb-4">
                                <div className="bg-[#ffffff] rounded-lg w-10 h-10">{tech.icon}</div>
                                <h3 className="text-xl font-bold">{tech.title}</h3>
                            </div>
                            <p className="text-gray-400 text-sm">{tech.description}</p>
                        </a>
                    </TiltCard>
                ))}
            </div>
        </section>
    );
}
