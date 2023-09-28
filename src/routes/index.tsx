import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../components/Layout"
import Home from "../views/Home"
import NoPage from "../views/PageNotFound"
import Settings from "../views/Settings"
import Bag from "../views/Bag"

const route = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/product/:id' element={<Home />} />
          <Route path='/Settings' element={<Settings />} />
          <Route path='/Bag' element={<Bag />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default route
