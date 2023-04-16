const Paragraph = ({text, color}) => {
    return <p 
            style={{textTransform: "uppercase", 
                    color: color}}>
                {text}
           </p>;
}

Paragraph.defaultProps = {
    text: 'Sem texto definido',
    color: "#000000"
}

export default Paragraph;