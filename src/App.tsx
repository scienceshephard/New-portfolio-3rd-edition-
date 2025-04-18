import { Route, Routes } from "react-router-dom"
import { UserLayout } from "./components/UserLayout"
import { Home } from "./pages/Home"
import About from "./pages/About"
import { Contact } from "./pages/Contact"
import { NotFound } from "./pages/404"
import Projects from "./pages/Projects"

function App() {
 
  return (
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />          
          <Route path="projects" element={<Projects />} />

          <Route path="contact" element={<Contact />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
  )
}

export default App
