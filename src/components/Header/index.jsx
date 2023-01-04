import "./index.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logo">
        <img src="http://127.0.0.1:5173/SportSee.png" alt="SportSee" />
        <h1>SportSee</h1>
      </div>
      <nav>
        <a href="">Accueil</a>
        <a href="">Profil</a>
        <a href="">Réglage</a>
        <a href="">Communauté</a>
      </nav>
    </div>
  );
};

export default Header
