import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

/**
 * The data prop is builtin and comes from our GraphQL query
 */
export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop</h3>
          <p>Web dev</p>
          <Link className={styles.btn} to="/projects">
            My Projects
          </Link>
        </div>
        <img src="/banner.png" alt="banner" style={{ maxWidth: "100%" }} />
      </section>
    </Layout>
  )
}

// example of query inside a page (in a component you need to use a Gatsby hook - see Navbar.js)
// can name the query what you want (SiteInfo)
// This pulls site metadata added to our gatsby-config.js manually by us
// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
// `
