import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JavaDoc from './components/JavaDoc';
import SpringBoot from './components/pages/SpringBoot';
import SpringIOC from './components/pages/SpringIOC';
function App() {

  return (
    <>
     
      
    <Router>
      
        <Navbar />
       
      <>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} /> 
           
            <Route path='/login' element={<Login />} />
            <Route path='/java' element={<JavaDoc />} />
            <Route path='/spring-boot' element={<SpringBoot />} />
            <Route path='/spring-ICO-container' element={<SpringIOC />} />
        </Routes>
      </>
      </Router>
      <Footer />
      
    </>
  )
}

export default App
