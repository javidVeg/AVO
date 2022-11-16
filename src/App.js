import './App.css';

import React from 'react'
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <div>
      <Home/>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      </div>
  )
}

export default App

