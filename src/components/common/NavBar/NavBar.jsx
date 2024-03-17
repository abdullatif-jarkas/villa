import { NavLink } from "react-router-dom"
import './NavBar.css'
import { FaCalendar } from "react-icons/fa";
import { useState } from "react";
import NavButton from "../../NavButton/NavButton";

const NavBar = () => {

  const links = [
    {
      to: '/',
      text: "Home",
    },
    {
      to: '/properties',
      text: "Properties",
    },
    {
      to: '/property-details',
      text: "Property Details",
    },
    {
      to: '/contact-us',
      text: "Contact Us",
    },
  ]

  const [open, setOpen] = useState("nav-trigger")
  const [linksOpen, setLinksOpen] = useState("nav-links");

  const handleClick = () => {
    open === "nav-trigger"? setOpen("nav-trigger active") && setLinksOpen("nav-links active"): setOpen("nav-trigger") && setLinksOpen("nav-links");
    open === "nav-trigger"? setLinksOpen("nav-links active"): setLinksOpen("nav-links");
  }

  return (
    <nav>
      <h1 className="logo">VILLA</h1>
      <div className="nav-main-content">
        <ul className={linksOpen}>
          {
            links.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      isActive ? "active" : ""
                    }
                  >
                    {link.text}
                  </NavLink>
                </li>
              )
            })
          }
          
        </ul>
        <NavButton />
      </div>
      <div className={open} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default NavBar