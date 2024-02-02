import { Navbar, Footer, Sidebar } from "./components";
import { Body, Admin, OpenTender, SelectiveTender, OpenBidPage , SelectiveBidPage, Result} from "./pages"
import background from "./assets/background.avif";
import { BrowserRouter, Route, Routes } from"react-router-dom";

const App= () => {

  return (
    <div className="flex flex-col h-screen bg-white bg-opacity-5 " style={{ backgroundImage: `url("https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80")` }}>
      
      <div>
        <Navbar />
      </div>

      <div className="flex flex-row h-full m-2 overflow-hidden">
        <div className="w-max">
          <Sidebar />
        </div>
        <div className="w-full h-full">
          <Routes>
            <Route path='/' element={<Body/>}/>
            <Route path='openTender' element={<OpenTender/>}/>
            <Route path='/selectiveTender' element={<SelectiveTender/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/result' element={<Result/>}/>
            <Route path='/openBidPage' element={<OpenBidPage/>}/>
            <Route path='/selectiveBidPage' element={<SelectiveBidPage/>}/>
          </Routes>
        </div>
      </div>

      <div>
        <Footer />
      </div>

    </div>
  )
}

export default App
