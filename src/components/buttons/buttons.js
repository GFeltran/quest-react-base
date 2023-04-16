import './buttons.css'
import Button from '../button/button';

const Buttons = () => {
    return (
        <div className='buttons'>
            <Button label={'Botão 1'}/>
            <Button label={'Baixar CV'}/>
            <Button />
        </div>
    )
}

export default Buttons;