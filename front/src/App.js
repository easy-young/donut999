import DefaultHeader from './components/DefaultLayout';
import 'antd/dist/antd.css';
import Index from './pages/Index.jsx';
import Mypage from './pages/Mypage.jsx';
import Login from './pages/login.jsx'
import Rank from './pages/Rank.jsx';
import Admin from './pages/admin/Admin.jsx';
import AdminMenu from './pages/admin/AdminMenu.jsx';
import Join from './pages/register/Join.jsx';
import Check from './pages/register/Check.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <DefaultHeader />
        <Routes>
          <Route path="/" index element={<Index />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rank" element={<Rank />} />
          <Route path='/register/join' element={<Join/>} />
          <Route path='/register/check' element={<Check />} />
          <Route path="/dt/admin" element={<Admin />} />
          <Route path="/dt/admin/menu" element={<AdminMenu />} />

        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;