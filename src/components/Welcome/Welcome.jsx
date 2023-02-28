import { useNavigate } from 'react-router-dom';
import ellipse from '../../assets/ellipse.png';
import ellipses from '../../assets/ellipses.png';
import onboarding_one from '../../assets/onboarding_one.png';
import './welcome.css';

import React from 'react'

const Home = () => {

        const navigate = useNavigate();

return (
 <div className="App">
  <div className="onboarding_one">
     <div className="right_navigation">
  <img src={onboarding_one} alt="" className="img_2"/>
  <div className="left">
  <p className="onboarding_one_text">Set Up Your Online Store</p>
  <p  className="onboarding_one_text_two">Upload your products, create collections, share your website link and start receiving payments</p>
  <div className="onboarding_bottom">
     <div>
     <img src={ellipse} alt="" />
     <img src={ellipses} alt="" className="ellipse"/>
     <img src={ellipses} alt="" className="ellipse"/>
     </div>
     <button className="onboarding_btn" onClick={()=>{navigate('onboard', '_blank')}}>Next</button>
     {/* <button onClick={navigateToSecondPage} className="onboarding_btn" target='_blank'>Next</button> */}

     </div>
     </div>
     </div>
        </div>
  
    </div>
  );
}

export default Home;