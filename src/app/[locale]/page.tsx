import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Projetos from "@/components/Projects";
import About from "@/components/About";
import Technologies from "@/components/Tecnologies";
import { getTranslations } from "next-intl/server";

export default async function Main({ params }: { params: { locale: string } }) {
  const t = await getTranslations("Home");

  return (
    <>
      <Header />
      <Home />
      <About />
      <Technologies />
      <Projetos />
      <ContactForm />
      <Footer />
    </>
  );
}
