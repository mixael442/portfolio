


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
                                <p>the most complete project that I collaborated on as a front-end, being one of the main developers. <br />
                                   launched its first version where a chat system, group chat, etc. will later be integrated.
                                   Technologies that I learned and used in this project are:
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
                        <p><span>PWA web application, social network to learn Spanish</span></p>
                        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, consequatur, exercitationem fugit doloremque tenetur aperiam magnam sunt eaque ut error nam quod, aspernatur cumque velit dolor amet! Fuga, veritatis perspiciatis?</p> */}
                        <div className="buttons">
                            <a className="btn-small" href="https://dev.chatlatino.net/" target="_blank">view page<i className="fa-regular fa-eye"></i></a>
                            <button onClick={()=>handleInfo(0)} className="btn-small more">more info<i className="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                    <div className="proyect">
                        <div className="img-contain">               
                            <div className="info">
                                <p>Website that is still in development using technologies such as "i18n" for translation between English and Spanish <br />
                                    Used technology:
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
                        <p><span>Website for the company Offensive Security</span></p>
                        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, consequatur, exercitationem fugit doloremque tenetur aperiam magnam sunt eaque ut error nam quod, aspernatur cumque velit dolor amet! Fuga, veritatis perspiciatis?</p> */}
                        <div className="buttons">
                            <a className="btn-small" href="http://theoffensivezone.com/" target="_blank">view page<i className="fa-regular fa-eye"></i></a>
                            <button onClick={()=>handleInfo(1)} className="btn-small more">more info<i className="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                    <div className="proyect">
                        <div className="img-contain">               
                            <div className="info">
                                <p>Website where I am developing from a design already provided by the company through PSD and Figma files but also contributing to the improvement and adaptability of the design to the web. <br />
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
                        <p><span>Website for the Codefend company</span></p>
                        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, consequatur, exercitationem fugit doloremque tenetur aperiam magnam sunt eaque ut error nam quod, aspernatur cumque velit dolor amet! Fuga, veritatis perspiciatis?</p> */}
                        <div className="buttons">                          
                            <a className="btn-small" href="https://www.codefend.com/" target="_blank">view page<i className="fa-regular fa-eye"></i></a>
                            <button onClick={()=>handleInfo(2)} className="btn-small more">more info<i className="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyects