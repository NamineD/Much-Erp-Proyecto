import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Dashboard from './page/Dashboard/Dashboard';
import Species from './page/Species/Species';
import Plan from './page/Plan/Plan';
import Permisos from './page/Permisos/Permisos';
import Login from './page/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Sidebar from './components/Sidebar/Sidebar';


function App() {


  return (
    <>
        <BrowserRouter>
          <Routes>
              <Route element={ <PrivateRoute />}>
                  <Route path='/' element={<Sidebar />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/species" element={<Species />} />
                  <Route path="/plan" element={<Plan />} />
                <Route path="permisos" element={<Permisos />} />
              </Route>
              <Route path='auth/login' element={ <Login /> } />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
