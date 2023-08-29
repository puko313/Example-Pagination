import "./InfoBlock.scss"
import Label from "../Label"
import UnitTable from "../UnitTable"

const InfoBlock = (props: InfoBlockProps) => {
  const getAddress = (address: Address) => {
    return `${address.street}, ${address.city} ${address.state} ${address.zipCode}`
  }

  return (
    <div className="info-block">
      <div className={"title"}>{props.title}</div>
      <div className={"address"}>{getAddress(props.address)}</div>
      {props.labels.length > 0 && (
        <div className={"label-container"}>
          {props.labels.map((label, index) => {
            return <Label text={label} styleType={"listing"} key={index} />
          })}
        </div>
      )}
      <hr />
      {(!!props.tableSubheader || !!props.tableHeader) && (
        <div className={"headers"}>
          {props.tableHeader && <div className={"header"}>{props.tableHeader}</div>}
          {props.tableSubheader && <div className={"subheader"}>{props.tableSubheader}</div>}
        </div>
      )}
      <UnitTable unitRows={props.unitRows} />
    </div>
  )
}

export default InfoBlock
