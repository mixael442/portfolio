const Proyects = () => {
    return (
        <section className="proyects" id="proyects">
            <div className="container">
                <h2>Proyects</h2>
                <div className="contain">
                    <div className="proyect">
                        <img src="../assets/images/chatlatino.png" alt="img-proyect" />
                        <h3>ChatLatino</h3>
                        <p><span>aplicacion web PWA, red social para aprender español</span></p>
                        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, consequatur, exercitationem fugit doloremque tenetur aperiam magnam sunt eaque ut error nam quod, aspernatur cumque velit dolor amet! Fuga, veritatis perspiciatis?</p> */}
                        <a className="btn-small" href="https://dev.chatlatino.net/" target="_blank">view page</a>
                    </div>
                    <div className="proyect">
                        <img src="../assets/images/offensive.png" alt="img-proyect" />
                        <h3>Offensive Security</h3>
                        <p><span>Pagina web para la empresa Offensive Security</span></p>
                        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, consequatur, exercitationem fugit doloremque tenetur aperiam magnam sunt eaque ut error nam quod, aspernatur cumque velit dolor amet! Fuga, veritatis perspiciatis?</p> */}
                        <a className="btn-small" href="https://offensivesecurityservices.com/" target="_blank">view page</a>
                    </div>
                    <div className="proyect">
                        <img src="../assets/images/codefend.png" alt="img-proyect" />
                        <h3>Codefend</h3>
                        <p><span>Pagina Web para la empresa Codefend</span></p>
                        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, consequatur, exercitationem fugit doloremque tenetur aperiam magnam sunt eaque ut error nam quod, aspernatur cumque velit dolor amet! Fuga, veritatis perspiciatis?</p> */}
                        <a className="btn-small" href="https://website-stage.codefend.com/" target="_blank">view page</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyects