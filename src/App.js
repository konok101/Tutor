import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import PaymentCheckout from './Pages/PaymentCheckout/PaymentCheckout';
import Login from './Pages/Login/RequireAuth/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import NotFond from './Pages/NotFond/NotFond';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/home/:paymentId' element={
          <RequireAuth>
            <PaymentCheckout></PaymentCheckout>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFond></NotFond>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
