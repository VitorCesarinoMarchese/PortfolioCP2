import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Contatos from './pages/Contatos'

const router = createBrowserRouter([
{
  path: "/",
  element: <Home/>
},
{
  path: "contatos",
  element: <Contatos/>
}
])

function App() {

  return (
    <div className='box-border'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
