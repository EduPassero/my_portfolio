import './SkillCard.css';

function SkillCard({ Id, Name, Description, Img }) {
    return (
        <div className="skill" id={Id}>
            <div className="row">
                <div className="col-3 sm-3">
                    <div className="image_border">
                        <img src={`${import.meta.env.VITE_ICONS_URL + Img}`}/>
                    </div>
                </div>
                <div className="col-9 sm-9">
                    <h5>{Name}</h5>
                </div>
            </div>
            
        </div>
    )
}

export default SkillCard