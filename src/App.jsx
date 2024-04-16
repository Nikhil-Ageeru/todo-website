import './App.css';
import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <div className="App overflow-hidden">
      <div className="App-Blur">
      <BrowserRouter>
        <header className="App-header">
          <h1 className='text-center text-secondary'>To Do App</h1>
        </header>
        <div className="Routes">
          <Routes>
            <Route path="/" element={<Dashboard></Dashboard>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
