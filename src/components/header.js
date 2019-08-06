import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"


const Header = () => {
  return (
    <header className={headerStyles.header}>
      
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
        <Link className={headerStyles.title} to="/">
          Beauty by Jill O'Farrell
        </Link>

    </header>
  )
}

export default Header
