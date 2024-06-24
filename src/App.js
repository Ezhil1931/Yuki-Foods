
import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import { useState } from 'react';
import Footer from './components/Footer';
import Login from './components/Login';
import Cartitem from './pages/Cartitem';

function App() {

const [cartList,setCartList]=useState([]);
const [total,setTotal]=useState(0);

const[login,setLogin]=useState(false);
  
return (
    <div className="App">



<Navbar  setLogin={setLogin} cartList={cartList}/>

<Routes>
  <Route path="/" element={<Home cartList={cartList} setCartList={setCartList}  total={total} setTotal={setTotal} />}/>
  {/* <Route path='/cart' element={<Cart  cartList={cartList} setCartList={setCartList} total={total} setTotal={setTotal} />  }        />  */}
<Route path='/cart-items'  element={ <Cartitem      cartList={cartList} setCartList={setCartList} total={total} setTotal={setTotal}        /> }/>


</Routes>

{
login && <Login   setLogin={setLogin} />

}
<Footer/>
    </div>
  );
}

export default App;
