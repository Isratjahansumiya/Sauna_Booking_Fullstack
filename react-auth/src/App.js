import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Header from './component/Header/Header';
import AuthProvider from './context/AuthProvider';
import About from './component/About/About';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Booking from './component/Booking/Booking';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path='/about' element={<About/>}/>
          </Route>
          <Route element={<PrivateRoute/>}>
            <Route path='/booking' element={<Booking/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
