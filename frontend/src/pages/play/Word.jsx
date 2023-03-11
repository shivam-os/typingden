export default function Word(props) {

  const {item, isWordMatched} = props

  if (isWordMatched) {
    return (
      <span className="correct">{item}</span>
    )
  } else if
}
