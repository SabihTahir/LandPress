import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App