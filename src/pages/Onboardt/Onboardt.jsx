import { useNavigate} from 'react-router-dom';
import onboarding_three from '../../assets/onboarding_three.png';
import './onboarding_three.css';

function Onboardt () {

   const navigate = useNavigate();

   const handleClicked = (event) => {
      navigate('/signup')
   };

    return(
      <div className="onboarding_three">
         <div className="right_navigation">
     <img src={onboarding_three} alt="" className="onboarding_three_img"/>
     <div className='left'>
     <p className="onboarding_three_text">Engage with customers seamlessly </p>
     <p  className="onboarding_three_text_two">Send emails to your customers and also  automatic messages on social media platforms.</p>
     <div className="onboarding_bottom">
        <button onClick={handleClicked} className="onboarding_three_btn">Get Started</button>
     </div>
     </div>
     </div>
      </div>
       );
    }
    
    export default Onboardt;