
import { RouterApp } from "./router"
import { NavBar } from "./components"
import { LanguageProvider } from "./context/LanguageProvider"




function App() {

  return (
    <>
      
        <LanguageProvider>
          <RouterApp />
          <NavBar />
        </LanguageProvider>
        {/* <Bg/> */}
      

    </>

  )
}

export default App
