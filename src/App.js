import { Routes,Route } from 'react-router-dom';

import Login from  './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './App.css';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
    </div>
  );
}

export default App;
