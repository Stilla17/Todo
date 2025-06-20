import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Dashboard from './Pages/Dashboard';
import Plans from './Pages/Plans';
import Settings from './Pages/Settings';
import Movies from './Pages/Movies';
import Layout from './Pages/Layout';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Cars from './Pages/Cars';
import InfoMovies from './Components/InfoMovies/InfoMovies';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import { useAuth } from './Components/AuthContext/AuthProvider';
import Loader from './Components/Loader/Loader';
import Combat from './Pages/Combat';
import Chat from './Pages/Chat';
import Casino from './Pages/Casino';
import Calculator from './Pages/Calculator';

function App() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  const { loading } = useAuth();
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setShowApp(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (!showApp) return <Loader />;

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='plans' element={<Plans />} />
          <Route path='cars' element={<Cars />} />
          <Route path='games/combat' element={<Combat />} />
          <Route path='games/casino' element={<Casino />} />
          <Route path='games/calc' element={<Calculator />} />
          <Route path='settings' element={<Settings />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/infomovies/:id' element={<InfoMovies />} />

        </Route>


        <Route path='Chat' element={<Chat />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='signin' element={<SignIn />} />
      </Routes>


    </>
  )
}

export default App;
