import './Pics.css'
import cave from '../../assets/img/cave.jpg'
import eduardo from '../../assets/img/me.jpg'
import xadrez from '../../assets/img/xadrez.jpeg'

function Pics() {
    return (
        <div className='image-grid'>
            <img className='image-grid-row-2' src={eduardo} />
            <img src={cave} />
            <img src={xadrez} />
        </div>
    )
}

export default Pics