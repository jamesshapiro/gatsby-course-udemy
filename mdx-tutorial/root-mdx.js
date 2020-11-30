import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Headings } from './src/components/Complete/'

const components = {
  h2: Headings.myH2,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
