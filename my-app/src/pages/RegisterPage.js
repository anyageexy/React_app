import { SignUp } from "components/SignUp";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return(
    //форма типа для авторизации
    <div>
      <h1>Страница регистрации</h1>
      <SignUp></SignUp>
      <Link to='/login'>Войдите в аккаунт</Link>
    </div>
    
  )
}

export {RegisterPage}