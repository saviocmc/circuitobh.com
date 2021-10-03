import css from './footer.module.css';

const Footer = () => {
  return (
    <footer className={css.Footer}>

      <div className={css.SocialMedia}>

        <a href='https://www.facebook.com/bhcircuito'
          rel='noreferrer noopener' target='_blank'>
          <img src='/facebook.svg' alt='Logo do Facebook' />
        </a>

        <a href='https://instagram.com/circuito_bh/'
          rel='noreferrer noopener' target='_blank'>
          <img src='/instagram.svg' alt='Logo do Instagram' />
        </a>

        <a href='https://www.youtube.com/channel/UCP2AO8BXKQacuiFFn_Gq_kA'
          rel='noreferrer noopener' target='_blank'>
          <img src='/youtube.svg' alt='Logo do YouTube' />
        </a>

      </div>

      <div className={css.Contacts}>

        <a href='mailto:louzadamaite@gmail.com'>louzadamaite@gmail.com</a>
        <img src='/mail.svg' alt='Ícone de e-mail' />

        <a href='tel:+5531987016193'>(31) 98701-6193</a>
        <img src='/phone.svg' alt='Ícone de telefone' />

      </div>

    </footer>
  );
};

export default Footer;
