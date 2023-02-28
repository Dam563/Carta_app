import { useNavigate} from 'react-router-dom';


import ellipse from '../../assets/ellipse.png';
import ellipses from '../../assets/ellipses.png';
import onboarding_two from '../../assets/onboarding_two.png';
import './onboarding_two.css';

function Onboarding_two () {

   const navigate = useNavigate();

   const handleClick = (event) => {
      navigate('/onboardt')
   };

    return(
      <div className="onboarding_two">
         <div className="right_navigation">
     <img src={onboarding_two} alt="" className="onboarding_two_img"/>
     <div className='left'>
     <p className="onboarding_two_text">Manage your business like a Pro!</p>
     <p  className="onboarding_two_text_two">Record your sales from social media or website or physical store . Send invoices and request payments.</p>
     <div className="onboarding_bottom">
        <div>
        <img src={ellipses} alt="" />
        <img src={ellipse} alt="" className="ellipse"/>
        <img src={ellipses} alt="" className="ellipse"/>
        </div>
        <button onClick={handleClick} className="onboarding_btn">Next</button>
     </div>
     </div>
      </div>
      </div>
       );
    }
    
    export default Onboarding_two;