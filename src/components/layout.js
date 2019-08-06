import React from 'react'

import Header from './header'
import Footer from './footer'


import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
            <div className={layoutStyles.container}>
            <Header />
                    {props.children}
                <div className={layoutStyles.content}>
                <h2 className= "pageHeadTitle">Beauty By Jill O'Farrell</h2>
            
                    
                </div>
                <Footer />
            </div>
    )
}

export default Layout