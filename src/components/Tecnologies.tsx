"use client";
import { motion } from 'framer-motion';
import { FaReact, FaSass, FaHtml5, FaPhp, FaCss3Alt, FaFigma, FaJava } from 'react-icons/fa';
import { FaAmazon } from 'react-icons/fa6';
import { SiNextdotjs, SiStyledcomponents, SiTailwindcss, SiJavascript, SiTypescript, SiJquery } from 'react-icons/si';
import TiltCard from '@/components/TiltCard';

const technologies = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" aria-label="TypeScript" viewBox="0 0 512 512"><rect width="512" height="512" fill="#3178c6" rx="15%"></rect><path fill="#fff" d="M233 284h64v-41H118v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1 23-1.1 34-3.4 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9-5.2-2.6-9.7-5.2-13-7.8-3.7-2.7-6.5-5.5-8.5-8.4-2-3-3-6.3-3-10 0-3.4.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6 4.2 0 8.6.31 13 .94 4.6.63 9.3 1.6 14 2.9s9.3 2.9 14 4.9c4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1-23 1.3-34 3.8-20 6.5-28 12c-8.1 5.4-14 12-19 21-4.7 8.4-7 18-7 30 0 15 4.3 28 13 38 8.6 11 22 19 39 27 6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5 2.5 3.4 3.8 7.4 3.8 12 0 3.2-.78 6.2-2.3 9s-3.9 5.2-7.1 7.2-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7-11 0-22-1.9-32-5.7-11-3.8-21-9.5-28.1-15.44z"></path></svg>,
        title: 'TypeScript',
        description: 'Commonly employed across all of my projects, it provides optional static typing and modern features, enhancing robust development practices.',
        link: 'https://www.typescriptlang.org',
    },
    {
        icon: <img src="/images/javascript.gif" alt="Java icon" className="w-10 h-10 object-contain rounded-lg" />,
        title: 'JavaScript',
        description: 'JavaScript, celebrated for its optional static typing and contemporary features, stands as a cornerstone in virtually all of my projects, ensuring robust development practices and fostering innovation.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        icon: <FaReact className="text-3xl text-cyan-400" />,
        title: 'React',
        description: 'A cutting-edge JavaScript library for front-end development, offering a component-based approach for efficient rendering and dynamic user interfaces.',
        link: 'https://reactjs.org',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path d="M23.749 30.005c-.119.063-.109.083.005.025a.3.3 0 0 0 .095-.061c0-.021 0-.021-.1.036m.24-.13c-.057.047-.057.047.011.016a.3.3 0 0 0 .068-.047c0-.027-.016-.021-.079.031m.156-.094c-.057.047-.057.047.011.016a.3.3 0 0 0 .068-.048c0-.025-.016-.02-.079.032m.158-.093c-.057.047-.057.047.009.015.037-.02.068-.041.068-.047 0-.025-.016-.02-.077.032m.213-.141c-.109.073-.147.12-.047.068.067-.041.181-.131.161-.131-.043.016-.079.043-.115.063zM14.953.011c-.073.005-.292.025-.484.041-4.548.412-8.803 2.86-11.5 6.631a15.8 15.8 0 0 0-2.824 6.989c-.129.88-.145 1.14-.145 2.333 0 1.192.016 1.448.145 2.328.871 6.011 5.147 11.057 10.943 12.927 1.043.333 2.136.563 3.381.704.484.052 2.577.052 3.061 0 2.152-.24 3.969-.771 5.767-1.688.276-.14.328-.177.291-.208a341 341 0 0 1-2.609-3.495l-2.557-3.453-3.203-4.745a416 416 0 0 0-3.229-4.744c-.011 0-.025 2.109-.031 4.681-.011 4.505-.011 4.688-.068 4.792a.57.57 0 0 1-.276.287c-.099.047-.188.057-.661.057h-.541l-.141-.088a.6.6 0 0 1-.208-.229l-.068-.141.005-6.271.011-6.271.099-.125a.8.8 0 0 1 .229-.187c.131-.063.183-.073.724-.073.635 0 .74.025.907.208a603 603 0 0 1 3.859 5.812c2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839.125-.083a16.4 16.4 0 0 0 3.285-2.885 15.94 15.94 0 0 0 3.767-8.177c.129-.88.145-1.141.145-2.333s-.016-1.448-.145-2.328C30.985 7.668 26.709 2.622 20.913.751a17 17 0 0 0-3.328-.697c-.303-.031-2.371-.068-2.631-.041zM21.5 9.688a.62.62 0 0 1 .317.364c.027.084.032 1.823.027 5.74l-.011 5.624-.989-1.52-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204a.67.67 0 0 1 .313-.395c.124-.063.172-.068.667-.068.463 0 .541.005.645.063z"></path></svg>,
        title: 'Next',
        description: 'React simplifies front-end development with server-side rendering, automatic code splitting, and SEO-friendly features, empowering developers to create dynamic and responsive web applications with ease.',
        link: 'https://nextjs.org',
    },
    {
        icon: <img src="/images/java.gif" alt="Java icon" className="w-10 h-10 object-contain rounded-lg" />,
        title: 'Java',
        description: 'A versatile scripting language powering dynamic web development with its server-side capabilities, database integration, and extensive library support.',
        link: 'https://www.oracle.com/java/',
    },
    {
        icon: <FaHtml5 className="text-3xl text-orange-500" />,
        title: 'HTML',
        description: 'The cornerstone of modern web development, it furnishes the essential structure and semantics necessary for crafting interactive and accessible websites that cater to diverse user needs and preferences.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
        icon: <FaCss3Alt className="text-3xl text-blue-500" />,
        title: 'CSS, Sass, & Tailwind',
        description: 'The styling language that brings life to web pages, offering powerful design capabilities for responsive and visually engaging user interfaces.',
        link: 'https://www.w3.org/TR/CSS/',
    },
    {
        icon: <FaAmazon className="text-3xl" />,
        title: 'Styled Components',
        description: 'A CSS-in-JS library tailored for React, it empowers developers to effortlessly style components using JavaScript.',
        link: 'https://styled-components.com/',
    },
    {
        icon: <img src="/images/python.gif" alt="Python icon" className="w-10 h-10 object-contain rounded-lg" />,
        title: 'UI design in Figma',
        description: 'A collaborative design tool revolutionizing the way teams create, prototype, and collaborate on digital interfaces.',
        link: 'https://www.python.org/doc/',
    },
];

export default function Technologies() {
    return (
        <section className="bg-gradient-custom text-white pt-50 pb-20 px-6 max-w-7xl mx-auto">
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
                <p className="mt-4 text-gray-400 max-w-xl">
                    Discover my skills and experience in various technologies through my personal website, where I share insights and innovative solutions
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
                {technologies.map((tech, index) => (
                    <TiltCard
                        key={index}
                        className="relative rounded-xl p-6 bg-black/10 border border-gray-800 cursor-pointer transition shadow-lg"
                    >
                        <a href={tech.link} target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center gap-5 mb-4">
                                <div className="bg-[#334155] rounded-lg w-10 h-10">{tech.icon}</div>
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
