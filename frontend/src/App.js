import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Login from './Components/Login'
import Homepage from './Components/Homepage';
import Card from './Components/Cards';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidenav from './Components/Sidenav';
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Users from './Pages/Users';
import Analytics from './Pages/Analytics';

function App() {
  return (
      <BrowserRouter>
          {/* <Navbar/> */}
      
      <Routes>

        {/* <Route exact path='/' element = {<Homepage/>}> </Route>
        <Route path='/login' element =  {<Login/>}> </Route>
        <Route path='/signup' element = {<Signup/>}></Route> */}

        <Route exact path='/' element= {<Home />}></Route>
        <Route exact path='/users' element= {< Users />}></Route>
        <Route exact path='/analytics' element= {< Analytics />}></Route>
        <Route exact path='/setting' element= {<Settings />}></Route>

      </Routes>
      
      </BrowserRouter>
  );
}

export default App;
