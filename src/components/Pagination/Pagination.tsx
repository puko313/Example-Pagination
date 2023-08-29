import "./Pagination.scss"

const Pagination = (props: PaginationProps) => {
  const getPage = (
    content: string,
    classNames: string,
    screenLabel: string,
    step: number,
    directNaviate?: boolean
  ) => {
    const clickHandler = () =>
      directNaviate
        ? props.setSelected(step)
        : step !== undefined
        ? props.setSelected(
            props.selected === 0 && step === -1
              ? 0
              : props.selected === props.numSteps - 1 && step === 1
              ? props.selected
              : props.selected + step
          )
        : null

    return (
      <span onClick={clickHandler} className={"page"} key={content} aria-label={screenLabel}>
        <span className={`page-content ${classNames ? classNames : ""}`}>{content}</span>
      </span>
    )
  }

  return (
    <div className={"pagination"}>
      {getPage("<", "navigation", "Previous page", -1)}
      {[...Array(props.numSteps)].map((_, index) => {
        return getPage(
          (index + 1).toString(),
          props.selected === index ? "current" : "",
          `Page ${index + 1}`,
          index,
          true
        )
      })}
      {getPage(">", "navigation", "Next page", 1)}
    </div>
  )
}

export default Pagination
