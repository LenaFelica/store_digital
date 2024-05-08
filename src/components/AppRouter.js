import React, { useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '..';


const AppRouter = () => {
//   const isAuth = false; - понадобится в нескольких - вынесем ее в глобальное хранилище
const {user} = useContext(Context)
console.log(user)

  return (
   <Routes>
      {user.isAuth && authRoutes.map(({path, element}) => 
         <Route key={path} path={path} element={element} exact /> 
      )}
      {publicRoutes.map(({path, element}) => 
         <Route key={path} path={path} element={element} exact />
      )}
      <Route path="*" element={<Navigate to={SHOP_ROUTE}/>} />
   </Routes>
  ) 
}

export default AppRouter;