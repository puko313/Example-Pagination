import "./TextInput.scss"

const TextInput = (props: TextInputProps) => {
  return (
    <div className={`text-input ${props.className ? props.className : ""}`}>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        onChange={props.onChange}
        id={props.label}
        type={"text"}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default TextInput
