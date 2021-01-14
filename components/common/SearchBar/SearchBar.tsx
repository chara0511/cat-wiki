import { ChangeEvent, useState } from 'react'
import Link from 'next/link'
import { SearchIcon } from '@components/icons'
import { BreedModel, useViewsContext } from '@components/views/context'
import s from './SearchBar.module.scss'

const SearchBar = () => {
  const { breeds } = useViewsContext()
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)

  const searchResults = breeds.filter((b: BreedModel) =>
    b.name.toLowerCase().includes(query.toLowerCase()),
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setActive(true)
  }

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
        <div className={s.searchResults}>
          <ul>
            {searchResults.map((b: BreedModel) => (
              <li key={b.id}>
                <Link href={`/breeds/${b.id}`}>
                  <a>{b.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchBar
