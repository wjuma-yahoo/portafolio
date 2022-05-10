export const Header = () => {
  return (
    <header className="header">
      <div className="toolbar">
        <div className="header__menu-btn">
          <span className="header__menu-btn-burger"></span>
        </div>
        <nav className="navbar">
          <ul className="navbar__nav">
            <li className="navbar__nav-item">
              <a href="/" className="navbar__nav-link">
                Inicio
              </a>
            </li>
            <li className="navbar__nav-item">
              <a href="/about" className="navbar__nav-link">
                Acerca de mi
              </a>
            </li>
            <li className="navbar__nav-item">
              <a href="/projects" className="navbar__nav-link">
                Mis Proyectos
              </a>
            </li>
            <li className="navbar__nav-item">
              <a href="/contact" className="navbar__nav-link">
                Contactame
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
