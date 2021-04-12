import React from "react"
import Layout from "../components/Layout"

/**
 * Gatsby looks at the file name and creates a route for it
 * the exception is when there is a index.js file it doesn't create a route (it's the home)
 */

export default () => {
  return (
    <Layout>
      <div>
        <h1>About</h1>
      </div>
    </Layout>
  )
}
