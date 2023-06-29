import React from 'react';
import Home from './pages/Home';
import TamlaIsCar from './pages/TamlaIsCar';
import GlobalStyle from './styled/GlobalStyle';
import CommonHeader from './components/CommonHeader';
import CommonFooter from './components/CommonFooter';
import { Routes, Route, HashRouter } from 'react-router-dom';
import NoticeList from './pages/NoticeList';
import NoticeDetail from './pages/NoticeDetail';

const App = () => {
  return (
    <div className='wrap' style={{ position: "relative" }}>
      <GlobalStyle />
      <HashRouter>
        <CommonHeader />
        <Routes>
          <Route path="" index element={<Home />} />
          <Route path="/info" element={<TamlaIsCar />} />
          <Route path="noticeList">
            <Route index element={<NoticeList />} />
            <Route path=":noticeID" element={<NoticeDetail />} />
          </Route>
        </Routes>
        <CommonFooter />
      </HashRouter>
    </div>
  );
};

export default App;