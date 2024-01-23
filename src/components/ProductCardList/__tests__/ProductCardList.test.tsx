import { beforeEach, describe, expect, it, Mock, test, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import ProductCardList from '@/components/ProductCardList'
import { useProducts } from '@/api/products/hooks'
import { useProductsResponseData } from '@/components/ProductCardList/__tests__/mockData'

vi.mock('@/api/products/hooks')

describe('ProductCardList tests', () => {
  test('Should render a product card list', () => {
    ;(useProducts as Mock).mockReturnValue({ data: useProductsResponseData })

    render(<ProductCardList />)

    expect(screen.getByText(useProductsResponseData.destinations.multiMarket[0].title)).toBeTruthy()
  })

  it.each([
    ['Okavango Delta'],
    ['$5,499'],
    ['Waterfalls, Safaris & Sand Dunes'],
    ['Waterfalls, Wild Chobe & Okavango Safari']
  ])('Should find the tour in the list filtering by value %s', value => {
    ;(useProducts as Mock).mockReturnValue({ data: useProductsResponseData })

    render(<ProductCardList />)

    act(() => {
      fireEvent.change(screen.getByTestId('searchbar-input'), {
        target: {
          value
        }
      })
    })

    expect(screen.getAllByText(value)).toBeTruthy()
  })
})
