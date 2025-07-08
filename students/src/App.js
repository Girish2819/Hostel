import { Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Login from './Pages/Auth/Login';


function App() {
  return (
    < >
    <Routes>
    <Route path='/' element={<HomePage/>} />
     <Route path="/about" element={<AboutPage/>} />
     <Route path="/login" element={<Login/>} />
    </Routes>
   
    </>
  );
}

export default App;
