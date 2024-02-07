import Header from "../../components/header"
import Trayectory from "./trayectory"
import Hero from "./hero"
import About from "./about"
import Proyects from "./proyects"
import Skills from "./skills"
import Footer from "../../components/footer"
const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Trayectory />
            <Proyects />
            <About />
            <Skills />
            <Footer />
        </>
    )
}

export default Home