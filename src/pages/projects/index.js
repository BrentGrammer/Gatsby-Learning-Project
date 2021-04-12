import React from "react"
import Layout from "../../components/Layout"

/**
 *
 * If you create a index.js file in a directory, going to the folder name as a route will take you to the component.
 * ex: /projects  renders this component.
 */

export default function Projects() {
  return (
    <Layout>
      <div>
        <h2>Portfolio</h2>
        <h3>Projects I've Created</h3>
      </div>
    </Layout>
  )
}
