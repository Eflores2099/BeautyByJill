import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h2 className= "pageHeadTitle">I'm Jill O'Farrell and I am a Makeup Artist in the Salt Lake City Metro Area.</h2>
            <p>Need a Makeup Artist? <Link to ="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage
