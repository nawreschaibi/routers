import logo from './logo.svg';
import './App.css';

import Home from './Components/Home';
import Description from './Components/Description';
import Filter from './Components/Filter';
import Moviecard from './Components/Moviecard';
import Movielist from './Components/Movielist';
import {Route,Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <div className="nes">
      checkpoint router
      </div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/desc" element={<Description/>}/>

      </Routes>
        
    </div>
  );
}

export default App;
