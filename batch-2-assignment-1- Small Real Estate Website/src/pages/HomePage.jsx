import About from "../components/About";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Properties from "../components/Properties";
import Teams from "../components/Teams";

export default function HomePage() {
    return <>
        <Header />
        <Hero />
        <Features />
        <Properties />
        <About />
        <CallToAction />
        <FAQ />
        <Teams />
        <Contact />
        <Footer />
    </>
}