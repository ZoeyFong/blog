'use client'

import type { MDXComponents } from 'mdx/types'
import { MDXProvider } from '@mdx-js/react'
import MdxImage from '@/components/MdxImage'

const components: MDXComponents = {
  //@ts-ignore-next-line
  img: MdxImage,
}

const MDX = ({ children }: { children: React.ReactNode }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)

export default MDX
