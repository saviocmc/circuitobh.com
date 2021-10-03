import Link from 'next/link';
import { useRouter } from 'next/router';
import css from './navbar.module.css';

const Navbar = () => {

  const { pathname } = useRouter();

  const routes = [
    { path: '/', name: 'Página Inicial' },
  ];

  return (
    <nav className={css.Nav}>

      {routes.map(route => (

        <Link  href={route.path} key={route.path}>
          <a className={route.path === pathname ? css.ActiveLink : css.Link}>
            {route.name}
          </a>
        </Link>

      ))}

    </nav>
  );
};

export default Navbar;

