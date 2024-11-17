import { useEffect, useRef, useState } from 'react'

import { usePathname } from 'next/navigation'

import Link from 'next/link'

import { useClickAway, useDebounce } from 'react-use'

export default function HeaderSearch() {
  const routerPathname = usePathname()

  const refDropdown = useRef(null)
  const inputRef = useRef(null)

  const [showDropdown, setShowDropdown] = useState(false)
  const [initialResults, setInitialResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchQueryDebounced, setSearchQueryDebounced] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    if (!showDropdown || initialResults.length) {
      return
    }

    async function getSearchResults() {
      const searchResults = await fetchSearchResults()
      const sortedSearchResults = searchResults.sort((resultA, resultB) =>
        resultA.title.localeCompare(resultB.title)
      )

      setSearchResults(sortedSearchResults)
      setInitialResults(sortedSearchResults)
    }

    getSearchResults()

    return () => { }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showDropdown])

  useEffect(() => {
    if (!searchQuery) {
      setSearchResults(initialResults)

      return
    }

    const filteredResults = initialResults.filter(function (initialResult) {
      const { title: initialTitle } = initialResult

      return initialTitle.toLowerCase().includes(searchQuery.toLowerCase().trim())
    })

    setSearchResults(filteredResults)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQueryDebounced])

  useEffect(() => {
    setSearchQuery('')
    setShowDropdown(false)
  }, [routerPathname])

  useClickAway(refDropdown, () => setShowDropdown(false))

  useDebounce(() => setSearchQueryDebounced(searchQuery), 500, [searchQuery])

  async function fetchSearchResults() {
    const searchResults = await fetch('/api/search')
    const searchJson = await searchResults.json()

    return searchJson
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'k' && e.ctrlKey) {
      e.preventDefault()
      inputRef?.current?.focus()
    }
  })

  const [isInputFocused, setisInputFocused] = useState(false)


  return (
    <div ref={refDropdown} className="relative flex h-16 max-w-[300px] flex-1 items-center">
      <form role="search" className="flex-1">
        <label htmlFor="SiteSearch" className="sr-only">
          Search
        </label>

        <input
          ref={inputRef}
          type="text"
          onFocus={() => { setisInputFocused(true); setShowDropdown(true) }} onBlur={() => setisInputFocused(false)}
          onInput={(e) => setSearchQuery(e.currentTarget.value)}
          value={searchQuery}
          placeholder="Search..."
          id="SiteSearch"
          className="w-full rounded-md border-gray-200 dark:border-gray-600 dark:placeholder:text-white sm:text-sm dark:text-white dark:bg-slate-600"
        />

        {!isInputFocused &&
          <div onClick={() => inputRef.current.focus()} className="cursor-text absolute top-[50%] right-[5%] opacity-50 translate-y-[-50%] flex gap-[.1rem] place-content-center">
            <span className={`border dark:border-white rounded-lg h-fit text-[12px] w-fit px-2 py-1 dark:text-white`}>ctrl</span>
            <span className={`border dark:border-white rounded-lg h-fit text-[12px] w-fit px-2 py-1 dark:text-white`}>k</span>
          </div>
        }

        <button tabIndex={-1} className="sr-only">
          Submit
        </button>
      </form>

      {showDropdown && (
        <div className="absolute w-[300px] inset-x-0 top-14 z-50 rounded-md border border-gray-100 bg-white dark:text-white dark:bg-black shadow-lg">
          {searchResults.length ? (
            <ul className="max-h-80 space-y-1 overflow-auto p-2">
              {searchResults.map((searchResult) => (
                <li key={searchResult.id}>
                  <Link
                    href={`/components/${searchResult.category.slug}/${searchResult.slug}`}
                    className="group flex items-center justify-between rounded-md px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 focus:bg-gray-50 hover:dark:bg-gray-600 focus:dark:bg-gray-600"
                  >
                    <span>{searchResult.title}</span>

                    <span className="block rounded bg-gray-900 dark:bg-gray-600 group-hover:bg-gray-300 px-1.5 py-0.5 text-xs text-white group-hover:text-[#474747]">
                      {searchResult.category.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center text-sm text-gray-700 dark:text-white">
              {searchQuery ? 'Uh-no! There are no results 😢' : 'Loading search results...'}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
