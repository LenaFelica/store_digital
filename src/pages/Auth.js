import React from 'react'
import {Button, Container, Form} from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

import { observer } from 'mobx-react-lite';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';


//* делаем контейнер, задаем классы
//* чтобы все отцентровалось
//* теперь внутри делаем форму!!!
//* useLocation - получить маршрут в строкек запроса - отрисовывать либо старницу авторизации , либо страницу регистрации

const Auth = observer(() => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
   <Container 
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
   >
     <Card style={{width: 600}} className='p-5'>
     <h2 className='m-auto'>{isLogin ? "Авторизация" : "Регистрация"}</h2>
      <Form className="d-flex flex-column" >
         <Form.Control
            className="mt-3"
            placeholder="Введите email..."
         />
          <Form.Control
            className="mt-3"
            placeholder="Введите password..."
         />
         <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
         {isLogin ? 
          <div className='mb-3'>
               Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зрегистрируйтесь!</NavLink>
          </div>  
          :
          <div className='mb-3'>
               Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Авторизируйтесь!</NavLink>
          </div>  
         } 
         <Button 
            variant={"outline-success"}
            // className='align-self-start'
         >
            {isLogin ? "Войти" : "Регистрация"}
         </Button>
         </Row>
      </Form>
    </Card> 
   </Container>
  )
}
)

export default Auth;