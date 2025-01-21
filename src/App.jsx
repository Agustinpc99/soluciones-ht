import { LayoutMain } from './components/LayoutMain'
import { Home } from './views/Home'
import { AboutUs } from './views/AboutUs'
import { Contact } from "./views/Contact"
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <LayoutMain>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/nosotros' element={<AboutUs></AboutUs>}></Route>
        <Route path='/contacto' element={<Contact></Contact>}></Route>
      </Routes>
      </LayoutMain>
    </BrowserRouter>
    </>
  )
}

export default App
