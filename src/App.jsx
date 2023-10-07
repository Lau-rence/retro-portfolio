//Packages
import {
  createBrowserRouter,
  createRoutesFromElements, 
  Route, 
  RouterProvider
} from 'react-router-dom';

//Components
import RootLayout from './layout/RootLayout';
import Profile from './pages/Home';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Profile />} />
    </Route>
  )
)

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App