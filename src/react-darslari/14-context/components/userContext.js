import React, {createContext} from 'react';
//Context obyektini yaratamiz
//boshlangizch qiymat beramiz

const UserContext=React.createContext("foydalanuvchi")  //yoki UserContext = createContext("foydalanuvchi")

export const UserProvider=UserContext.Provider;    //tashqarida foydalanish 

//Kontekst obyekti ma'lumotni taqdim etishi uchun Providerni ishlatamiz

export const UserConsumer=UserContext.Consumer;  //tashqarida foydalanish 
//Consumer esa ma'lumotni qabul qiladi(istemol)