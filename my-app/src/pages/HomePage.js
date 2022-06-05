import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import {useNavigate} from 'react-router-dom'
import {useAuth} from 'hooks/use-auth'
import { removeUser } from "store/slices/userSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();
  return isAuth ? (
    <div>
      <h1>Добро пожаловать</h1>
      <button onClick = {() => dispatch(removeUser())}>Выйти из аккаунта {email}</button>
    </div>
  ) : 
  (
      <Link to= '/login'>Войдите в систему</Link>
  )
}

export {HomePage}