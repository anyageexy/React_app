import { useSelector } from "react-redux";

export function useAuth(){
  const {email, token, id} = useSelector(state => state.user);//Обращаемся к useselectorу
  //вот тебе стэйт, достань оттуда юзера

  //возвр объект
  return{
    isAuth: !!email,//Превращаем в булевое значение
    email,
    token,
    id,
  };
}