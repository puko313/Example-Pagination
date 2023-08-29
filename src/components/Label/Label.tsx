import "./Label.scss"

const Label = (props: LabelProps) => {
  const classNames = ["label"]
  if (props.styleType === "image") {
    classNames.push("image-style")
  }
  if (props.styleType === "listing") {
    classNames.push("listing-style")
  }
  return <div className={classNames.join(" ")}>{props.text}</div>
}

export default Label
