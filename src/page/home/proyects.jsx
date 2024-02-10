


const Proyects = () => {

    const handleInfo = (index) => {
        const info = document.querySelectorAll(".info")
        info[index].classList.toggle('active')
    }

    return (
        <section className="proyects" id="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="contain">
                    <div className="proyect">
                        <div className="img-contain">
                            <div className="info">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quod harum alias nostrum accusantium quaerat officiis repellat esse sunt. Ratione iste repellendus officia ipsam voluptatem optio sit! Deserunt, optio officiis.</p>
                            </div>
                            <img src="../assets/images/chatlatino.png" alt="img-proyect" />
                        </div>
                        <h3>ChatLatino</h3>
                        <p><span>aplicacion web PWA, red social para aprender español</span></p>
                        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, consequatur, exercitationem fugit doloremque tenetur aperiam magnam sunt eaque ut error nam quod, aspernatur cumque velit dolor amet! Fuga, veritatis perspiciatis?</p> */}
                        <div className="buttons">
                            <a className="btn-small" href="https://dev.chatlatino.net/" target="_blank">view page<i className="fa-regular fa-eye"></i></a>
                            <button onClick={()=>handleInfo(0)} className="btn-small more">more info<i className="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                    <div className="proyect">
                        <div className="img-contain">               
                            <div className="info">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quod harum alias nostrum accusantium quaerat officiis repellat esse sunt. Ratione iste repellendus officia ipsam voluptatem optio sit! Deserunt, optio officiis.</p>
                            </div>
                            <img src="../assets/images/offensive.png" alt="img-proyect" />
                        </div>
                        <h3>Offensive Security</h3>
                        <p><span>Pagina web para la empresa Offensive Security</span></p>
                        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, consequatur, exercitationem fugit doloremque tenetur aperiam magnam sunt eaque ut error nam quod, aspernatur cumque velit dolor amet! Fuga, veritatis perspiciatis?</p> */}
                        <div className="buttons">
                            <a className="btn-small" href="https://offensivesecurityservices.com/" target="_blank">view page<i className="fa-regular fa-eye"></i></a>
                            <button onClick={()=>handleInfo(1)} className="btn-small more">more info<i className="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                    <div className="proyect">
                        <div className="img-contain">               
                            <div className="info">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quod harum alias nostrum accusantium quaerat officiis repellat esse sunt. Ratione iste repellendus officia ipsam voluptatem optio sit! Deserunt, optio officiis.</p>
                            </div>
                            <img src="../assets/images/codefend.png" alt="img-proyect" />
                        </div>
                        <h3>Codefend</h3>
                        <p><span>Pagina Web para la empresa Codefend</span></p>
                        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, consequatur, exercitationem fugit doloremque tenetur aperiam magnam sunt eaque ut error nam quod, aspernatur cumque velit dolor amet! Fuga, veritatis perspiciatis?</p> */}
                        <div className="buttons">                          
                            <a className="btn-small" href="https://website-stage.codefend.com/" target="_blank">view page<i className="fa-regular fa-eye"></i></a>
                            <button onClick={()=>handleInfo(2)} className="btn-small more">more info<i className="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyects