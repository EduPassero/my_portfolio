import './Card.css';

function Card({Id, Name, Img,  Description, Link}) {
    return (
        <div className="col-6">
            <a href={Link} target="_blank">
                <div className='card' id={Id}>
                    <img className='project_image' src={`${import.meta.env.VITE_PROJECT_URL + Img}`}/>
                    <div className='card_content'>
                        <h3>{Name}</h3>
                        <p>{Description}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Card