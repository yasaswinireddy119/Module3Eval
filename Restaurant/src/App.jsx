import Admin from "./Pages/Admin";
import Customer from "./Pages/Customer";
import Login from "./Pages/Login";
import UserData from "./UserData";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
         <Route path="/admin" element={<Admin/>}/>
         <Route path="/customer" element={<Customer/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


