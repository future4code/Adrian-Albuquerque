import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MyPhoto from './img/photo.jpg'
import Linkedin from './img/linkedin.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno'
import SuporteTecnico from './img/suporteTecnico.png'
import FreeLancer from './img/freelancer.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={MyPhoto}
          nome="Adrian Américo"
          descricao="Profissional Apaixonado por tecnologia desde então, vêm construindo uma carreira no desenvolvimento Web Full-Stack utilizando ferramentas e frameworks como: HTML, CSS, Javascript, ReactJs, NodeJs, MySQL e Python cujo suas principais competências são: Pensamento critico, Raciocinio lógico e Colaboração."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={SuporteTecnico}
          nome="Suporte Técnico"
          descricao="Responsavel pela manutenção dos equipamentos da empresa, atendimento ao cliente e Redes."
        />

        <CardGrande
          imagem={FreeLancer}
          nome="Freelancer"
          descricao="Concertos variados em desktops e notebooks"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
        <CardPequeno imagem={Linkedin} email="Linkedin"/>
      </div>
    </div>
  );
}

export default App;
