import './App.css';
import Auth from './Components/Auth/Auth';
import Create from './Components/Create/Create';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import Singlerecipe from './Components/SingleRecipe/Singlerecipe';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import StrictRoute from './Components/Strict/StrictRoute';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path='/create' element={<StrictRoute Child={Create}/>}/>
      <Route path='/home' element={<StrictRoute Child={Home}/>}/>
      <Route path='/single/:id' element={<StrictRoute Child={Singlerecipe}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
