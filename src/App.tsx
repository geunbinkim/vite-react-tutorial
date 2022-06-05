import React from 'react';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import Connections from './routes/dataTransfer/Connections';
import ConnectionEditor from './routes/dataTransfer/ConnectionEditor';
import './App.scss';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={'/dashboard'} element={<Dashboard />} />
        <Route path={'/transfer/connections'} element={<Connections />} />
        <Route path={'/transfer/connection'} element={<ConnectionEditor />}>
          <Route path={':id'} element={<ConnectionEditor />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
