import './congratulations.css';
import hurray from '../../assets/hurray.png'


function Congratulations () {
    return(
        <div className="congratulations">
            <div><img src={hurray} alt="" className="hurray"/></div>
           <p className="first-text">Congratulations on successfully completing your profile.</p>
           <p className="second-text">Now lets make you some money!</p>
           <div id="button">
           <button className="begin_btn">Lets Begin</button>
           </div> 
        </div>
    );
}

export default Congratulations;