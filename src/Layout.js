import { Link, Outlet } from "react-router-dom";
import logoPremier from './assets/premierLogo.png';
import Footer from "./components/Footer";

export function Layout() {
  return (
    <>
      <main>
        <nav>
          <div className='HeaderPage'>
            <h1 className='TitlePage'>Premier</h1><img src={logoPremier} className='LogoPremier'/><h1 className='TitlePage'>League</h1>
            <div className='PageMenu'>
              <Link to="/" className='LayoutsLink'>Equipos</Link>
              <Link to="/positions" className='LayoutsLink'>Posiciones</Link>
              <Link to="/matches" className='LayoutsLink'>Resultados</Link>
            </div>
          </div>
        </nav>
        <section>
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
}
