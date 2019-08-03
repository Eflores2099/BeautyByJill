import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"


const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className = {headerStyles.container}>
      <nav className={headerStyles.headerLeft}>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <h1>
        <Link className={headerStyles.title} to="/">
          Beauty by Jill O'Farrell
        </Link>
      </h1>
      <div className= {headerStyles.headerRight}>
      <div className = {headerStyles.socialLinks}> 
          <a href="https://twitter.com/@jill_ofarrell"  title= "Twitter" target="_blank">Twitter</a> 

          <a href="https://instagram.com/beautybyjillofarrell" title="Instagram" target="_blank">Instagram</a>
      </div>
      </div>
      </div>
    </header>
  )
}

export default Header
