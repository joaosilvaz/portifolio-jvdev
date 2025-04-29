// 'use client';

// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import Image from "next/image";
// import { motion } from 'framer-motion'; // Importando motion

// export default function AboutMe() {
//     return (
//         <div className="min-h-screen flex flex-col bg-[linear-gradient(90deg,_rgb(3,7,18)_0%,_rgb(30,30,37)_35%,_rgb(6,5,5)_100%)] text-white">
//             <Header />
//             <main className="flex-grow px-6 py-12 md:px-20 md:pt-40 md:pb-20">
//                 <div className="max-w-6xl mx-auto">
//                     <motion.h2
//                         className="text-4xl font-bold mb-6"
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: false, amount: 0.2 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         Sobre mim
//                     </motion.h2>

//                     <motion.article
//                         className="flex flex-col md:flex-row items-center gap-10"
//                         initial={{ opacity: 0, x: -50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: false, amount: 0.2 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <div className="flex-shrink-0">
//                             <Image
//                                 src='/images/foto.jpeg'
//                                 alt="Foto de perfil"
//                                 width={300}
//                                 height={300}
//                                 className="rounded-full shadow-xl shadow-blue-500/50 border-4 border-transparent"
//                             />
//                         </div>
//                         <div className="text-gray-300 space-y-4 text-justify">
//                             <p>
//                                 Sou um jovem de 18 anos apaixonado por tecnologia e desenvolvimento de software. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na FIAP, uma das instituições mais respeitadas no setor de tecnologia, e atuo há cerca de 11 meses como Desenvolvedor de Software na MRM McCann Worldgroup, uma agência global focada em soluções digitais e inovação.
//                                 <br /><br />
//                                 Ao longo da minha trajetória, venho adquirindo experiência prática em desenvolvimento full-stack, participando de projetos que envolvem desde a criação de interfaces intuitivas até a implementação de lógicas de negócio no backend.
//                                 <br /><br />
//                                 Tenho também nível avançado de inglês, certificado pela Wizard by Pearson, o que amplia minhas habilidades de comunicação e me permite colaborar com projetos de escopo internacional com fluência e segurança.
//                             </p>
//                         </div>
//                     </motion.article>

//                     <motion.article
//                         className="gap-20 grid grid-cols-3"
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: false, amount: 0.2 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <div className="col-span-2 text-gray-300 space-y-4 text-justify pt-10 flex flex-col">
//                             <h2 className="font-bold text-2xl flex items-center gap-3">
//                                 <span className="block size-4 rounded-full bg-gradient-to-r from-[#945dd6] via-[#6978d1] to-[#13adc7] shadow-md shadow-blue-500/50"></span>
//                                 Skills:
//                             </h2>
//                             <p>
//                                 No frontend, possuo expertise em HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS e SCSS, o que me permite criar interfaces modernas, responsivas e com ótima usabilidade. <br /> No backend, trabalho com Node.js, Java, Python e SQL, desenvolvendo APIs robustas e escaláveis.
//                                 <br /><br />
//                                 Minha stack também inclui frameworks e bibliotecas como Vite, Next.js, .NET e Spring Boot, além de bancos de dados como PostgreSQL, Oracle Database e MySQL. Na área de Cloud & DevOps, utilizo Azure e AWS, contribuindo com práticas modernas de deploy e integração contínua.
//                             </p>
//                         </div>
//                         <div className="col-span-1 text-gray-300 space-y-4 text-justify pt-10 flex flex-col">
//                         </div>
//                     </motion.article>
//                 </div>
//             </main>
//             <Footer />
//         </div>
//     );
// }
