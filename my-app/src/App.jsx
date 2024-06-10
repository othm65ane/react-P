import './App.css'
import Navbar from './components/Navbar/navbar'
import Section from './components/Section/section'
import Products from './components/Products/product'
import Technologie from './components/Technologie/technologie'
import Projects from './components/Projects/projcts'
import Contact from './components/Contact/contact'

function App() {
  

  return (
    <>
    <div className='fixed top-0 -z-10 h-full w-full'>
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
       <div className='container mx-auto px-8'>
        <Navbar/>
        <Section/>
        <Products/>
        <Technologie/>
        <Projects/>
        <Contact/>
        </div>
        
       </>
  )
}

export default App
