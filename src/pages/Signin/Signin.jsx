import './signin.css';
import { useNavigate} from 'react-router-dom';

function Signin () {

  const navigate = useNavigate();

   const handledClicked = (event) => {
      navigate('/signup')
   };

    return(
        <div className="login">
          <p className="login_text">Welcome Back!</p>
          <p className="log_in">Log In</p>
          <label for="email" className="e-address">Email address</label>
          <input type="email" required id="email"/> <br />
          <label for="email" className="pass">Password</label> <br />
          <input type="password" required id="password"/>
          <button className="login_btn">Log In</button>
          <div className="login_footer">
            <p className="new">New?</p>
            <button onClick={handledClicked} className="sign_button">Sign up</button>
          </div>
           </div>
    );
}

export default Signin;