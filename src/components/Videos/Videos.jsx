import './Videos.css';
import homePage from '../../assets/video/home_page.mp4'
import responsivo from '../../assets/video/responsivo.mp4'
import notasFiscais from '../../assets/video/notas_fiscais.mp4'
import relatorio from '../../assets/video/relatorio.mp4'

function Videos() {
    return (
        <div className='videos'>
            <div className='video_wrapper'>
                <h3>Login</h3>
                <video className='video_project' src={homePage} controls autoPlay loop muted/>
            </div>
            <div className='video_wrapper'>
                <h3>Responsividade</h3>
                <video className='video_project' src={responsivo} controls autoPlay loop muted />
            </div>
            <div className='video_wrapper'>
                <h3>Notas Fiscais</h3>
                <video className='video_project' src={notasFiscais} controls autoPlay loop muted />
            </div>
            <div className='video_wrapper'>
                <h3>Relatório</h3>
                <video className='video_project' src={relatorio} controls autoPlay loop muted />
            </div>
        </div>
    )
}

export default Videos