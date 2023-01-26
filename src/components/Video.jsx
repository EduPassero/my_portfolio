import './Video.css';

function Video({source, title}) {
    return (
        <div className='video_wrapper'>
            <h4>{title}</h4>
            <video src={source} controls autoPlay loop muted/>
        </div>
        
    )
}

export default Video