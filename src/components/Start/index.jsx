import './style.css';
import StartImage from '../../assets/imageStartPage.svg';
import LogoWhite from '../../assets/nuKenzieWhite.png';

const Start = ({ setIsLoggedIn }) => {
  function handleLogin() {
    setIsLoggedIn(true);
  }
  return (
    <div className="start">
      <div className="start__container">
        <div className="start__info">
          <img src={LogoWhite} alt="" />
          <p>Centralize o controle das suas finanças</p>
          <small>de forma rápida e segura</small>
          <button
            className="start__iniciar"
            onClick={(event) => handleLogin(event.preventDefault)}
          >
            Iniciar
          </button>
        </div>
        <figure className="start__figure">
          <img src={StartImage} alt="figura" />
        </figure>
      </div>
    </div>
  );
};

export default Start;
