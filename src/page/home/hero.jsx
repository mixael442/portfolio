

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="layer" />
            <video src="../../../assets/bkg-hero.mp4" muted autoPlay loop/>
            <div className="container">
                <div className="contain">
                    <div className="title">
                        <h1>Hey, I'm <span>M</span><span>I</span><span>X</span><span>A</span>
                        </h1>
                        <div className="stick">open to work</div>
                    </div>
                    <p>Mas de <b>1+ año</b> de experiencia como desarrollador web, desde <b>Argentina</b></p>
                    <h2>Front End Developer</h2>
                    <a className="btn" download href="../assets/others/misael-los-santos-1.pdf">Download CV</a>
                </div>
            </div>
        </section>
    )
}

export default Hero