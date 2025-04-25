import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Projetos from "@/components/Projects";

export default function Main() {
  return (
    <>
      <Header />
      <Home />
      <Projetos />
      <ContactForm />
      <Footer />
    </>
  );
}