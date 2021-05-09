import { Link } from 'react-router-dom';
import SHeader from './styled/SHeader';

export default function Header() {
  return (
    <SHeader>
      <nav>
        <ul className='nav-links'>
          <li>
            <Link to='/'>Home Page</Link>
          </li>
          <li>
            <Link to='/first'>First Page</Link>
          </li>
          <li>
            <Link to='/second'>Second Page</Link>
          </li>
          <li>
            <Link to='/toto-le-rigolo'>Third Page</Link>
          </li>
        </ul>
      </nav>
    </SHeader>
  );
}
