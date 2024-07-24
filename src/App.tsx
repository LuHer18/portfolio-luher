
import { RouterApp } from "./router"
import { Bg, NavBar } from "./components"
import { LanguageProvider } from "./context/LanguageProvider"




function App() {

  return (
    <>
      <Bg>
        <LanguageProvider>
          <RouterApp />
          <NavBar />
        </LanguageProvider>
      </Bg>

    </>

  )
}

export default App
