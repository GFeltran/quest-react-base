import './paragraphs.css'
import Paragraph from '../text/text.js';

const Paragraphs = () => {
    return (
    <div className='paragraphs'>
        <Paragraph text={'Texto de cor vermelho'} color={'red'}/>
        <Paragraph text={'Texto de cor azul'} color={'blue'}/>
        <Paragraph />
    </div>
    )
}

export default Paragraphs