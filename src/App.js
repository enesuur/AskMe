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
import Feed from './pages/Feed';
import NotFound from './components/NotFound';
import {AuthContextProvider} from './context/AuthContext';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='notifications' element={<Notifications/>}/>
      <Route path='feed' element={<Feed/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
);

export default function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router}/>
    </AuthContextProvider>
    );
};
