import '../App.css';
import '../css/Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1 className="title">Bolt Bucket 🏎️</h1>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/" role="button">
            Customize
          </Link>
        </li>
        <li>
          <Link to="/customcars" role="button">
            View Cars
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
