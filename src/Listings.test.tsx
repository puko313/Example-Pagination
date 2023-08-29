import { render, screen } from "@testing-library/react"
import { Listings } from "./Listings"

test("renders 10 listings", () => {
  render(<Listings />)
  const images = screen.getAllByAltText("A photo of the building")
  expect(images.length).toBe(10)
})

test("renders filters", () => {
  render(<Listings />)
  const nameFilter = screen.getByPlaceholderText("Search")
  expect(nameFilter).toBeInTheDocument()

  const pageItemsFilter = screen.getByPlaceholderText("10")
  expect(pageItemsFilter).toBeInTheDocument()

  const paginationPrevious = screen.getByLabelText("Previous page")
  expect(paginationPrevious).toBeInTheDocument()

  const paginationNext = screen.getByLabelText("Next page")
  expect(paginationNext).toBeInTheDocument()
})
