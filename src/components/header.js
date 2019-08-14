import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"


const Header = () => {
  return (
    <header className={headerStyles.header}>
      
      <nav className={headerStyles.headerLeft}>
        <div className={headerStyles.navList}>
          
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">
              Home
            </Link>
          
          
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">
              Blog
            </Link>
          
          
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">
              About
            </Link>
          
        
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">
              Contact
            </Link>
          
        </div>
      </nav>
        <Link className={headerStyles.title} to="/">
          Beauty by Jill O'Farrell
        </Link>

    </header>
  )
}

export default Header
