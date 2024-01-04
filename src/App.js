import React from 'react'
import Record from "./pages/record/Record";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Department from './pages/department/Department';
import Security from './pages/security_staff/Security';
import Kitchen from './pages/Kitchen/Kitchen';
import Finance from './pages/finance/Finance';
import IT from './pages/IT_staff/IT';
import Single from './pages/single_staff/Single';
import NewStaff from './pages/new_staff/NewStaff';
import { userInputs } from "./formSource";
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<Record />} />
            <Route path='dashboard'>
              <Route index element={<Dashboard />}></Route>
            </Route>
            <Route path='department'>
              <Route index element={<Department />} />
              <Route path='Kitchen'>
                <Route index element={<Kitchen />} />
                <Route path=':userId' element={<Single />}></Route>
                <Route path='new' element={<NewStaff inputs={userInputs} title="Add New Kitchen Staff" />}></Route>
              </Route>
              <Route path='Security'>
                <Route index element={<Security />} />
                <Route path=':userId' element={<Single />}></Route>
                <Route path='new' element={<NewStaff inputs={userInputs} title="Add New Security Staff"/>}></Route>
              </Route>
              <Route path='IT'>
                <Route index element={<IT />} />
                <Route path=':userId' element={<Single />}></Route>
                <Route path='new' element={<NewStaff inputs={userInputs} title="Add New IT Staff" />}></Route>
              </Route>
              <Route path='Finance'>
                <Route index element={<Finance />} />
                <Route path=':userId' element={<Single />}></Route>
                <Route path='new' element={<NewStaff inputs={userInputs} title="Add New Finance Staff"/>}></Route>
              </Route>
              <Route path="/login" element={<Login />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
