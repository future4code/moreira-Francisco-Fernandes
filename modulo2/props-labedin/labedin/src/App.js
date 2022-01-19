import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import logoEu from './labedin-imagens/eu.jpg';
import logoBalconista from './labedin-imagens/balconista.jpg';
import logoEducacao from './labedin-imagens/mais-educacao.png';
import logoProfessor from './labedin-imagens/professor.jpg';
import logoSocio from './labedin-imagens/socio.png';
import logoEmail from './labedin-imagens/logoEmail.png'
import logoLocalizacao from './labedin-imagens/iconeLocalizacao.png';
import logoManutecao from './labedin-imagens/manutecaoDeComputador.jpg';
import logoContabilidade from './labedin-imagens/contabilidade.png';
import logoMatematica from './labedin-imagens/matematica.png';
import logoDev from './labedin-imagens/devWeb.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ logoEu}
          nome="Cleiton" 
          descricao="Olá, eu sou o Francisco Cleiton Fernandes,
          tenho 25 anos e atualmente sou estudante de Desenvolvimento Web Full Stack.
          Além disso, sou técnico em contabilidade, fiz licenciatura em matemática (incompleto),
          também fiz o curso de montagem e manutenção de computadores, notebook e redes.
          Estou entrando para o mundo da programação, é um novo desafio profissional que escolhi pra mim,
          embora nunca tenha entrado em contato com esse mundo antes,
          sempre gostei bastante de tecnologia e de saber como as coisas realmente funcionavam."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className='endereco'>
        <div className='email'>
           <CardPequeno
              imagem={ logoEmail }
              nome="E-mail:" 
              descricao="cleytondev@gmail.com" 
           />
        </div>
        <div>
           <CardPequeno 
              imagem={ logoLocalizacao }
              nome="Endereço:" 
              descricao="Cidade:Teresina-Pi Rua, 27 de maio N° 1996 Bairro: Centro"
           />
        </div>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ logoBalconista }
          nome="Varejão" 
          descricao="Balconista: responsável por realiza o primeiro atendimento ao clientes pessoalmente!" 
        />

        <CardGrande 
          imagem={ logoEducacao }
          nome="Semed-Altos" 
          descricao="Colaborador do mais educação: contribuindo para a, alfabetização, 
          ampliação do letramento e melhoria do desempenho em língua portuguesa e matemática das crianças e dos adolescentes!" 
        />

<       CardGrande 
          imagem={ logoProfessor }
          nome="Semed-Altos" 
          descricao="Professor contratado: Responsável por ensinar, escutar, orientar, motivar, desafiar, 
          descobrir potencialidades e desenvolver as habilidades de cada pessoa com quem compartilha seus ensinamentos!" 
        />
        
        <CardGrande 
          imagem={ logoSocio } 
          nome="Sócio" 
          descricao="Delícias Caseiras: me envolvo diretamente na gestão do negócio, com o poder de tomar decisões!" 
        />
      </div>

      <div className="page-section-container" id='verMais'>
        <h2>lista de instituições de ensino onde estudei</h2>
        <CardGrande 
          imagem={ logoManutecao }
          nome="Microlins:" 
          descricao="Montagem e Manutenção de Computadores, Notebook e Redes" 
        />

        <CardGrande 
          imagem={ logoContabilidade }
          nome="IFPI:" 
          descricao="Técnico em Contabilidade" 
        />

<       CardGrande 
          imagem={ logoMatematica }
          nome="IFPI:" 
          descricao="Licencuatura em Matemática" 
        />
        
        <CardGrande 
          imagem={ logoDev } 
          nome="Labenu:" 
          descricao="Desenvolvedor Web Full Stack" 
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
      </div>
    </div>
  );
}

export default App;
