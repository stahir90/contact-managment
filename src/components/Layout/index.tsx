import { FC, useState } from "react";
import { Container, Col, Image } from "react-bootstrap";
import Menu from "../Menu";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Navbar";

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const Layout: FC<LayoutProps> = ({ title, children }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <Container fluid className="layout">
      <Col
        id="sidebar-wrapper"
        className={toggle ? "sidebar-open" : "sidebar-close"}
      >
        <Menu />
      </Col>

      <Col
        id="page-content-wrapper"
        className={toggle ? "sidebar-open" : "sidebar-close"}
      >
        <NavBar handleOnClick={() => setToggle(!toggle)}>{title}</NavBar>
        {children}
      </Col>
    </Container>
  );
};
export default Layout;
