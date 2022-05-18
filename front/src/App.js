import DefaultHeader from './components/DefaultLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css';

import Index from './pages/Index.jsx';
import Mypage from './pages/Mypage.jsx';
import Login from './pages/Login.jsx';
import Rank from './pages/Rank.jsx';
import Flavor from './pages/rank/Flavor.jsx';
import Atmosphere from './pages/rank/Atmosphere.jsx';
import Cheap from './pages/rank/Cheap.jsx';
import Service from './pages/rank/Service.jsx';

import Parking from './pages/theme/Parking.jsx';
import Photo from './pages/theme/Photo.jsx';
import Protein from './pages/theme/Protein.jsx';
import Unique from './pages/theme/Unique.jsx';

import Admin from './pages/admin/Admin.jsx';
import AdminMenu from './pages/admin/AdminMenu.jsx';
import Confirm from './pages/admin/store/Confirm.jsx';
import StoreSetting from './pages/admin/store/StoreSetting.jsx';
import UserSetting from './pages/admin/user/UserSetting.jsx';
import ReviewSetting from './pages/admin/review/ReviewSetting.jsx';
import Edit from './pages/admin/store/Idx.jsx'

import Join from './pages/register/Join.jsx';
import Check from './pages/register/Check.jsx';

const App = () => {
  return (
    <body style={{ background: '#ff7bcc' }}>
      <BrowserRouter>
      <DefaultHeader />
      <Routes>
          
          <Route path="/" index element={<Index />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rank" element={<Rank />} />
          <Route path='/rank/flavor' element={<Flavor />} />
          <Route path='/rank/atmosphere' element={<Atmosphere />} />
          <Route path='/rank/cheap' element={<Cheap />} />
          <Route path='/rank/service' element={<Service />} />
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
          <Route path="/dt/admin/menu/store/setting/:store_id" element={<Edit />}/>
        </Routes>
      </BrowserRouter>
    </body>
  )
};

export default App;