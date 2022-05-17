import DefaultHeader from './components/DefaultLayout';
import 'antd/dist/antd.min.css';
import Index from './pages/Index';
import Mypage from './pages/Mypage';
import Rank from './pages/Rank';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/useStore';

const App = () => {
  return (
    <Provider store={store}>
      <DefaultHeader>
      </DefaultHeader>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/rank' element={<Rank />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
};

export default App;