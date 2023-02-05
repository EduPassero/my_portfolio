import './SkillCard.css';

function SkillCard({ Id, Name, Description, Img }) {
    return (
        <div className="skill" id={Id}>
            <div className="row">
                <div className="col-2"><div className="circle"><img src={`${import.meta.env.VITE_ICONS_URL + Img}`}/></div></div>
                <div className="col-9"><h2>{Name}</h2></div>
            </div>
            <div>
                <p>
                    {Description}
                </p>
            </div>
        </div>
    )
}

export default SkillCard