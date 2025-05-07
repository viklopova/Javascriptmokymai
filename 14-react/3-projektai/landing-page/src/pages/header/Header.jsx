import './Header.scss';

const Header = ({ title, subtitle, button }) => {
  return (
    <header className="header-section">
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
        <p className="header-subtitle">{subtitle}</p>
        <button className="header-btn">{button}</button>
      </div>
    </header>
  );
};

export default Header;