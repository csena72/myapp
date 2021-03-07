import { CartWidget } from "./CartWidget";

function NavBar() {
  let styles = {
    backgroundColor: '#e3f2fd'
  }
    return (
        <>
       <nav className="navbar navbar-expand-lg navbar-light" style={styles}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="/logo.png" alt="TiendaNet" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorías
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="/">Tecnología</a></li>
                    <li><a className="dropdown-item" href="/">Hogar Y Muebles</a></li>
                    <li><a className="dropdown-item" href="/">Electrodomésticos</a></li>
                    <li><a className="dropdown-item" href="/">Herramientas y Construcción</a></li>
                    <li><a className="dropdown-item" href="/">Juguetes Y Bebés</a></li>
                    <li><a className="dropdown-item" href="/">Deportes y Fitness</a></li>
                    <li><a className="dropdown-item" href="/">Moda</a></li>
                    <li><a className="dropdown-item" href="/">Belleza y salud</a></li>
                    <li><a className="dropdown-item" href="/">Industrias y Oficinas</a></li>
                    <li><a className="dropdown-item" href="/">Servicios</a></li>                                        
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Ofertas</a>
                </li>                
                <li className="nav-item">
                  <a className="nav-link" href="/">Ayuda</a>
                </li>
                <li>
                  <CartWidget />
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
  
  export default NavBar;