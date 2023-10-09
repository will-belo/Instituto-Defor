import './css/index.css'

import Form from './components/Form'
import More from './components/More'
import About from './components/About'
import Works from './components/Works'
import Header from './components/Header'
import Footer from './components/Footer'
import Clients from './components/Clients'
import Benefits from './components/Benefits'
import { about } from './lists/about-list'
import { works } from './lists/works-list'
import { more, image } from './lists/more-list'
import { benefits } from './lists/benefits-list'
import { logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, depoiment1, depoiment2 } from './assets/Clients/images'
import Depoiment from './components/Depoiment'

function App() {
  return (
    <>
      <Header>
        <h1>INSPIRANDO VIDAS, TRANSFORMANDO NEGÓCIOS​</h1>
        <h2>Soluções completas em cultura e liderança</h2>
      </Header>
      
      <main>
        <About list={about} />

        <Benefits list={benefits} />

        <Form />

        <Works list={works} />

        <Clients images={[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8]} />
        
        <More  list={more} image={image} />

        <>
        <div className='clients-depoiments'>
          <div className='title'>
            <h1>Depoimentos</h1>
          </div>
          <div className='depoiments recoil'>
              <Depoiment cite="Vanessa Aquino - Gerente de Recursos Humanos Flexform Industria e comércio LTDA" image={depoiment1}>
                Estou muito feliz com o trabalho realizado com a minha liderança, hoje avançamos com muitos gestores na questão de perfis, feedbacks e principalmente a aproximação e desenvolvimento das equipes. Fora o trabalho com o fortalecimento da nossa cultura, isso muda toda a organização. A Cris é uma excelente profissional, com quem tenho orgulho de trabalhar ela realiza grandes resultados juntamente comigo
              </Depoiment>
              <Depoiment cite="Renata Murari - Gerente de Recursos Humanos Newrest do Brasil" image={depoiment2}>
                A Cris é um dos melhores presentes que a vida me deu nos últimos tempos, profissional incrível, ela não ganhou só a confiança dos profissionais envolvidos e do RH, como da diretoria da empresa, pois enxergam o resultado das ações e projetos implantados. Espero ter muitas oportunidades de trabalharmos juntas em diversos programas futuros
              </Depoiment>
          </div>
        </div>
        </>

        <Form />
      </main>

      <Footer />
    </>
  )
}

export default App
