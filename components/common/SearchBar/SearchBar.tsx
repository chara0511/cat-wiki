import { ChangeEvent, useRef, useState } from 'react'
import Link from 'next/link'
import { SearchIcon } from '@components/icons'
import { BreedModel, useViewsContext } from '@components/views/context'
import { useOnClickOutside } from '@lib/hooks'
import s from './SearchBar.module.scss'

const SearchBar = () => {
  const { breeds } = useViewsContext()
  const ref = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)

  const searchResults = breeds.filter((b: BreedModel) =>
    b.name.toLowerCase().includes(query.toLowerCase()),
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setActive(true)
  }

  const handleOnClickOutSide = () => {
    setActive(false)
  }

  useOnClickOutside(ref, handleOnClickOutSide)

  return (
    <div className={s.content}>
      <div className={s.search}>
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
      {active && (
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
    </div>
  )
}

export default SearchBar
