const Trayectory = () => {
    const handleInfoTrayectory = (index) => {
        const info = document.querySelectorAll(".info-trayectory")
        info[index].classList.toggle('show')
    }
    return (
        <section className="trayectory" id="trayectory">
            <div className="container">
                <h2>Trajectory</h2>

                <div className="contain">
                    <div className="education">
                        <h3><i className="fa-solid fa-graduation-cap"></i>Education</h3>
                        <ul>
                            <li>
                                <div className="circle" />
                                <span><i className="fa-regular fa-calendar-days"></i> <b>2012-2018</b></span>
                                <h4>Bachiller Ciencias Sociales</h4>
                                <p>Escuela Edgar Romero Maciel</p>
                            </li>
                            <li>
                                <div className="circle" onClick={()=>handleInfoTrayectory(0)}/>
                                <div className="info-trayectory">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam porro dolores et in itaque, nostrum quas, quibusdam animi sint, veritatis ducimus fugit harum nobis facere quia architecto culpa atque!</p>

                                </div>
                                <span><i className="fa-regular fa-calendar-days"></i> <b>2012-2018</b></span>
                                <h4>academy</h4>
                                <p>cultural inglesa</p>
                                <button className="btn-small" onClick={()=>handleInfoTrayectory(0)}>more info<i class="fa-solid fa-plus"></i></button>
                            </li>
                            <li>
                                <div className="circle" onClick={()=>handleInfoTrayectory(1)}/>
                                <div className="info-trayectory">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam porro dolores et in itaque, nostrum quas, quibusdam animi sint, veritatis ducimus fugit harum nobis facere quia architecto culpa atque!</p>

                                </div>
                                <span><i className="fa-regular fa-calendar-days"></i> <b>2022 - incompleto</b></span>
                                <h4>Developer Full Stack</h4>
                                <p>Argentina Programa 1° & 2°</p>
                                <button className="btn-small" onClick={()=>handleInfoTrayectory(1)}>more info<i class="fa-solid fa-plus"></i></button>
                            </li>
                            <li>
                                <div className="circle" onClick={()=>handleInfoTrayectory(2)}/>
                                <div className="info-trayectory">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam porro dolores et in itaque, nostrum quas, quibusdam animi sint, veritatis ducimus fugit harum nobis facere quia architecto culpa atque!</p>

                                </div>
                                <span><i className="fa-regular fa-calendar-days"></i> <b>2022-2023</b></span>
                                <h4>pasantia</h4>
                                <p>Emser</p>
                                <button className="btn-small" onClick={()=>handleInfoTrayectory(2)}>more info<i class="fa-solid fa-plus"></i></button>
                            </li>
                        </ul>
                    </div>

                    <div className="experience">
                        <h3><i className="fa-solid fa-briefcase"></i>Work Experience</h3>
                        <ul>
                            <li>
                                <div className="circle" onClick={()=>handleInfoTrayectory(3)}/>
                                <div className="info-trayectory">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam porro dolores et in itaque, nostrum quas, quibusdam animi sint, veritatis ducimus fugit harum nobis facere quia architecto culpa atque!</p>
                                </div>
                                <span><i className="fa-regular fa-calendar-days"></i> <b>2022</b></span>
                                <h4>Web Developer</h4>
                                <p>SaludLab</p>
                                <button className="btn-small" onClick={()=>handleInfoTrayectory(3)}>more info<i class="fa-solid fa-plus"></i></button>
                            </li>
                            <li>
                                <div className="circle" onClick={()=>handleInfoTrayectory(4)}/>
                                <div className="info-trayectory">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam porro dolores et in itaque, nostrum quas, quibusdam animi sint, veritatis ducimus fugit harum nobis facere quia architecto culpa atque!</p>

                                </div>
                                <span><i className="fa-regular fa-calendar-days"></i> <b>2023</b></span>
                                <h4>Front End Developer</h4>
                                <p>De tu Casa a Las Naciones</p>
                                <button className="btn-small" onClick={()=>handleInfoTrayectory(4)}>more info<i class="fa-solid fa-plus"></i></button>
                            </li>
                            <li>
                                <div className="circle" onClick={()=>handleInfoTrayectory(5)}/>
                                <div className="info-trayectory">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam porro dolores et in itaque, nostrum quas, quibusdam animi sint, veritatis ducimus fugit harum nobis facere quia architecto culpa atque!</p>

                                </div>
                                <span><i className="fa-regular fa-calendar-days"></i> <b>2023-currently</b></span>
                                <h4>Web Developer</h4>
                                <p>Offensive Security</p>
                                <button className="btn-small" onClick={()=>handleInfoTrayectory(5)}>more info<i class="fa-solid fa-plus"></i></button>
                            </li>
                            <li>
                                <div className="circle" onClick={()=>handleInfoTrayectory(6)}/>
                                <div className="info-trayectory">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam porro dolores et in itaque, nostrum quas, quibusdam animi sint, veritatis ducimus fugit harum nobis facere quia architecto culpa atque!</p>

                                </div>
                                <span><i className="fa-regular fa-calendar-days"></i> <b>2023- currently</b></span>
                                <h4>Web Designer & Front End</h4>
                                <p>Codefend</p>
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