import "./button.css"

type Props = {
    name: string,
    bg: string,
    color: string,
}

const Button = ({name, bg, color}: Props) => {
  return (
    <div>
        <button className="btn" style={{backgroundColor: `${bg}`, color: `${color}`}}>{name}</button>
    </div>
  )
}

export default Button