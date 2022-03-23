import { FC } from "react";
import { Container, Navbar as Bar, Image } from "react-bootstrap";
import "./style.scss";

type NavBarProps = {
  handleOnClick: React.MouseEventHandler<HTMLImageElement>;
};

const NavBar: FC<NavBarProps> = ({ children, handleOnClick }) => (
  <Bar className="navbar">
    <Container className="menu-container" fluid>
      <Bar.Brand>
        <Image
          className="menu-image"
          src="/assets/menu.svg"
          onClick={handleOnClick}
        />
        {children}
      </Bar.Brand>
    </Container>
  </Bar>
);

export default NavBar;
