import {Redirect} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const HomePage = () => {
  let navigate = useNavigate( );
  return(
    <div>
Home page
    </div>
  )
}

export {HomePage}