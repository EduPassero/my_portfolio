import { useState } from 'react'
import { useEffect } from 'react'

import close from './assets/icons/close.svg'
import sandwich from './assets/icons/sandwich.svg'
import bg from './assets/video/background_smoke.mp4'

import projects from './assets/records/projects.json'
import skills from './assets/records/skills.json'

import Videos from './components/Videos'
import Card from './components/Card'
import SkillCard from './components/SkillCard'
import Pics from './components/Pics'

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
        <h2>E</h2>
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
          <h1>Eduardo Passero</h1>
          <h2>desenvolvedor web</h2>
        </div>
        <div className='social_buttons'>
          <button className='social_button' href="https://www.linkedin.com/in/eduardo-passero/">LinkedIn</button>
          <button className='social_button' href="https://github.com/EduPassero">Github</button>
          <button className='social_button' href="https://wa.me/5547988475547">Whatsapp</button>
        </div>
      </div>

      <div className='container' id='about'>
        <div className='row'>
          <div className='col-6 about'>
          <h2 className='title'>Sobre mim</h2>
            <p>
              Sou um desenvolvedor web formado em Análise e Desenvolvimento de Sistemas, atualmente trabalho como
              suporte ao usuário e desenvolvedor. A curto prazo, quero migrar do suporte para o desenvolvimento.
              <br/><br/>
              Sou casado com a Barbara há três anos e é ela que me arrasta para fora do
              computador para passear nas horas vagas. Além disso gosto de ler, jogar jogos velhos Age of Empires e perder no Xadrez online.
              <br/><br/>
              A longo prazo quero me tornar um desenvolvedor full stack, aquele profissional que sabe resolver qualquer problema, ou pelo
              menos tem uma ideia de como se resolve. Este portfolio mostra meu progresso na direção desse objetivo.
            </p>
          </div>
          <div className='col-6'>
            <Pics/>
          </div>
        </div>
      </div>

      <div className='container' id="experiencias">
        <p>
          Trabalho há 4 anos na Consensu Soluções em Sistemas. Aprendi quase tudo o que sei trabalhando lá, e abaixo está uma pequena demonstração
          do meu principal projeto na empresa: o Gestão Central Web. A versão web do ERP da Consensu, que estou desenvolvendo sozinho!
          Trabalho tanto no front-end quanto no back-end para concluir minhas tarefas. Sempre surgem dúvidas e nessas
          horas peço ajuda aos meus gestores, ou vasculho a internet em busca de soluções. Sempre dou um jeito!
        </p>
          
          <Videos/>
          
        <p>
          Trabalho como suporte ao cliente e como desenvolvedor. Então minhas atividades são variadas: tiro dúvidas relacionadas
          a notas fiscais, funções do sistema, crio logos, artes para divulgação, configuração de e-mails, mas meu foco profissional é ser desenvolvedor.
          E ao longo desses anos é a função que venho ocupando por mais tempo na empresa. Abaixo estão as tecnologias com as quais estou mais familiarizado:
        </p>
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

      <div className='container' id='projects'>
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
    </div>
  )
}

export default App
