import { Routes, Route } from "react-router"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Header from './components/Header'
import Blog from './components/Blog'
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/blog" element={ <Blog /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
