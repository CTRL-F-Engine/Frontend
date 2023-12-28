import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Content from './components/content'

function App() {

  return (
    <div className='flex flex-row w-screen  '>
      <Sidebar />
      <Content />
    </div>
  )
}

export default App
