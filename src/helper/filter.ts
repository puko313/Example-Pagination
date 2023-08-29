function doesInclude(value: string | null, key: string) {
  return value?.toLocaleLowerCase().includes(key)
}

export default function (data: Listing[], _keyword: string): Listing[] {
  const keyword = _keyword.toLocaleLowerCase()
  return data.filter(
    (item: Listing) =>
      doesInclude(item.name, keyword) ||
      doesInclude(item.tableHeader, keyword) ||
      doesInclude(item.tableSubheader, keyword)
  )
}
