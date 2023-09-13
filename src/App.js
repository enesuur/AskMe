import './App.css';
import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
}
from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import NotFound from './components/NotFound';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='notifications' element={<Notifications/>}/>
      <Route path='messages' element={<Messages/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router}/>
    );
};
