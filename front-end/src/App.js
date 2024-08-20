import './App.css';
import DataEntry from './Components/DataEntry';
// import Home from './Components/Home';
import Login from './Components/Login';
import Registration from './Components/Registration';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from "react-router-dom";
import Update from './Components/Update';
import HomePage from './Components/HomePage';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='' element={<Outlet />}>
      <Route path='/' element={<Login />} />
      <Route path='/Registration' element={<Registration />} />
      <Route path='/Home' element={<HomePage />} />
      <Route path='/Details' element={<DataEntry />} />
      <Route path='/Update' element={<Update />} />
    </Route>
  ))

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
