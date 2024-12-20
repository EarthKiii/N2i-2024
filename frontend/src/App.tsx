import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './Layout'
import Credits from './Pages/Credits/Credits'
import Game from './Pages/Game/Game'
import Pantheon from './Pages/Pantheon/Pantheon'
import Home from './Pages/Home/Home'
import Win from './Pages/Win/Win'
import Collection from './Pages/Collection/Collection'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="credits" element={<Credits />} />
          <Route path="game" element={<Game />} />
          <Route path="pantheon" element={<Pantheon />} />
          <Route path="collection" element={<Collection />} />
          <Route path="win" element={<Win />} />
          <Route path="*" element={<h1>Y'a absolument rien ici</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
