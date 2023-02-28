import './congrat.css';
import { useNavigate } from 'react-router-dom';
import hurray from '../../assets/hurray.png'

function Congrat () {

    const navigate = useNavigate();

    const navigateToStore = () => {
        navigate('/store')
    }
    const navigateToSign = () => {
        navigate('/signin')
    }
    return(
        <div className="congrat">
             <div><img src={hurray} alt="" className="hurray"/></div>
           <p className="first-text">Congratulations on successfully setting up your new account with Carta!</p>
           <p className="second-text">Now lets set up your store and upload your first product</p>
           <div id="button">
           <button onClick={navigateToStore} className="congrat_btn">Set up my store</button>
           <button onClick={navigateToSign} className="later">Maybe later</button>
           </div>
        </div>
    );
}

export default Congrat;