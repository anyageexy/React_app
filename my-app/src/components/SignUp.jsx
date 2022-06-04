import { useDispatch } from "react-redux" //
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form"
import { setUser } from "store/slices/userSlice"

const SignUp = () => {
  
  const dispatch = useDispatch()

  const handleRegister = (email, password) => {
    const auth = getAuth();
    console.log(auth);
    createUserWithEmailAndPassword(auth,email, password)
    .then(console.log)
    .catch(console.error);
    
  } //Это будет функция при вызове которой я ожидаю
  //что у четные данные из формы отправятся на сервер и я получу нужного пльзователя

  return(
    <Form 
      title = "register"
      handleClick={handleRegister}
    />
  )
}

export {SignUp}