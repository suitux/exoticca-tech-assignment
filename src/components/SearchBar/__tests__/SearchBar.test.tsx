import { describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '@/components/SearchBar'

describe('SearchBar tests', () => {
  test('It should call to onChange function when we change the input', () => {
    const onSearchMocked = vi.fn()

    render(<SearchBar onSearch={onSearchMocked} />)

    fireEvent.change(screen.getByTestId('searchbar-input'), {
      target: {
        value: 'test'
      }
    })

    expect(onSearchMocked).toHaveBeenCalled()
  })

  test('It should call to onSearchClick function when we change the input and click to search', () => {
    const onSearchClickMocked = vi.fn()

    render(<SearchBar onSearchClick={onSearchClickMocked} />)

    fireEvent.change(screen.getByTestId('searchbar-input'), {
      target: {
        value: 'test'
      }
    })

    fireEvent.click(screen.getByText('Search'))

    expect(onSearchClickMocked).toHaveBeenCalled()
  })
})
