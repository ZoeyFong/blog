import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    img: (props) => (
      //@ts-ignore-next-line
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        //@ts-expect-error
        width={0}
        //@ts-expect-error
        height={0}
        {...props}
      />
    ),
    ...components,
  }
}

export default useMDXComponents
