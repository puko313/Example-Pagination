import { ChangeEvent, useState } from "react"

// components
import ImageBlock from "./components/ImageBlock"
import TextInput from "./components/TextInput"
import Pagination from "./components/Pagination"
import InfoBlock from "./components/InfoBlock"

// helper
import filterData from "./helper/filter"

import mockData from "./mock-data.json"

import "./Listings.scss"

export const Listings = () => {
  const listingData = mockData as Listing[]

  const [selected, setSelected] = useState<number>(0)
  const [limit, setLimit] = useState<number>(10)
  const [searchData, setSearchData] = useState<Array<Listing>>(listingData)
  {
    /*
    Removed the state pagedData since it' s unnecessary.
    we can get pagedData from the states(searchData, selected, limit)
    also used Array.filter() to get pagedData. 
    */
  }
  const pagedData = searchData.filter(
    (_row: Listing, i: number) => i >= selected * limit && i < selected * limit + limit
  )

  return (
    <div className={"content"}>
      <div className={"container"}>
        <div className={"filters"}>
          <TextInput
            label={"Search listings by name"}
            placeholder={"Search"}
            className={"name-filter"}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSelected(0)
              const value = e.target.value
              if (!value) {
                setSearchData(listingData)
              } else {
                setSearchData(filterData(listingData, value))
              }
            }}
          />
          <TextInput
            label={"Items per page"}
            placeholder={limit.toString()}
            className={"items-per-page-filter"}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const value = Number(e.target.value)
              if (value < 1) return

              setLimit(value)
              setSelected(0)
            }}
          />
          <Pagination
            numSteps={limit ? Math.ceil(searchData.length / limit) : 1}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div className={"listings"}>
          {pagedData.map((listing: Listing, index: number) => {
            return (
              <div className="listing" key={index}>
                {/* 
                  Here, passed props destructing the listing object since most props names are the same.
                */}
                <ImageBlock {...listing} labels={listing.imageLabels} />
                <InfoBlock
                  {...listing}
                  labels={listing.listingLabels}
                  unitRows={listing.unitTableData}
                  title={listing.name}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
