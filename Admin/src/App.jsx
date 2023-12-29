import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Upload from './Pages/Upload';
import Settings from './Pages/Settings';
import ListeModerators from './Pages/ListeMod';
import Add from './Pages/Add';
import ModifyModerator from './Pages/Modify';

function App() {

  return (
    <Router>
      <div className='flex flex-row w-screen'>
        <Sidebar />
        <Routes>
  <Route path="/upload" element={<Upload />} />
  <Route path="/settings" element={<Settings />} />
  <Route path="/add" element={<Add />} />
  <Route path="/list" element={<ListeModerators />} />
  <Route path="/modify-moderator" element={<ModifyModerator />} />
</Routes>

      </div>
    </Router>
  )
}

export default App
