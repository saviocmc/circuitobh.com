import Image from 'next/image';
import css from './header.module.css';

const Header = () => {
  return (
    <header className={css.Header}>
      <Image src='/logo.png' alt='Logo da Circuito BH' width={570} height={200} />
    </header>
  );
};

export default Header;
