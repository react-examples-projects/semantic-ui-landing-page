import { Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Container as="nav" className="navbar">
      <Link to="#">Logo</Link>
      <div className="navbar-sub">
        <Link to="#">Nosotros</Link>
        <Link to="#">Afiliados</Link>
        <Link to="#">Proyectos</Link>
        <Link to="#">Software</Link>
        <Link to="#">Contacto</Link>
      </div>

      <Button content="Contratar" color="violet" as={Link} size="tiny" />
    </Container>
  );
}
  