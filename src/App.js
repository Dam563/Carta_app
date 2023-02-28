import {Routes, Route} from 'react-router-dom';
import Onboardt from './pages/Onboardt/Onboardt';
import './App.css';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Congrat from './pages/Congrat/Congrat';
import Onboard from './pages/Onboard/Onboard';
import Congratulations from './pages/Congratulations/Congratulations';
import Store from './pages/Store/Store';
import Home from './pages/Home/Home';
import Welcome from './components/Welcome/Welcome';
// import {Welcome} from "./components/Welcome";




function App() {
return(
   
<div className='app'>

{/* <Welcome /> */}

        <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/Home' element={<Home />} />
          <Route path='/Onboard' element={<Onboard />} />
          <Route path='/Onboardt' element={<Onboardt />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Congrat' element={<Congrat />} />
          <Route path='/Store' element={<Store />} />
          <Route path='/Congratulations' element={<Congratulations />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
          
        
        </div>
);
}

export default App;
