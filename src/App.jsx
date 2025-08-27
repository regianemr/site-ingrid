import { About } from "./components/About"
import { ContentModule } from "./components/Content"
import { Differentials } from "./components/Differentials"
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
      <Questions />
      <About />
      <CoursePricing />
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
