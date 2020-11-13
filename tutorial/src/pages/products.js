import React, { Component } from "react"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"

export default class products extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.page}>
          <h1>This is our products page!</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            magnam, temporibus nemo labore odio molestias facere vero
            accusantium omnis ad, ullam impedit aspernatur obcaecati ea!
          </p>
        </div>
      </Layout>
    )
  }
}
