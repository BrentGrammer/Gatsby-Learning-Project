import { Link, graphql, useStaticQuery } from "gatsby" // import Link from gatsby for routing links
import React from "react"

/**
 *
 * To make a graphql query in a component, use the hook from Gatsby called useStaticQuery
   In Static Queries you cannot use Query Variables (unlike on queries on pages) 
   Note: can only use useStaticQuery hook once in the component

   */

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata
  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}
