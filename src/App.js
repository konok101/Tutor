import logo from './logo.svg';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import PaymentCheckout from './Pages/PaymentCheckout/PaymentCheckout';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/home/:paymentId' element={<PaymentCheckout></PaymentCheckout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
