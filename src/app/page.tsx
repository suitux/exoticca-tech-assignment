'use client'

import { useProducts } from '@/api/products/hooks'

export default function Home() {
  const { data } = useProducts()

  console.log(data)

  return <main></main>
}
