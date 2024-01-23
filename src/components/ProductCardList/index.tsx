'use client'

import { useProducts } from '@/api/products/hooks'
import styles from './product-card-list.module.scss'
import ProductCard from '@/components/ProductCard'
import Text from '@/components/Text'
import { useEffect, useState } from 'react'
import { Tour } from '@/model'
import SearchBar from '@/components/SearchBar'

const ProductCardList = () => {
  const { data } = useProducts()
  const [tours, setTours] = useState<Tour[]>([])
  const toursOriginalData = [
    ...(data?.destinations.multiMarket || []),
    ...(data?.destinations.featuredMultiMarket || [])
  ]

  function filterTours(filterString: string): Tour[] {
    return toursOriginalData.filter(tour => JSON.stringify(tour).includes(filterString))
  }

  useEffect(() => {
    if (data) {
      setTours(toursOriginalData)
    }
  }, [data])

  const onSearch = (value: string) => {
    setTours(value ? filterTours(value) : toursOriginalData)
  }

  return (
    <div className={styles.root}>
      <SearchBar onSearch={onSearch} className={styles.searchBar} />

      <div>
        <Text block size={'xl'}>
          tours
        </Text>

        <div className={styles.tours}>
          {tours.map(tour => (
            <ProductCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCardList
