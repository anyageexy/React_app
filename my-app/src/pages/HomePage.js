import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

const HomePage = () => {
  return(
    <div>
      <h1>Home page</h1>
      <Link to= '/login'>Войдите в систему</Link>
    </div>
    
  )
}

export {HomePage}