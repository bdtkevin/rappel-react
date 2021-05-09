import { Link } from 'react-router-dom';
import SHeader from './styled/SHeader';

export default function Header() {
  return (
    <SHeader>
      <nav>
        <ul className='nav-links'>
          <li>
            {/* Lorsque l'on clique sur le lien, change l'url dans le navigateur par : "/" (chemin définit dans le props "to") */}
            <Link to='/'>Home Page</Link>
          </li>
          <li>
            {/* Lorsque l'on clique sur le lien, change l'url dans le navigateur par : "/first" (chemin définit dans le props "to") */}

            <Link to='/first'>First Page</Link>
          </li>
          <li>
            {/* Lorsque l'on clique sur le lien, change l'url dans le navigateur par : "/second" (chemin définit dans le props "to") */}

            <Link to='/second'>Second Page</Link>
          </li>
          <li>
            {/* Lorsque l'on clique sur le lien, change l'url dans le navigateur par : "toto-le-rigolo" (chemin définit dans le props "to") */}

            <Link to='/toto-le-rigolo'>Third Page</Link>
          </li>
        </ul>
      </nav>
    </SHeader>
  );
}
