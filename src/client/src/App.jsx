import { Navbar, Body, Footer, Sidebar, OpenTender, Admin } from "./components"
import background from "./assets/background.avif"

const App= () => {

  return (
    <div className="flex flex-col h-screen bg-white bg-opacity-5 " style={{ backgroundImage: `url("https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80")` }}>
      
      <div>
        <Navbar />
      </div>

      <div className="flex flex-row h-full m-2">
        <div className="w-max">
          <Sidebar />
        </div>
        <div className="w-full h-full">
          <Admin />
        </div>
      </div>

      <div>
        <Footer />
      </div>

    </div>
  )
}

export default App
