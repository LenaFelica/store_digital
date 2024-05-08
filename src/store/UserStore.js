//* Это глобальное хранилище 
//* за него отвечает mobX
//* makeAutoObservable - подключается отслеживание изменения всех переменных
//* при их изменениях компоненты будут перерендериваться
//
import {makeAutoObservable} from 'mobx'

export default class UserStore {
   constructor() {
      this._isAuth = false
      this._user = {}
      makeAutoObservable(this)
   }
// actions - функции, созданы для изменения состояния
   setIsAuth(bool) {
      this._isAuth = bool
   }

   setUser (user) {
      this._user = user
   }
//* геттеры - чтобы получать какие-то переменные из нашего состояния
//* это так называемые computed function - 
//* вызываются только, если переменная, которая используется внутри, была изменена!!!
// 
get isAuth() {
      return this._isAuth
   }
   get user() {
      return this._user 
   }
}