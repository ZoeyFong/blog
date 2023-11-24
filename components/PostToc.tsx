import { Toc } from 'pliny/mdx-plugins/remark-toc-headings'

const Toc = ({ toc }: { toc: Toc }) => (
  <div className="sticky top-0 -ml-20 mr-12 hidden h-full max-h-screen min-w-[280px] flex-col flex-wrap space-y-3 overflow-auto rounded bg-gray-50 px-6 py-2 pt-5 shadow-md dark:bg-[#27272a] dark:shadow-gray-800/40 sm:flex">
    {toc.map(({ url, depth, value }) => {
      switch (depth) {
        case 1:
          return (
            <div className="text-base" key={value}>
              <a href={url} style={{ textDecoration: 'none' }}>
                {value}
              </a>
            </div>
          )
        case 2:
          return (
            <div className="ml-4 text-sm" key={value}>
              <a href={url} style={{ textDecoration: 'none' }}>
                {value}
              </a>
            </div>
          )
        default:
          return null
      }
    })}
  </div>
)

export default Toc
