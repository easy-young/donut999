import DefaultHeader from './components/DefaultLayout';
import 'antd/dist/antd.css';
import Index from './pages/Index.jsx';
import Mypage from './pages/Mypage.jsx';
import Rank from './pages/Rank.jsx';
import Parking from './pages/theme/Parking.jsx'
import Photo from './pages/theme/Photo.jsx'
import Protein from './pages/theme/Protein.jsx'
import Unique from './pages/theme/Unique.jsx'

import Admin from './pages/admin/Admin.jsx';
import AdminMenu from './pages/admin/AdminMenu.jsx';
import Confirm from './pages/admin/store/Confirm.jsx';
import StoreSetting from './pages/admin/store/StoreSetting.jsx';
import UserSetting from './pages/admin/user/UserSetting.jsx';
import ReviewSetting from './pages/admin/review/ReviewSetting.jsx';

import Join from './pages/register/Join.jsx';
import Check from './pages/register/Check.jsx';
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
          <Route path="/theme/protein" element={<Protein />} />
          <Route path="/theme/photo" element={<Photo />} />
          <Route path="/theme/unique" element={<Unique />} />
          <Route path="/theme/parking" element={<Parking />} />
          <Route path='/register/join' element={<Join/>} />
          <Route path='/register/check' element={<Check />} />
          <Route path="/dt/admin" element={<Admin />} />
          <Route path="/dt/admin/menu" element={<AdminMenu />} />
          <Route path="/dt/admin/menu/store/confirm" element={<Confirm />} />
          <Route path="/dt/admin/menu/store/setting" element={<StoreSetting />} />
          <Route path="/dt/admin/menu/user/setting" element={<UserSetting />} />
          <Route path="/dt/admin/menu/review/setting" element={<ReviewSetting />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;