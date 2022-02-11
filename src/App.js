
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './Components/Profile';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Register from './Pages/Register';
import AuthProvider from './Utilities/AuthProvider';
import PrivateRoute from './Utilities/PrivateRoute';


function App() {
  return (
    <div className="App">
      <header>
     
      </header>
      <AuthProvider>

        <Routes>

          <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />

       
          <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<NotFound/>} />

        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
