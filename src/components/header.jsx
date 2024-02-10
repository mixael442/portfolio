import { useEffect } from "react"
import { useState } from "react"

const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "Trayectory",
      hash: "#trayectory",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "About",
      hash: "#about",
    },  
    {
      name: "Skills",
      hash: "#skills",
    },
  ];

const Header = () => {
    const [open, setOpen] = useState(true)
    const [activeSection, setActiveSection] = useState("");

    const handleMenu = (e) => {
        const menu = document.querySelector(".menu");
        if(open){
            menu.style.right = '0%';
            setOpen(false)
        } else {
            menu.style.right = '-100%';
            setOpen(true)
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            for (const link of links) {
              const sectionElement = document.getElementById(link.hash.substring(1));
    
              if (sectionElement) {
                const sectionTop = sectionElement.offsetTop - 200;
                const sectionBottom = sectionTop + sectionElement.offsetHeight;
    
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                  setActiveSection(link.hash);
                  break;
                }
              }
            }
        };
        window.addEventListener("scroll", handleScroll);  
      }, []);



    return (
        <header>
            <div className="container">
                <ul className="menu">
                    {
                        links.map((link)=>{
                            return (
                                <li key={link.hash}>
                                    <a className={`linkm ${link.hash === activeSection ? 'active' : ""}`} id={link.name} onClick={handleMenu} href={link.hash}>{link.name}</a>
                                </li>
                            )
                        })
                    }
                    {/* <li><a className={`linkm ${activeSection}`} onClick={handleMenu} href="#proyects">proyects</a></li>
                    <li><a className={`linkm ${activeSection}`} onClick={handleMenu} href="#about">about me</a></li>
                    <li><a className={`linkm ${activeSection}`} onClick={handleMenu} href="#skills">skills</a></li> */}
                </ul>
                <span className="icon" onClick={handleMenu}><i className={open ? "fa-solid fa-bars" : "fa-solid fa-xmark"}></i></span>
            </div>
        </header>
    )
}

export default Header