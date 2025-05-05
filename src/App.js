
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';


import 'tippy.js/dist/tippy.css';

import Home from './pages/Home';
import MainApp from './pages/MainApp';
import OrderMerch from './pages/OrderMerch';
import Login from './pages/Login';
import SignUp from  './pages/SignUp'

function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route path="/app" element={ <MainApp/>}/>
            <Route path="/order" element={<OrderMerch/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
