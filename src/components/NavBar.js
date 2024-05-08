import React, { useContext } from "react";
import { Context } from "..";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";

//* observer - чтобы mobx отслеживал и тчобы панель перерендеривалась в реальном времени
//* container - чтобы отцентровать и все находилось на одном уровне


const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            to={SHOP_ROUTE}
          >
            Купи девайс
          </NavLink>
          {user.isAuth ? (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button variant={"outline-light"}>
                  Админ панель
               </Button>
              <Button variant={"outline-light"} style={{ marginLeft: "4px" }}>
                 Выйти
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>
                  Авторизация
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
});

export default NavBar;
