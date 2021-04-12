# Gatsby Learning Project

A project for learning Gatsby following online tutorials. The code is heavily commented for reference.

- Gatsby comes builtin with:
  - CSS Modules (`import * as styles from './styles/mycomp.module.css'`)
  - GraphQL (including Graphiql for testing)
  - Development Server
  - Optimization for assets
  - SEO Optimization
  - React-Router/SPA Routing

# Notes

## Static Assets

- For any static assets that you do not need to be optimized by Gatsby, can place them in the `static` folder.
  - Gatsby does NOT optimize the files in this folder for the web, but they are made available publicly (img src is /my-image.png)
