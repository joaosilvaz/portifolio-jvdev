import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function AboutMe() {
    return (
        <div className="min-h-screen flex flex-col bg-[linear-gradient(90deg,_rgb(3,7,18)_0%,_rgb(30,30,37)_35%,_rgb(6,5,5)_100%)] text-white">
            <Header />
            <main className="flex-grow px-6 py-12 md:px-20 md:pt-40 md:pb-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6">Sobre mim</h2>

                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-shrink-0">
                            <Image
                                src='/images/foto.jpeg'
                                alt="Foto de perfil"
                                width={300}
                                height={300}
                                className="rounded-full shadow-lg border-4 border-transparent"
                            />
                        </div>
                        <div className="text-gray-300 space-y-4 text-justify">
                            <p>
                                Sou um jovem de 18 anos apaixonado por tecnologia e desenvolvimento de software. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na FIAP, uma das instituições mais respeitadas no setor de tecnologia, e atuo há cerca de 11 meses como Desenvolvedor de Software na MRM McCann Worldgroup, uma agência global focada em soluções digitais e inovação.
                                <br /><br />
                                Ao longo da minha trajetória, venho adquirindo experiência prática em desenvolvimento full-stack, participando de projetos que envolvem desde a criação de interfaces intuitivas até a implementação de lógicas de negócio no backend.
                                <br /><br />
                                Tenho também nível avançado de inglês, certificado pela Wizard by Pearson, o que amplia minhas habilidades de comunicação e me permite colaborar com projetos de escopo internacional com fluência e segurança.
                            </p>
                        </div>
                    </div>
                    <div className="text-gray-300 space-y-4 text-justify pt-10 flex flex-col">
                        <h2 className="font-bold text-2xl flex items-center gap-3">
                            <span className="block size-4 rounded-full bg-gradient-to-r from-[#945dd6] via-[#6978d1] to-[#13adc7] shadow-md shadow-blue-500/50"></span>Soft Skills:
                        </h2>
                        <p>
                            Comunicação eficaz;
                            <br />

                            Trabalho em equipe;
                            <br />

                            Proatividade;
                            <br />

                            Resiliência;
                            <br />

                            Organização;
                        </p>
                    </div>
                    <div className="text-gray-300 space-y-4 text-justify pt-6">
                        <p>
                            Busco constantemente aprender novas tecnologias e metodologias para evoluir como desenvolvedor e contribuir com soluções inovadoras que façam a diferença no mundo por meio da tecnologia.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
