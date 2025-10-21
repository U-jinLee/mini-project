import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { CalculatorPage } from './pages/CalculatorPage'
import { AboutPage } from './pages/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <nav className='flex justify-center font-bold gap-4 p-4 bg-gray-100'>
        <Link to="/" className='text-blue-600 hover:underline'>Home</Link>
        <Link to="/calculator" className='text-blue-600 hover:underline'>Calculrator</Link>
        <Link to="/about" className='text-blue-600 hover:underline'>About</Link>
      </nav>
      <div className="p-6 flex justify-center">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/calculator' element={<CalculatorPage />}/>
          <Route path='/about' element={<AboutPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
