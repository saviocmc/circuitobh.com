import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '../components/navbar';
import css from './artistas.module.css';

const Artists: NextPage = () => {
  return (
    <>

      <Head>
        <title> Artistas - Circuito BH </title>
      </Head>

      <Header />

      <Navbar />

      <main className={css.Artists}>

        {artists.map(artist => (

          <div className={css.Artist} key={artist.name}>

            <a href={`https://www.youtube.com/watch?v=${artist.video.id}`}
              title={artist.video.title} rel='noreferrer noopener' target='_blank'>

              <div className={css.ArtistPoster}
                style={{
                  backgroundImage: `url(https://i.ytimg.com/vi/${artist.video.id}/hqdefault.jpg)`
                }}>

              </div>

            </a>

            <div className={css.ArtistDescription}>
              <h2> {artist.name} </h2>
              <p> {artist.description} </p>
            </div>

          </div>

        ))}

      </main>

      <Footer />

    </>
  );
};

export default Artists;

type Artist = {
  name: string;
  description: string;
  video: {
    title: string;
    id: string;
  }
}

const artists: Artist[] = [
  {
    name: 'Ablusadas',
    description: `
      Primeira big band mineira de blues e jazz formada
      exclusivamente por mulheres, a Ablusadas faz uma conexão
      entre o tradicional e o novo, levando para os palcos o
      melhor do blues e jazz em português. Contando suas próprias
      histórias, as integrantes proporcionam ao público uma
      incrível viagem musical, que é, ao mesmo tempo, intensa, bem
      humorada e carregada de personalidade. Além de reforçarem a
      importância do protagonismo feminino, incentivam cada vez
      mais a presença das mulheres no cenário musical.
    `,
    video: {
      title: 'ABLUSADAS - SHOUL I EVER LOVE AGAIN',
      id: 'kqMROjZXLDo',
    },
  },
  {
    name: 'Big Ranch',
    description: `
      Qual o resultado da união entre um publicitário, um
      visagista e um educador físico? Um Dark Country pra lá de
      animado!
      Com Dave Brisco no vocal e guitarra, Pedro Crepalde no baixo
      e Kenyo Hoffman na bateria, o power trio de “caipiras” chama
      a atenção pela versatilidade em cima dos palcos e interação
      com o público, enquanto embalam um rock n’ roll nas noites
      da big ranch BH.
    `,
    video: {
      title: 'BIG RANCH - BIG RANCH',
      id: '4WvkYNUT9FY',
    },
  },
  {
    name: 'Doctor Ray Blues Band',
    description: `
      Com dois discos já gravados, a Doctor Ray Blues Band aposta
      em músicas autorais e explora temas urbanos em suas letras.
      O resultado é um blues alegre, enérgico e popular, inspirado
      em personagens simples e situações engraçadas e pitorescas.
      Composta pelo bluesman Ramon (Doctor Ray) no vocal e gaita,
      Fernando Marcatti na guitarra, Glauco de Deus na bateria e
      Felipe Jamaica no baixo, a banda leva para seus shows os
      clássicos do Chicago Blues e composições próprias dentro do
      mesmo estilo.
    `,
    video: {
      title: 'DOCTOR RAY BLUES BAND - MEN WHO LOVE TOO MUCH',
      id: 'nXhlwT19W_U',
    },
  },
  {
    name: 'Egberto Brant',
    description: `
      Acompanhado por cinco instrumentistas, Egberto Brant estreou
      seu projeto autoral em 2019.
      Formado em Música Popular pela Universidade Federal de Minas
      Gerais, e já tendo feito uma turnê pela Europa, o músico
      está em seu segundo single atualmente.
      Sob influência de artistas como Luiz Melodia, Arthur Maia e
      Ivan Lins, a banda entrega ao público uma mistura deliciosa
      de Pop Music e MPB.
    `,
    video: {
      title: 'EGBERTO BRANT - TIM TIM',
      id: 'dR-rNvsZog0',
    },
  },
];

