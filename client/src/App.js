import './App.css';
import SignIn from './components/SignIn';
import Menu from './components/Menu';
import {
  BrowserRouter, 
  Route,
  Routes
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<SignIn></SignIn>}></Route> 
          
          <Route exact path="/menu" element={<Menu></Menu>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
