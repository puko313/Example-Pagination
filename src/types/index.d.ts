interface UnitRow {
  minIncomeMaximum: number
  minIncomeMinimum: number
  rentMaximum: number
  rentMinimum: number
  rentUnit: "percentage" | "currency"
  type: "studio" | "oneBdrm" | "twoBdrm" | "threeBdrm" | "fourBdrm"
}

interface Listing {
  address: Address
  deadline: string
  id: string
  imageLabels: string[]
  imageURL: string
  listingLabels: string[]
  name: string
  tableHeader: string | null
  tableSubheader: string | null
  unitTableData: UnitRow[]
}
