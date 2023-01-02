import css from './footer.module.css';
import FacebookIcon from './icons/facebook.svg';
import InstagramIcon from './icons/instagram.svg';
import MailIcon from './icons/mail.svg';
import WhatsAppIcon from './icons/whatsapp.svg';
import YouTubeIcon from './icons/youtube.svg';

const Footer = () => {
  return (
    <footer className={css.Footer}>
      <div>
        <a
          href='https://www.facebook.com/bhcircuito'
          title='Página do Facebook'
          rel='noreferrer noopener'
          target='_blank'
        >
          <FacebookIcon className={css.Icon} />
        </a>

        <a
          href='https://instagram.com/circuito_bh'
          title='Perfil no Instagram'
          rel='noreferrer noopener'
          target='_blank'
        >
          <InstagramIcon className={css.Icon} />
        </a>

        <a
          href='https://www.youtube.com/@circuitobh2586'
          title='Canal no Youtube'
          rel='noreferrer noopener'
          target='_blank'
        >
          <YouTubeIcon className={css.Icon} />
        </a>
      </div>

      <div className={css.Contacts}>
        <a href='mailto:louzadamaite@gmail.com'>louzadamaite@gmail.com</a>
        <MailIcon className={css.Icon} />

        <a href='https://api.whatsapp.com/send?phone=+5531987016193'>
          (31) 98701-6193
        </a>
        <WhatsAppIcon className={css.Icon} />
      </div>
    </footer>
  );
};

export default Footer;
