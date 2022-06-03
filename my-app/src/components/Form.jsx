import {useState} from 'react'

const Form = ({title, handleClick}) => {
  //переменные состояния
  const [email, setEmail] = useState('')//Отвечает за емайл
  const [pass, setPass] = useState('')//Отвечает за емайл
  return(
      <div>
        <input 
          type="email" 
          value = {email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input 
          type="password" 
          value ={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="пароль"
        />
        <button onClick = {handleClick}>
          {title}
        </button>
      </div>
  )
}

export {Form}