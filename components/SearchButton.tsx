'use client'
import { AlgoliaButton } from 'pliny/search/AlgoliaButton'
import { KBarButton } from 'pliny/search/KBarButton'
import siteMetadata from '@/data/siteMetadata'

console.debug(siteMetadata.search)
const SearchButton = () => {
  if (
    siteMetadata.search &&
    (siteMetadata.search.provider === 'algolia' || siteMetadata.search.provider === 'kbar')
  ) {
    const SearchButtonWrapper =
      siteMetadata.search.provider === 'algolia' ? AlgoliaButton : KBarButton

    const onClick = (e) => {
      e.preventDefault()
      e.stopPropagation()
      const metaKPress = new KeyboardEvent('keydown', {
        key: 'k',
        code: 'K',
        ctrlKey: false,
        metaKey: true, // This is for the Command key on Mac
        bubbles: true,
      })
      document.dispatchEvent(metaKPress)
    }

    return (
      <SearchButtonWrapper aria-label="Search" onClick={() => {}}>
        <div onClick={onClick} className="align-center flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 text-gray-900 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <span className="ml-1 h-[24px] leading-[24px] text-gray-400">⌘K</span>
        </div>
      </SearchButtonWrapper>
    )
  }
}

export default SearchButton
