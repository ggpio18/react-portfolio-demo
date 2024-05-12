import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StoreProvider } from "./store/StoreContext"
import Portfolio from "./components/pages/developer/dashboard/portfolio/Portfolio"
import Home from "./components/pages/developer/ui/Home"
import Contact from "./components/pages/developer/ui/contact/Contact"

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
        {/* UI */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
      </StoreProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
