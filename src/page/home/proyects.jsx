


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
                                <p>el proyecto mas completo que colaboré como front-end siendo uno de los desarrolladores principales. <br />
                                   lanzado su primera versión donde mas adelante se integrará un sistema de chats, chat grupal, etc.
                                   Tecnologias que aprendi y use en este proyecto son:
                                </p>
                                <div className="images">
                                    <img src="../assets/images/languages/react.png" alt="logo-react" />
                                    <img src="../assets/images/languages/materialui.png" alt="logo-materialui" />
                                    <img src="../assets/images/languages/nodejs.png" alt="logo-nodejs" />
                                    <img src="../assets/images/languages/aws.png" alt="logo-aws" />
                                    <img src="../assets/images/languages/dynamodb.png" alt="logo-dynamodb" />
                                </div>
                            </div>
                            <img src="../assets/images/chatlatino.png" alt="img-proyect" />
                        </div>
                        <div className="subtitle">
                            <h3>ChatLatino </h3>
                            <img src="../assets/images/chatlatino.ico" alt="logo" />
                        </div>
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
                                <p>Sitio Web que aun sigue en desarrollo usando tecnologias como "i18n" para la traducción entre el ingles y español <br />
                                    tecnologias utilizadas:
                                </p>
                                <div className="images">
                                    <img src="../assets/images/languages/react.png" alt="logo-react" />
                                    <img src="../assets/images/languages/materialui.png" alt="logo-materialui" />
                                </div>
                            </div>
                            <img src="../assets/images/offensive.png" alt="img-proyect" />
                        </div>
                        <div className="subtitle">
                            <h3>Offensive Security</h3>
                            <img src="../assets/images/offensivelogo.png" alt="logo" />
                        </div>
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
                                <p>Sitio web donde estoy desarrollando a partir de un diseño ya proporcionado por la empresa a traves de archivos PSD y Figma pero tambien aportando a la mejora y adaptabilidad del diseño a la web. <br />

                                </p>
                                <div className="images">
                                    <img src="../assets/images/languages/react.png" alt="logo-react" />
                                    <img src="../assets/images/languages/sass.png" alt="logo-sass" />
                                </div>
                            </div>
                            <img src="../assets/images/codefend.png" alt="img-proyect" />
                        </div>
                        <div className="subtitle">
                            <h3>Codefend</h3>
                            <img src="../assets/images/codefendlogo.png" alt="logo" />
                        </div>
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