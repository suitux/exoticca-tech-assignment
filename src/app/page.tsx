'use client'

import { useProducts } from '@/api/products/hooks'
import Button from '@/components/Button'
import ProductCard from '@/components/ProductCard'
import styles from './page.module.scss'

export default function Home() {
  const { data } = useProducts()

  console.log(data)

  return (
    <main className={styles.root}>
      FEATUREd
      {data?.destinations.featuredMultiMarket.map(tour => <ProductCard key={tour.id} tour={tour} />)}
      MULTI
      {data?.destinations.multiMarket.map(tour => <ProductCard key={tour.id} tour={tour} />)}
    </main>
  )
}
