import { useState } from 'react'
import { useEffect } from 'react'

import eduardo from './assets/img/eduardo.png';
import me_brand from './assets/img/me_brand.png';
import close from './assets/icons/close.svg'
import sandwich from './assets/icons/sandwich.svg'
import bg from './assets/video/background_smoke.mp4'

import projects from './assets/records/projects.json'
import skills from './assets/records/skills.json'

import Videos from './components/Videos/Videos'
import Card from './components/Card/Card'
import SkillCard from './components/SkillCard/SkillCard'
import Pics from './components/Pics/Pics'

import './App.css'


function App() {
  const [navbar, setNavbar] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);

    return() => {
      window.removeEventListener('scroll', changeNavbar);
    };
  }, [window.scrollY])
  
  function changeNavbar(){
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
  };
  function hideNavMobile(){
    setNavMobile(false);
  }
  function showNavMobile(){
    setNavMobile(true);
  }

  return (
    <div className="App">
      <nav className={navbar ? 'nav_active' : ''}>
        <div className='brand_cover'></div>
        <img className='nav_brand' src={me_brand}/>
        <ul className='nav_links'>
          <li><a href='#about'>Sobre</a></li>
          <li><a href='#experiences'>Experiências</a></li>
          <li><a href='#projects'>Projetos</a></li>
        </ul>
        <button className='nav_mobile_button' onClick={showNavMobile}>
          <img src={sandwich} alt="sandwich"/>
        </button>
      </nav>
      <div className={navMobile ? 'nav_mobile nav_mobile_active' : 'nav_mobile'}>
        <div>
          <button className={navMobile ? 'nav_mobile_button nav_close' : 'nav_close_hidden'} onClick={hideNavMobile}>
            <img src={close} alt="close"/>
          </button>
        </div>
        <ul className='nav_mobile_links'>
          <li><a href='#about'>Sobre</a></li>
          <li><a href='#experiences'>Experiências</a></li>
          <li><a href='#projects'>Projetos</a></li>
        </ul>
      </div>
      <div className='cover'>
        <video className='video_bg' src={bg} muted autoPlay loop/>
        <div className='big_titles'>
          <h1 id="name">Eduardo Passero</h1>
          <div id="subtitle">&lt;desenvolvedor_web/&gt;</div>
        </div>
        <div className='social_buttons'>
          <a href="https://www.linkedin.com/in/eduardo-passero/"><button className='social_button'>LinkedIn</button></a>
          <a href="https://github.com/EduPassero"><button className='social_button'>Github</button></a>
          <a href="https://wa.me/5547988475547"><button className='social_button'>Whatsapp</button></a>
        </div>
      </div>

      <div className='container' id='about'>
        <div className='row'>
          <div className='col-6'>
          <h2 className='title'>Sobre mim</h2>
            <p>
              Sou um desenvolvedor web formado em Análise e Desenvolvimento de Sistemas pelo SENAC e atualmente trabalho como
              suporte ao usuário e desenvolvedor.
              <br/><br/>
              Sou casado com a Barbara Passero há três anos e é ela que me arrasta para longe do
              computador para passear nas horas vagas. Além disso gosto de ler, jogar jogos velhos como Age of Empires e perder no Xadrez online.
              <br/><br/>
              A longo prazo quero me tornar um desenvolvedor full stack, aquele profissional que sabe resolver qualquer problema, ou pelo
              menos tem uma ideia de como se resolve. Este portfólio mostra meu progresso na direção desse objetivo.
            </p>
          </div>
          <div className='col-6'>
            <Pics/>
          </div>
        </div>
      </div>

      <div className='container' id="experiences">
      <h2 className='title'>Experiências</h2>
      <div className="row">
        <div className="col-7">
        <p>
          Trabalho há 4 anos na Consensu Soluções em Sistemas. Lá aprendi quase tudo o que sei hoje trabalhando em diversos projetos, abaixo está uma pequena demonstração
          do meu principal projeto na empresa hoje: o desenvolvimento do Gestão Central Web, a versão web do nosso sistema ERP.
        </p>
        </div>
      </div>
        
          <Videos/>
        <div className="row">
          <div className="col-6">
            <p>
              Trabalho tanto no front-end quanto no back-end para concluir minhas tarefas. Sempre que surgem dúvidas peço ajuda aos meus gestores, ou vasculho a internet em busca de soluções.
              Sempre dou um jeito!
              <br/><br/>
              Atualmente estou familiarizado com as tecnologias ao lado, são elas que utilizo no trabalho. Meu principal objeto de estudo  no momento é o React JS.
            </p>
          </div>
          <div className="col-6">
            <div className='skills'>
              {skills.map(skill => {
                return (
                  <SkillCard
                    key={skill.id}
                    Name={skill.name}
                    Img={skill.image}
                    Description={skill.description}
                  />
                )
              })}
            </div>
          </div>
        </div>
        
        
      </div>

      <div className='container' id='projects'>
      <h2 className='title'>Meus Projetos</h2>
          <div className='cards'>
            {projects.map(project => {
              return (
                <Card 
                  key={project.id} 
                  Name={project.nome} 
                  Description={project.descricao}
                  Link={project.link}
                  Img={project.image}
                />
              )
            })}
          </div>
      </div>

      <div className='footer'>
        <div className='brand_footer'>
        <h5>Forjado em 2023 no fogo do verão jaraguaense por:</h5>
          <div className='row'>
              <div className='col-5'>
                <a href='https://www.youtube.com/shorts/PAOl8MgiDIQ'>
                  <img className='brand glow' src={eduardo} />
                </a>
              </div>
            <div className='col-7 name'>
              <h3>Eduardo<br/>Passero</h3>
            </div>
          </div>
          <h5>Versão 1.0</h5>
        </div>
        
      </div>
    </div>
  )
}

export default App