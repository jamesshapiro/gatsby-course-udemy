import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/Button"

export default () => (
  <Layout>
    <h1 style={{ color: "green", textTransform: "uppercase" }}>
      Hello from Gatsby
    </h1>
    <ExampleButton>click me</ExampleButton>
  </Layout>
)
