import styles from './search-bar.module.scss'
import classNames from 'classnames'

interface SearchBarProps {
  onSearch: (term: string) => void
  className?: string
}

const SearchBar = ({ onSearch, className }: SearchBarProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <input type={'text'} placeholder={'Search...'} onChange={e => onSearch(e.target.value)} />
    </div>
  )
}

export default SearchBar
