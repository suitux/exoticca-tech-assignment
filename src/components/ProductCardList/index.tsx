'use client'

import { useProducts } from '@/api/products/hooks'
import styles from './product-card-list.module.scss'
import ProductCard from '@/components/ProductCard'
import Text from '@/components/Text'
import { useEffect, useState } from 'react'
import { Tour } from '@/model'
import SearchBar from '@/components/SearchBar'

const ProductCardList = () => {
  const { data, isLoading } = useProducts()
  const [tours, setTours] = useState<Tour[]>([])
  const toursOriginalData = [
    ...(data?.destinations.multiMarket || []),
    ...(data?.destinations.featuredMultiMarket || [])
  ]

  // I know this is not the best performant solution, but in the test, you specified "By any data".
  function filterTours(filterString: string): Tour[] {
    return toursOriginalData.filter(tour => JSON.stringify(Object.values(tour)).includes(filterString))
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

      <div className={styles.products}>
        <Text block size={'xl'}>
          Tours
        </Text>

        {tours.length === 0 && !isLoading && <Text>No data</Text>}
        {isLoading && <Text>Loading...</Text>}

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
