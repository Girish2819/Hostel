import { Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import ForgotPassword from './Pages/Auth/ForgotPassword';


function App() {
  return (
    < >
    <Routes>
    <Route path='/' element={<HomePage/>} />
     <Route path="/about" element={<AboutPage/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/register" element={<Register />} />
     <Route path="/forgot-Password" element={<ForgotPassword />} />
    </Routes>
   
    </>
  );
}

export default App;
