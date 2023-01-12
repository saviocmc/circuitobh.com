import Link from 'next/link';
import { useRouter } from 'next/router';
import css from './navbar.module.css';

export default function Navbar() {
  const { pathname } = useRouter();

  const routes = [
    { path: '/', name: 'Página Inicial' },
    { path: '/artistas', name: 'Artistas' },
  ];

  return (
    <nav className={css.Nav}>
      {routes.map((route) => (
        <Link
          href={route.path}
          key={route.path}
          className={route.path === pathname ? css.ActiveLink : css.Link}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
}
