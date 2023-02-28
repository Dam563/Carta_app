import './store.css';
import { useNavigate } from 'react-router-dom';


function Store () {

  const navigate = useNavigate();

  const handleIsClicked = () => {
    navigate('/Congratulations')
  }
    return(
        <div className="store">
            <p className="store_text">Set Up Your Online Store</p>
          <p className="store_text_two">Connect with Customers in your area. Upload your logo, add your store details and start selling</p>
          <div className="upload"></div>
          <input type="text" placeholder="Description" id="description"/><br />
          <label className="currency">Select Currency</label><br />
          <select className="options">
            <option>Naira</option>
            <option>Dollar</option>
            <option>Pounds Sterling</option>
          </select> <br />
          <label className="currency">Contact Phone</label><br />
          <input placeholder="Phone Number" id="contact"type="number" /><br />
          <label className="country">Country</label> <br />
          <select className="options">
            <option>Nigeria</option>
            <option>USA</option>
            <option>UK</option>
          </select> <br />
          <button onClick={handleIsClicked} className="setup_btn">Complete Setup</button>
        </div>
    );
}

export default Store;