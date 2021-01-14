import { ChangeEvent, useRef, useState } from 'react'
import Link from 'next/link'
import { SearchIcon } from '@components/icons'
import { BreedModel, useViewsContext } from '@components/views/context'
import { useOnClickOutside } from '@lib/hooks'
import Portal from '@reach/portal'
import s from './SearchBar.module.scss'

const SearchBar = ({ id = 'search' }) => {
  const { breeds } = useViewsContext()
  const ref = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)

  const searchResults = breeds.filter((b: BreedModel) =>
    b.name.toLowerCase().includes(query.toLowerCase()),
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleOnClickOutSide = () => {
    setActive(false)
  }

  useOnClickOutside(ref, handleOnClickOutSide)

  return (
    <div className={s.content}>
      <div className={s.search}>
        <label htmlFor={id}>
          <input
            id={id}
            type="text"
            placeholder="Enter your breed"
            name="search"
            value={query}
            onClick={() => setActive(true)}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>

        <span>
          <SearchIcon />
        </span>
      </div>
      {active && id === 'search' && (
        <div className={s.searchResults} ref={ref}>
          <ul>
            {searchResults.length !== 0 ? (
              searchResults.map((b: BreedModel) => (
                <li key={b.id}>
                  <Link href={`/breeds/${b.id}`}>
                    <a>{b.name}</a>
                  </Link>
                </li>
              ))
            ) : (
              <li style={{ margin: 0 }}>No Results</li>
            )}
          </ul>
        </div>
      )}

      {active && id === 'mobile-search' && (
        <Portal>
          <div className={s.searchContentMobile} ref={ref}>
            <div className={s.searchMobile}>
              <input
                type="text"
                placeholder="Enter your breed"
                name="search"
                value={query}
                onChange={handleChange}
                autoComplete="off"
              />
              <span>
                <SearchIcon />
              </span>
            </div>
            <div className={s.searchResultsMobile} ref={ref}>
              <ul>
                {searchResults.length !== 0 ? (
                  searchResults.map((b: BreedModel) => (
                    <li key={b.id}>
                      <Link href={`/breeds/${b.id}`}>
                        <a>{b.name}</a>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li style={{ margin: 0 }}>No Results</li>
                )}
              </ul>
            </div>
          </div>
        </Portal>
      )}
    </div>
  )
}

export default SearchBar
