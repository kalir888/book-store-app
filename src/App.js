import './App.css';
import Header from './components/header/header';
import Dashboard from './pages/dashboard/dashboard';
import FinalPage from './pages/finalpage/finalpage';
import MyCart from './pages/mycart/mycart';
import SigninAndSignup from './pages/signinandsignup/signinandsignup';
import Wishlist from './pages/wishlist/wishlist';

function App() {
  return (
    <div className="App">
      {/* <SigninAndSignup/> */}
      {/* <Header/> */}
      {/* <Dashboard/> */}
      {/* <MyCart/> */}
      {/* <Wishlist/> */}
      <FinalPage/>
    </div>
  );
}

export default App;
