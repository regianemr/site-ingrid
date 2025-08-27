import { Differentials } from "./components/Differentials"
import { Hero } from "./components/Hero"
import { MyNavbar } from "./components/Navbar"

function App() {

  return (
    <>
    
      <MyNavbar />
      <Hero />
      <Differentials />
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
