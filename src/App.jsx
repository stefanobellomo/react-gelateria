import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import ProductDetails from './pages/ProductDetails'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
