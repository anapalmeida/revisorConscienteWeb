import { Link } from 'react-router-dom';
import logoIcon from '../../assets/images/logo-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './style.css';

function PageHeader() {
  const bars = <FontAwesomeIcon icon={faBars} />;

  return (
    <header className="page-header">
      <nav className="navBarContainer navbar navbar-expand-lg navbar-light ">
        <Link>
          <img src={logoIcon} alt="Dummy" />
        </Link>

        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>{bars}</span>
        </button> */}
        <div>
          <ul>
            <li>
              <Link>Nosso Manifesto</Link>
            </li>
            <li>
              <Link>Dicionário Consciente</Link>
            </li>

            <li>
              <Link to="#">Sugestões</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default PageHeader;
