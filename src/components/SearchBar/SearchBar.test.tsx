import { describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '@/components/SearchBar/index'

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
})
