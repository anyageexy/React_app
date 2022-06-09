//страница на которую мы приходим от приватной страницы RequirePath

import { Login } from "components/Login";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return(
    //форма типа для авторизации
    <div className="login_page_form_container">
      <h1 className = 'login_page_head'>Страница авторизации</h1>
      <Login></Login>
      <Link to='/register'>Зарегистрируйтесь</Link>
    </div>
    
  )
}

export {LoginPage}