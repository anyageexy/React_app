import { useDispatch } from "react-redux" //
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form"
import { setUser } from "store/slices/userSlice"

const Login = () => {
  
  const dispatch = useDispatch()

  const hadleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email, password);
    
  } //Это будет функция при вызове которой я ожидаю
  //что у четные данные из формы отправятся на сервер и я получу нужного пльзователя

  return(
    <div>

    </div>
  )
}

export {Login}