import './Card.css';

function Card({Id, Name, Img,  Description, Link}) {
    return (
        <a href={Link} target="_blank">
            <div className='card' id={Id}>
                <img className='project_image' src={`${import.meta.env.VITE_PROJECT_URL + Img}`}/>
                <h3>{Name}</h3>
                <p>{Description}</p>
            </div>
        </a>
    )
}

export default Card