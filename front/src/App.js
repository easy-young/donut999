import DefaultHeader from './components/DefaultLayout';
import 'antd/dist/antd.css';
import Index from './pages/Index.jsx';
import Mypage from './pages/Mypage.jsx';
import Rank from './pages/Rank.jsx';
import Admin from './pages/Admin.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <DefaultHeader />
        <Routes>
          <Route path="/" index element={<Index />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/dt/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;