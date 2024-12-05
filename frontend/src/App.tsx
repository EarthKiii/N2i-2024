import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './Layout'
import Credits from './Pages/Credits/Credits'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<span />} />
          <Route path="credits" element={<Credits />} />
          <Route path="*" element={<h1>Y'a absolument rien ici</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
