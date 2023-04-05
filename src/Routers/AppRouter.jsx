import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}> 

         <Route index element={<Body/>}  />

    
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default AppRouter