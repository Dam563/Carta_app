// import vector from './assets/vector.png';
import { useNavigate} from 'react-router-dom';

// import mail from '../../assets/mail.png';
// import message from '../../assets/message.png';
// import user from '../../assets/user.png';
// import password from '../../assets/password.png';
import './signup.css';

function Signup () {

    const navigate = useNavigate();

   const navigateToPage = (event) => {
      navigate('/congrat')
   };

   const navigateToSign = (event) => {
      navigate('/signin')
   };
    return(
        <div className="signup">
            <p className="signup_text">Lets get you started!</p>
           <div className="input_field">
           <label for="name" id="label">Business Name</label> <br/> 
           <input type="text" required autoComplete="none" id="input"/> <br />
           {/* <img src={mail} alt="" className="input_img"/><br/> */}
           <label for="name" id="label">Full  Name</label><br/>
           <input type="text" required autoComplete="none"  id="input"/><br />
           {/* <img src={user} alt="" className="input_img"/><br/> */}
           <label for="name" id="label">Email Address</label><br/>
           <input type="email" required autoComplete="none"  id="input"/><br />
           {/* <img src={message} alt="" className="input_img"/><br/> */}
           <label for="name" id="label">Password</label><br/>
           <input type="password" required autoComplete="none"  id="input"/><br />
           {/* <img src={password} alt="" className="input_img"/><br/> */}

           <label for="name" id="label">Region</label>
           <select><input type="text" required autoComplete="none"  id="input"/>
           <option>Lagos</option>
           <option>Kaduna</option>
           <option>PortHarcourt</option>
           <option>Lagos</option>
           </select><br/>
            <div className="check">
           <input type="checkbox" required />
           <p className="check_text">I agree to the terms of service and privacy policy</p>
           </div>
           </div>
           <button onClick={navigateToPage} className="signup_btn">Sign Up</button>
           <div className="signin_div">
           <p className="p_signin_div"> Already have an account?</p>
           <button onClick={navigateToSign} className="signin_btn">Sign In</button>
           </div>
        </div>
    );
}

export default Signup;