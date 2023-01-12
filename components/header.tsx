import css from './header.module.css';

export default function Header() {
  return (
    <header className={css.Header}>
      <img src='/logo.png' alt='Logo da Circuito BH' className={css.Logo} />
    </header>
  );
}
