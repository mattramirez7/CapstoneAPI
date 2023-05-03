import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../style/NavBar.css'

function NavBar() {
  const [transparent, setTransparent] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setTransparent(true);
      } else {
        setTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={transparent ? 'transparent' : ''}>
      <ul className={transparent ? 'transparent' : ''}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Documentation">Documentation</Link>
        </li>
        <li>
          <Link to="/Demo">Demo</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

