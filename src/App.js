import "./App.css"
import Home from "./pages/home/Home";
import Profile from './pages/profile/Profile.js';
import Auth from './pages/Auth/Auth.js';

function App() {
  return (
    <div className="App">
      <div className="blur" style={{top:'18%', right : '0'}}> </div>
      <div className="blur" style={{top:'36%', left: '-8 rem'}}> </div> 
<<<<<<< HEAD
      {/* <Home/> */}
      {/* <Profile/> */}
      <Auth/>
=======
      <Home/>
      {/* <Profile/> */}
      {/* <Auth/> */}
>>>>>>> 923132e93abe2dae18afcd5852679b1780cc7d61
    </div>
  );
}
export default App;