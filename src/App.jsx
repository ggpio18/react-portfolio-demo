import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StoreProvider } from "./store/StoreContext"
import Portfolio from "./components/pages/developer/dashboard/portfolio/Portfolio"
import Home from "./components/pages/developer/ui/Home"
// import Contact from "./components/pages/developer/ui/contact/Contact"
import Projects from "./components/pages/developer/ui/project/Projects"
import Services from "./components/pages/developer/dashboard/services/Services"
import Project from "./components/pages/developer/dashboard/project/Project"
import Contact from "./components/pages/developer/dashboard/contact/Contact"
import Contacts from "./components/pages/developer/ui/contact/Contacts"
import Login from "./components/pages/developer/access/Login"
import ForgotPassword from "./components/pages/developer/access/ForgotPassword"
import CreatePassword from "./components/pages/developer/access/CreatePassword"
import Users from "./components/pages/developer/dashboard/users/Users"
import PageNotFound from "./components/partials/PageNotFound"
import ProtectedRoute from "./components/pages/developer/access/ProtectedRoute"

// import Contacts from "./components/pages/developer/dashboard/contact/Contacts"

function App() {
  const queryClient = new QueryClient

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <StoreProvider>
      <Router>
        <Routes>
          {/* Dashboard */}
        <Route path="/Users" element={<Users/>}/>

        <Route path="/*" element={<PageNotFound/>}/>

        <Route path="/portfolio" element={
          <ProtectedRoute>
        <Portfolio/>
        </ProtectedRoute>
        }/>

        <Route path="/contact" element={<ProtectedRoute><Contact/></ProtectedRoute>}/>
        <Route path="/service" element={<ProtectedRoute> <Services/></ProtectedRoute>}/>
        <Route path="/project" element={<ProtectedRoute><Project/></ProtectedRoute>}/>

        {/* UI */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/create-password" element={<CreatePassword/>}/>

        </Routes>
      </Router>
      </StoreProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
