import { BrowserRouter } from "react-router-dom"
import { RouterApp } from "./router"
import { Bg } from "./components"




function App() {

  return (
    <>
      <Bg/>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </>
    
  )
}

export default App
