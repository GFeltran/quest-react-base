const alertLabel = (label) => {
    alert(`A label desse botão é ${label}`)
}

const Button = ({label}) => {
    return (
       <button
        onClick={() => alertLabel(label)}
        >
            {label}
       </button>
    )
}

Button.defaultProps = {
    label: 'Clique aqui!',
}

export default Button;