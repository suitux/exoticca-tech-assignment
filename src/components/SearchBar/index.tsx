import styles from './search-bar.module.scss'
import classNames from 'classnames'
import LensIcon from '@/svg/LensIcon'
import Button from '@/components/Button'
import { ChangeEvent, useState } from 'react'

interface SearchBarProps {
  onSearch?: (term: string) => void
  onSearchClick?: (term: string) => void
  className?: string
}

const SearchBar = ({ onSearch, className, onSearchClick }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState('')

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    onSearch?.(value)
    setSearchValue(value)
  }

  const searchButtonClickHandler = () => {
    onSearchClick?.(searchValue)
  }

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.inputContainer}>
        <LensIcon />
        <input
          value={searchValue}
          onChange={inputChangeHandler}
          data-testid={'searchbar-input'}
          type={'text'}
          placeholder={'Search your next destination...'}
        />

        <Button size={'sm'} onClick={searchButtonClickHandler}>
          Search
        </Button>
      </div>
    </div>
  )
}

export default SearchBar
