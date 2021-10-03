import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '../components/navbar';
import css from './index.module.css';

const Home: NextPage = () => {
  return (
    <>

      <Head>
        <title> Circuito BH </title>
      </Head>

      <Header />

      <Navbar />

      <section className={css.About}>
        <h1>Quem <span className={css.AccentColor}>somos</span></h1>
        <p>
          A Circuito BH surgiu com a proposta de assessorar músicos e bandas
          de Belo Horizonte, promovendo shows e contribuindo para a inserção
          desses artistas no cenário musical da capital mineira. Nossa
          pretensão é construir uma ponte entre o músico, seus contratantes e
          seu público.
        </p>
      </section>

      <section className={css.Services}>

        <h1>O que <span className={css.AccentColor}>fazemos</span></h1>

        <div className={css.ServicesGrid}>

          <img src='/videocam.svg' alt='Ícone de uma filmadora' />
          <h2>Produção de videoclipes</h2>
          <p>
            Trabalhamos com a produção de um portfólio audiovisual para
            músicos. O videoclipe é uma poderosa ferramenta de
            comunicação para um artista, que por meio dele consegue
            fortalecer o vínculo com seus fãs e ainda divulgar seu
            trabalho de forma criativa.
          </p>

          <img src='/compass.svg' alt='Ícone de uma bussola' />
          <h2>Assessoria</h2>
          <p>
            A figura do agente ou do produtor executivo é fundamental
            para a carreira de um músico. É ele quem
            gerencia suas atividades e se relaciona com possíveis
            contratantes. A Circuito BH propõe desempenhar essas
            funções, além de pensar no planejamento e estratégias de
            comunicação e cuidar do relacionamento com a mídia.
          </p>

          <img src='/camera.svg' alt='Ícone de uma câmera' />
          <h2>Fotografia</h2>
          <p>
            A sua imagem deve comunicar a essência do seu trabalho. E
            pensando nisso, a Circuito BH realiza ensaios fotográficos
            com todos os artistas de seu catálogo. As fotos podem ser
            usadas para as mais diversas finalidades: imagens de
            divulgação de apresentações e músicas; perfis de redes
            sociais; e até mesmo capas de discos e singles.
          </p>

        </div>

      </section>

      <Footer />

    </>
  );
};

export default Home;
