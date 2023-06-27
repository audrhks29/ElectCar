import React from 'react';
import Main from './pages/Main';
import GlobalStyle from './styled/GlobalStyle';
// import Category from './pages/Category';
import { HashRouter, Routes, Route } from 'react-router-dom';
// import CategoryDetail from './pages/CategoryDetail';
const App = () => {
  return (
    <div className='wrap' style={{ position: "relative" }}>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" index element={<Main />} />
          {/* <Route path="category">
            <Route element={<Category />} />
            <Route path=":CategoryId" element={<CategoryDetail />} />
          </Route> */}
          {/* <Route path="*" element={<NotFiles />} /> */}
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;