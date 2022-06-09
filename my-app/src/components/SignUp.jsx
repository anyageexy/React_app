import { useDispatch } from "react-redux" //
import {useNavigate} from 'react-router-dom'     //чтобы сделать переход на главную страницу после регистрации
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form"
import { setUser } from "store/slices/userSlice"

const SignUp = () => {
  
  const dispatch = useDispatch();
  const push = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    console.log(auth);
    createUserWithEmailAndPassword(auth,email, password)
    .then(({user}) => {
      console.log(user);
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.accessToken,
      }));
      push('/');
    })
    .catch(console.error);
    
  } //Это будет функция при вызове которой я ожидаю
  //что у четные данные из формы отправятся на сервер и я получу нужного пльзователя

  return(
    <Form 
      title = "зарегистрироваться"
      handleClick={handleRegister}
    />
  )
}

export {SignUp}