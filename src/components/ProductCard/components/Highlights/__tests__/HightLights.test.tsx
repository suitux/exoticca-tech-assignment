import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Highlights from '@/components/ProductCard/components/Highlights'
import { mockHighlights } from '@/components/ProductCard/components/Highlights/__tests__/mockData'

describe('Highlights tests', () => {
  test('Should render the highlights with 1 more text', () => {
    render(<Highlights highlights={mockHighlights} />)

    expect(screen.getByText(mockHighlights[0].title)).toBeTruthy()
    expect(screen.getByText('+ 12 more')).toBeTruthy()
  })
})
