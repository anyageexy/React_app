import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import {useNavigate} from 'react-router-dom'
import {useAuth} from 'hooks/use-auth'
import { removeUser } from "store/slices/userSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();
  return isAuth ? (
    <div className="home_page_main_container">
      <div className="home_page_head_container">
        <h1>Добро пожаловать</h1>
        <button className="btn_grey" onClick = {() => dispatch(removeUser())}>Выйти из аккаунта {email}</button>
      </div>

    </div>
  ) : 
  (
    <div className='home_page_link_container'>
      <Link to= '/login' className='home_page_link'>Войдите в систему</Link>
    </div>
      
  )
}

export {HomePage}