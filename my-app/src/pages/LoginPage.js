//страница на которую мы приходим от приватной страницы RequirePath

import { Link } from "react-router-dom";

const LoginPage = () => {
  return(
    //форма типа для авторизации
    <div>
      <h1>Страница авторизации</h1>
      
      <Link to='/register'>Зарегистрируйтесь</Link>
    </div>
    
  )
}

export {LoginPage}