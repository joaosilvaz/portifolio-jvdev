import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function AboutMe() {
    return (
        <>
           <Header />
            <section className="bg-[#0c1022] text-white px-6 py-12 md:px-20 md:py-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">About me</h2>
                    <p className="text-lg text-gray-300 mb-12">
                        Crafting visually stunning and functional experiences – I'm a Frontend
                        Developer passionate about turning ideas into digital reality
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-10">

                        <div className="flex-shrink-0">
                            <Image
                                src='/images/foto.jpeg'
                                alt="Foto de perfil"
                                width={240}
                                height={240}
                                className="rounded-full shadow-lg border-4 border-transparent" />
                        </div>
                        <div className="text-gray-300 space-y-4 text-justify">
                            <p>
                                Hi there! I'm Fabio J. Raminhuk, a passionate frontend developer
                                with a strong background in technology. Let me introduce myself
                                and tell you more about my journey in the world of web
                                development.
                            </p>
                            <p>
                                I was born in Salete, a charming town located in the state of
                                Santa Catarina, Brazil, where I spent my childhood surrounded by
                                nature and a close-knit community. From an early age, I developed
                                a curiosity for technology and a desire to understand how things
                                work.
                            </p>
                            <p>
                                In addition to my love for coding, I have several hobbies that
                                keep me balanced and energized. On weekends, you’ll often find me
                                on the soccer field, where I enjoy playing with friends and
                                competing in local leagues. When I’m not on the pitch, I unwind by
                                immersing myself in the virtual worlds of video games, exploring
                                new challenges and stories. I also prioritize my health and
                                fitness by hitting the gym regularly, where I push myself to
                                achieve new personal bests and stay active.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};


