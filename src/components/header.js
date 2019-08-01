import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <nav>
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
      <div>
        <p>
          <a href="https://twitter.com/@jill_ofarrell"  title= "Twitter" target="_blank">Twitter</a> 
        </p>
            
        <p>
          <a href="https://instagram.com/beautybyjillofarrell" title="Instagram" target="_blank">Instagram</a>
        </p>
      </div>
    </header>
  )
}

export default Header
