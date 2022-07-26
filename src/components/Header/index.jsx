import './style.css';
import LogoBlack from '../../assets/nuKenzieBlack.png';

const Header = ({ setIsLoggedIn }) => {
  return (
    <header className="header">
      <figure className="header__logo">
        <img src={LogoBlack} alt="nukenzie" />
      </figure>
      <button onClick={() => setIsLoggedIn(false)} className="header__inicio">
        Início
      </button>
    </header>
  );
};

export default Header;
