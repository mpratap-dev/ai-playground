import './Header.css';
import DownArrow from '../../assets/svg/down-arrow.svg';
import userImage from '../../assets/img/man.png';

const Header = () => (
  <header>
    <span className="logo">AI Playground</span>

    <ul className="menu">
      <li className="menu__items">
        <a className="menu__links" href="https://ai.google/education/">Learn AI</a>
      </li>
      <li className="menu__items">
        <a className="menu__links" href="https://blog.google/technology/ai/">Docs</a>
      </li>
      <li className="menu__items">
        <a className="menu__links" href="/">
          <img 
            height="25"
            width="25"
            src={userImage}
            className="user-img"
            alt="user-img"
          />
          Account
          <img src={DownArrow} alt="options" height="10" width="10" className="ml-2"/>
        </a>
      </li>
    </ul>
  </header>
);

export default Header;