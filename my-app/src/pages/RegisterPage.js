import { SignUp } from "components/SignUp";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return(
    //форма типа для авторизации
    <div className="register_page_form_container">
      <h1 className = 'register_page_head'>Страница регистрации</h1>
      <SignUp></SignUp>
      <div className="register_page_login_link_container"><Link to='/login'>Войдите в аккаунт</Link></div>
    </div>
    
  )
}

export {RegisterPage}