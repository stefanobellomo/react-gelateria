import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalContext'
import DefaultLayout from './layouts/DefaultLayout'
import ProductDetails from './pages/ProductDetails'

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<ProductDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
