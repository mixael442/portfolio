
const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <h2>About me</h2>
                <div className="contain">
                    <img src="../assets/images/notebook.jpg" alt="img" />
                    <div className="text">
                        <h3>I'M Misael Los santos </h3>
                        <p>A passionate about software development known among my friends as Mixa. I consider programming as an art and I find my greatest fascination in it. <br /> <br />
                            Before immersing myself in the world of development, I stood out as a hyperrealism artist, a background that has given me a detailed and creative perspective.</p>
                        <div className="links">
                            {/* <a href="https://github.com/mixael442" target="_blank">
                                    <i className="fa-brands fa-github"></i>
                                    <p>github</p>
                                
                            </a> */}
                            <a href="https://www.linkedin.com/in/misael-los-santos-011b00220/" target="_blank">                    
                                    <i className="fa-brands fa-linkedin"></i>
                                    <p>linkedin</p>
                                
                            </a>
                            <a href="https://www.instagram.com/mix_art21/" target="_blank">
                                    <i className="fa-brands fa-instagram"></i>
                                    <p>instagram</p>
                                
                            </a>
                            <a href="mailto:misaelossantos7@gmail.com" target="_blank">
                                    <i className="fa-solid fa-envelope"></i>
                                    <p>email</p>
                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About