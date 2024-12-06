import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './Layout'
import Credits from './Pages/Credits/Credits'
<<<<<<< HEAD
import Game from './Pages/Game/Game'
=======
import Pantheon from './Pages/Pantheon/Pantheon'
>>>>>>> b94d7fb12eb9bd90bd28bd176bc50ddaab426192

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<span />} />
          <Route path="credits" element={<Credits />} />
<<<<<<< HEAD
          <Route path="game" element={<Game />} />
=======
          <Route path="pantheon" element={<Pantheon />} />
>>>>>>> b94d7fb12eb9bd90bd28bd176bc50ddaab426192
          <Route path="*" element={<h1>Y'a absolument rien ici</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
