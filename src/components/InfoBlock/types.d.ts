type Address = {
  street: string
  city: string
  state: string
  zipCode: string
}

interface InfoBlockProps {
  address: Address
  labels: string[]
  tableHeader: string | null
  tableSubheader: string | null
  title: string
  unitRows: UnitRow[]
}
