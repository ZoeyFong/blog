import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    img: (props) => (
      //@ts-ignore-next-line
      <Image
        {...props}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        width={0}
        height={0}
      />
    ),
    ...components,
  }
}

export default useMDXComponents
