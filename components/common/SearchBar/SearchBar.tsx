import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SearchIcon } from '@components/icons'
import { BreedModel } from '@components/views/context'
import s from './SearchBar.module.scss'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState<null | []>(null)

  const fetchData = async () => {
    await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => setData(data))
  }

  useEffect(() => {
    fetchData()
  }, [search])

  return (
    <div className={s.content}>
      <div className={s.search}>
        <input
          type="text"
          placeholder="Enter your breed"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
        />
        <span>
          <SearchIcon />
        </span>
      </div>
      <div className={s.searchResults}>
        {!data ? (
          <div>no results</div>
        ) : (
          <ul>
            {data.map((item: BreedModel) => (
              <li key={item.id}>
                <Link href={`/breeds/${item.id}`}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default SearchBar
