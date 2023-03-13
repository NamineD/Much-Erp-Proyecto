import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './page/Dashboard/Dashboard';
import Field from './page/Field/Field'
import System from './page/System/System';
import LoginForm from './page/Login/Login';


function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={ <PrivateRoute />}>
                    <Route path='/' element={<Dashboard />} />
                    <Route path="field" element={<Field />} />
                    <Route path="system" element={<System />} />
                </Route>
                <Route path='auth/login' element={ <LoginForm /> } />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
