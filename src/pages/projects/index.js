import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

/**
 *
 * If you create a index.js file in a directory, going to the folder name as a route will take you to the component.
 * ex: /projects  renders this component.
 */

export default function Projects() {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects I've Created</h3>
      </div>
    </Layout>
  )
}
