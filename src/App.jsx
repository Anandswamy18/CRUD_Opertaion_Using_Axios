import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Nav from "./elements/Nav"
import Product from './elements/Product'
import Cart from './elements/Cart'
import Update from './elements/Update'
import "./global.css"


import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const App = () => {
  return (
    <div>
     
        <Router>
        < ToastContainer/>
        <Nav/>
       
        <Routes>
            <Route path='/' element={<Cart/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/update/:id' element={<Update/>}/>
        </Routes>
        </Router> 
      
    </div>
  )
}

export default App