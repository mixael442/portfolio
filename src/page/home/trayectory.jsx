const Trayectory = () => {
    // const handleInfoTrayectory = (index) => {
    //     const info = document.querySelectorAll(".info-trayectory")
    //     info[index].classList.toggle('show')
    // }
    const handleInfoTrayectory = (index) => {
        const info = document.querySelectorAll(".info-trayectory");
        
        info.forEach((element, i) => {
          if (i === index) {
            if (element.classList.contains('fade-out')) {
              element.classList.replace('fade-out', 'fade-in');
            } else {
                element.classList.replace('fade-in', 'fade-out');
            }
          }
        });
      };
    return (
        <section className="trayectory" id="trayectory">
            <div className="container">
                <h2>Trajectory</h2>

                <div className="contain">
                    <div className="education">
                        <h3><i className="fa-solid fa-graduation-cap"></i>Education</h3>
                        <ul>
                            <li>
                                <div className="circle" onClick={()=>handleInfoTrayectory(0)}/>
                                <div className="info-trayectory fade-out">
                                <p>tecnologias aprendidas: tipescript, angular, nodeJS, Dart, Flutter. <br />
                                   duración: 6 meses.
                                     </p>

                                </div>
                                <span><i className="fa-regular fa-calendar-days"></i> <b>2022-2023</b></span>
                                <h4>Pasantia Full Stack</h4>
                                <p>Emser</p>
                                <button className="btn-small" onClick={()=>handleInfoTrayectory(0)}>more info<i class="fa-solid fa-plus"></i></button>
                            </li>
                            <li>
                                <div className="circle" onClick={()=>handleInfoTrayectory(1)}/>
                                <div className="info-trayectory fade-out">
                                <p>modulo 1°/3 meses: html, css, javascript. <br />
                                   modulo 2°/9 mes - incompleto : typescript, angular, nodeJs, express, mongoDB. 9 meses. 
                                </p>

                                </div>
                                <span><i className="fa-regular fa-calendar-days"></i> <b>2022 - incompleto</b></span>
                                <h4>Developer Full Stack</h4>
                                <p>Argentina Programa 1° & 2°</p>
                                <button className="btn-small" onClick={()=>handleInfoTrayectory(1)}>more info<i class="fa-solid fa-plus"></i></button>
                            </li>
                            <li>
                                <div className="circle" onClick={()=>handleInfoTrayectory(2)}/>
                                <div className="info-trayectory fade-out">
                                <p>graduado como upperintermidiate B2, <br />
                                   instagram: <a href="https://www.instagram.com/cultural.inglesa.corrientes/?hl=es">"https://www.instagram.com/cultural.inglesa.corrientes/?hl=es"</a><br />
                                   <img src="#" alt="certificate" />
                                </p>
                                </div>
                                <span><i className="fa-regular fa-calendar-days"></i> <b>2012-2018</b></span>
                                <h4>academy</h4>
                                <p>cultural inglesa</p>
                                <button className="btn-small" onClick={()=>handleInfoTrayectory(2)}>more info<i class="fa-solid fa-plus"></i></button>
                            </li>
                            <li>
                                <div className="circle" />
                                <span><i className="fa-regular fa-calendar-days"></i> <b>2012-2018</b></span>
                                <h4>Bachiller Ciencias Sociales</h4>
                                <p>Escuela Edgar Romero Maciel</p>
                            </li>
                           
                            
                            
                        </ul>
                    </div>

                    <div className="experience">
                        <h3><i className="fa-solid fa-briefcase"></i>Work Experience</h3>
                        <ul>
                            <li>
                                <div className="circle" onClick={()=>handleInfoTrayectory(3)}/>
                                <div className="info-trayectory fade-out">
                                    <p>Actualmente desarrollando la web oficial de la empresa Codefend y tambien desarrollando pequeñas cosas para la aplicacion web que ofrecen como servicio</p>
                                </div>
                                <span><i className="fa-regular fa-calendar-days"></i> <b>2023- currently</b></span>
                                <h4>Web Designer & Front End</h4>
                                <p>Codefend</p>
                                <button className="btn-small" onClick={()=>handleInfoTrayectory(3)}>more info<i class="fa-solid fa-plus"></i></button>
                            </li>
                            <li>
                                <div className="circle" onClick={()=>handleInfoTrayectory(4)}/>
                                <div className="info-trayectory fade-out">
                                    <p>Actualmente Desarrollando y Diseñando el sitio web de la empresa de ciberseguridad Offensive Security</p>
                                </div>
                                <span><i className="fa-regular fa-calendar-days"></i> <b>2023-currently</b></span>
                                <h4>Web Developer</h4>
                                <p>Offensive Security</p>
                                <button className="btn-small" onClick={()=>handleInfoTrayectory(4)}>more info<i class="fa-solid fa-plus"></i></button>
                            </li>
                            <li>
                                <div className="circle" onClick={()=>handleInfoTrayectory(5)}/>
                                <div className="info-trayectory fade-out">
                                    <p>Desarrollé junto con un equipo la aplicacion Web ChatLatino para la fundacion/ONG "De tu Casa Hacia las Naciones" <br />
                                    pagina oficial: <a href="https://detucasaalasnaciones.com/">https://detucasaalasnaciones.com/</a>
                                    </p>
                                </div>
                                <span><i className="fa-regular fa-calendar-days"></i> <b>2023</b></span>
                                <h4>Front End Developer</h4>
                                <p>De tu Casa a Las Naciones</p>
                                <button className="btn-small" onClick={()=>handleInfoTrayectory(5)}>more info<i class="fa-solid fa-plus"></i></button>
                            </li>
                            <li>
                                <div className="circle" onClick={()=>handleInfoTrayectory(6)}/>
                                <div className="info-trayectory fade-out">
                                    <p>Desarrollé como trainee junto con un equipo la pagina oficial de SaludLab</p>
                                </div>
                                <span><i className="fa-regular fa-calendar-days"></i> <b>2022</b></span>
                                <h4>Web Developer</h4>
                                <p>SaludLab</p>
                                <button className="btn-small" onClick={()=>handleInfoTrayectory(6)}>more info<i class="fa-solid fa-plus"></i></button>
                            </li>


                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Trayectory