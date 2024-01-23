import { useQuery } from '@tanstack/react-query'
import { PostResponse } from '@/api/products/model'

const fetchProducts = async (): Promise<PostResponse> => {
  return fetch('https://api-us.exoticca.com/api/landing/v2/country/botswana').then(d => d.json())
}

const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts()
  })
}

export { useProducts, fetchProducts }
