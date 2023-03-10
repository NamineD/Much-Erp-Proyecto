import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Dashboard from './page/Dashboard/Dashboard';
import Species from './page/Species/Species';
import Sidebar from './components/Sidebar/Sidebar';
/* import Login from './page/Login/Login'; */

function App() {
  return (
    <div className='container p-0 m-0'>
      <div className="row">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="species" element={<Species />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
