 import { useLocation, Navigate } from "react-router-dom";

 const RequareAuth = () => {
   const location = useLocation();//получаем сам объект локации
   const auth = false;//тут будет информаия о авторизации

   //проверка - есть ли вообще авторизаия
   if (!auth){
     //делаем переадресацию и уточняем откуда мы пришли
     return <Navigate to = '/login' state = {{from: location}} />
   }
   return(
     <div>

     </div>
   )
 }

 export {RequareAuth};