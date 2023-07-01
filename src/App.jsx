import React, { useEffect } from 'react';

import GlobalStyle from './styled/GlobalStyle';

import CommonHeader from './components/CommonHeader';
import CommonFooter from './components/CommonFooter';

import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import TamlaIsCar from './pages/TamlaIsCar';
import NoticeList from './pages/NoticeList';
import NoticeDetail from './pages/NoticeDetail';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};
const App = () => {


  return (
    <div className='wrap' style={{ position: "relative" }}>

      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <CommonHeader />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/info" element={<TamlaIsCar />} />
          <Route path="noticeList">
            <Route index element={<NoticeList />} />
            <Route path=":noticeID" element={<NoticeDetail />} />
          </Route>
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <CommonFooter />
      </BrowserRouter>
    </div>
  );
};

export default App;