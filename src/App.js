import logo from './image2.svg';
import hello from "./image1.svg"
import gay from "./gay.svg"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <img src={logo}/>
      <h1>
        Viana Kitty
      </h1>
      </header>
      <div className='hellokitty'>
        <div>
          <img className="kitty" src={hello}/>
          <img className="gay" src={gay}/>

        </div>
      </div>
    </div>
  );
}

export default App;
