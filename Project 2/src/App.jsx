import { useState } from 'react'
import Navbar from './components/Navigation/Navbar'
import './App.css'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <main className="main_container">
    <ContactHeader/>
    <ContactForm/>
    </main>
    </>
  )
}

export default App
