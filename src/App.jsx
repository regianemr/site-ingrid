import { About } from "./components/About"
import { ContentModule } from "./components/Content"
import { Differentials } from "./components/Differentials"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { MyNavbar } from "./components/Navbar"
import { CoursePricing } from "./components/Price"
import { Questions } from "./components/Questions"

function App() {

  return (
    <>
    
      <MyNavbar />
      <Hero />
      <ContentModule />
      <Differentials />
      <About />
      <CoursePricing />
      <Questions />
      <Footer />
    </>
  )
}

export default App
