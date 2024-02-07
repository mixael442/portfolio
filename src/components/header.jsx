import { useEffect } from "react"
import { useState } from "react"

const Header = () => {
    const [open, setOpen] = useState(true)

    const handleMenu = () => {
        const menu = document.querySelector(".menu");
        if(open){
            menu.style.right = '0%';
            setOpen(false)
        } else {
            menu.style.right = '-100%';
            setOpen(true)
        }
    }

    return (
        <header>
            <div className="container">
                <ul className="menu">
                    <li><a onClick={handleMenu} href="#trayectory">trayectory</a></li>
                    <li><a onClick={handleMenu} href="#proyects">proyects</a></li>
                    <li><a onClick={handleMenu} href="#about">about me</a></li>
                    <li><a onClick={handleMenu} href="#skills">skills</a></li>
                </ul>
                <span className="icon" onClick={handleMenu}><i className={open ? "fa-solid fa-bars" : "fa-solid fa-xmark"}></i></span>
            </div>
        </header>
    )
}

export default Header