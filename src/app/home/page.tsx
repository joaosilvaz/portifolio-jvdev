import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactForm from "../../components/Contact";
import Home from "../../components/Home";
import Projetos from "@/components/Projects";
import About from "@/components/About";

export default function Main() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projetos />
      <ContactForm />
      <Footer />
    </>
  );
}