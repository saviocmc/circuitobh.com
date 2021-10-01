import { Head, Html, Main, NextScript } from 'next/document';

const description = '\
A Circuito BH surgiu com a proposta de assessorar músicos e bandas \
de Belo Horizonte, promovendo shows e contribuindo para a inserção \
desses artistas no cenário musical da capital mineira.\
';
const Document = () => {
  return (
    <Html lang='pt-BR'>
      <Head>
        <link rel='icon' type='image/png' href='/icon.png' />
        <meta name='description' content={description} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

