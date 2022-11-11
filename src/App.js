import burger from './Images/Burger.svg'
import logo from './Images/Logo.svg'
import heart from './Images/heart.svg'
import message from './Images/message.svg'
import './App.css';
import HeroSection from './Components/HeroSection';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img className="img" src={burger} alt=""></img>
        <img  className="img2" src= {logo} alt=""></img>
        <div className="input">
        <span class="material-symbols-outlined">
            search
       </span>
       <input></input>
          
        </div>
        <div className="dash">
            <span class="material-symbols-outlined">
             account_circle
           </span>
           <p>Accounts</p>
        </div>

        <div className="dash dash2">
        <img className="img" src={message} alt=""></img>
           <p>Chat</p>
        </div>

        <div className="dash dash2">
        <img className="img" src={heart} alt=""></img>
           <p>My Interest</p>
        </div>
      </nav>

      <HeroSection />
    </div>
  );
}

export default App;
