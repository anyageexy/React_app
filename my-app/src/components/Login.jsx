import { useDispatch } from "react-redux" //
import {useNavigate} from 'react-router-dom'    
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form"
import { setUser } from "store/slices/userSlice"

const Login = () => {
  
  const dispatch = useDispatch()
  const push = useNavigate();
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      console.log(user);
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.accessToken,
      }));
      push('/');
    })
    .catch(() => alert('Такого аккаунта не существует'));
    
  } //Это будет функция при вызове которой я ожидаю
  //что у четные данные из формы отправятся на сервер и я получу нужного пльзователя

  return(
    <Form 
      title = "войти"
      handleClick={handleLogin}
    />
  )
}

export {Login}