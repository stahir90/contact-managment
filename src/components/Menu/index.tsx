import { FC } from "react";
import { Nav, Container, Image } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import { menu as MenuJson } from "./menu";

import "./style.scss";

const Menu: FC = () => {
  const location = useLocation();

  return (
    <Nav activeKey={location.pathname} className="sidebar">
      <Container fluid className="header">
        <Image src="/assets/logo.svg" />
      </Container>
      <Container fluid>
        {MenuJson.map((item) => (
          <Nav.Item key={item.name}>
            <Nav.Link as={Link} to={item.href} href={item.href}>
              <Image src={item.src} />
              {item.name}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Container>
    </Nav>
  );
};

export default Menu;
