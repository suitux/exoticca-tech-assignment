import styles from './page.module.scss'
import ProductCardList from '@/components/ProductCardList'

export default function Home() {
  return (
    <main className={styles.root}>
      <ProductCardList />
    </main>
  )
}
