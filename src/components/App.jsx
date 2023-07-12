import './App.css';
import { Auth } from './Auth';
import { auth} from "../config/firebase";
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
// import Login from './Login';



function App() {

  const [page , setPage] = useState();

  auth.onAuthStateChanged((user)=>{
    if(user){
      setPage(<Home/>)
    }
    else{
      setPage(<Auth/>)
    }
  })

  return (
    <BrowserRouter>
    <div className="App">
      <h1>My-Counter App</h1>
    </div>   
      <Routes>
        <Route path='/'  element={page}  />
        <Route path='/login'  element={<Login/>}  />
        <Route path='/home'  element={<Home/>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
