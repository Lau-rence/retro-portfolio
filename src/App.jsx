//Packages
import {
  createBrowserRouter,
  createRoutesFromElements, 
  Route, 
  RouterProvider
} from 'react-router-dom';

//Components
import RootLayout from './layout/RootLayout';
import AboutMe from './pages/AboutMe';
import AwardsExperience from './pages/AwardsExperience';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<AboutMe />} />
      <Route path='/awards&experience' element={<AwardsExperience/>} />
    </Route>
  )
)

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App