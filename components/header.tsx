import css from './header.module.css';

const Header = () => {
  return (
    <header className={css.Header}>

      <img src='/logo.png' alt='Logo da Circuito BH' />

    </header>
  );
};

export default Header;
