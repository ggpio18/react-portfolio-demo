import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StoreProvider } from "./store/StoreContext"
import Portfolio from "./components/pages/developer/dashboard/portfolio/Portfolio"
import Home from "./components/pages/developer/ui/Home"
import Contact from "./components/pages/developer/ui/contact/Contact"
import Projects from "./components/pages/developer/ui/project/Projects"
import Services from "./components/pages/developer/dashboard/services/Services"
import Project from "./components/pages/developer/dashboard/project/Project"

function App() {
  const queryClient = new QueryClient

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <StoreProvider>
      <Router>
        <Routes>
          {/* Dashboard */}
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/service" element={<Services/>}/>
        <Route path="/project" element={<Project/>}/>
        {/* UI */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
      </StoreProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
