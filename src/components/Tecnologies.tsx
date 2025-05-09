import Image from 'next/image';  // Importe o componente Image do Next.js
import { motion } from 'framer-motion';
import TiltCard from '@/components/TiltCard';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Technologies() {
    const t = useTranslations('technologies');
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Inicializa e escuta mudanças no tamanho da tela
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const technologies = [
        {
            icon: <Image src="/typescript.svg" alt="Typescript icon" width={40} height={40} />,
            title: 'TypeScript',
            description: t('typescript'),
            link: 'https://www.typescriptlang.org',
        },
        {
            icon: <Image src="/javascript.svg" alt="Javascript icon" width={40} height={40} className="w-10 h-10 object-contain rounded-lg" />,
            title: 'JavaScript',
            description: t('javascript'),
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
            icon: <Image src="/react.svg" alt="React icon" width={40} height={40} />,
            title: 'React',
            description: t('react'),
            link: 'https://reactjs.org',
        },
        {
            icon: <Image src="/nextjs.svg" alt="Nextjs icon" width={40} height={40} />,
            title: 'Next',
            description: t('next'),
            link: 'https://nextjs.org',
        },
        {
            icon: <Image src="/tailwind.svg" alt="Tailwind CSS icon" width={40} height={40} />,
            title: 'Tailwind, Css & Scss',
            description: t('tailwind'),
            link: 'https://tailwindcss.com/',
        },
        {
            icon: <Image src="/nodejs.svg" alt="Nodejs icon" width={40} height={40} />,
            title: 'NodeJS',
            description: t('node'),
            link: 'https://nodejs.org/en',
        },
        {
            icon: <Image src="/java.svg" alt="Java icon" width={40} height={40} className="w-10 h-10 object-contain rounded-lg" />,
            title: 'Java',
            description: t('java'),
            link: 'https://www.oracle.com/java/',
        },
        {
            icon: <Image src="/python.svg" alt="Python icon" width={40} height={40} className="w-10 h-10 object-contain rounded-lg" />,
            title: 'Python',
            description: t('python'),
            link: 'https://www.python.org/doc/',
        },
        {
            icon: <Image src="/sql.svg" alt="SQL icon" width={40} height={40} />,
            title: 'SQL',
            description: t('sql'),
            link: 'https://learn.microsoft.com/pt-br/sql/?view=sql-server-ver16',
        },
        {
            icon: <Image src="/aws.svg" alt="AWS Cloud icon" width={40} height={40} />,
            title: 'AWS Cloud',
            description: t('aws'),
            link: 'https://aws.amazon.com',
        },
        {
            icon: <Image src="/azure.svg" alt="Azure Cloud icon" width={40} height={40} />,
            title: 'Azure Cloud',
            description: t('azure'),
            link: 'https://azure.microsoft.com/pt-br/',
        },
        {
            icon: <Image src="/strapi.svg" alt="Strapi icon" width={40} height={40} />,
            title: 'Strapi',
            description: t('strapi'),
            link: 'https://docs.strapi.io/',
        },
    ];

    const visibleTechnologies =
        isMobile && !showAll ? technologies.slice(0, 5) : technologies;

    return (
        <section id="tecnologias" className="bg-gradient-custom text-white pt-50 pb-20 px-0 max-w-7xl mx-auto">
            <div className="md:text-left text-center mb-12">
                <motion.h2
                    className="text-4xl font-bold"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    {t('title')}
                </motion.h2>
                <motion.div className="mt-4 text-gray-400 max-w-xl">
                    {t('description')}
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto"
            >
                {visibleTechnologies.map((tech, index) => (
                    <TiltCard
                        key={index}
                        className="relative rounded-xl p-6 bg-white/5 border border-gray-800 cursor-pointer transition shadow-lg"
                    >
                        <a href={tech.link} target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center gap-5 mb-4">
                                <div className="bg-gradient-custom rounded-lg w-10 h-10">{tech.icon}</div>
                                <h3 className="text-xl font-bold">{tech.title}</h3>
                            </div>
                            <p className="text-gray-400 text-sm">{tech.description}</p>
                        </a>
                    </TiltCard>
                ))}
            </motion.div>
            {isMobile && (
                <div className="mt-6 text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:opacity-90 text-white px-5 py-2 rounded-lg font-semibold transition duration-200 cursor-pointer"
                    >
                        {showAll ? (
                            <>
                                Ver menos <ChevronUp className="inline-block ml-2" size={16} />
                            </>
                        ) : (
                            <>
                                Ver mais <ChevronDown className="inline-block ml-2" size={16} />
                            </>
                        )}
                    </button>
                </div>
            )}
        </section>
    );
}