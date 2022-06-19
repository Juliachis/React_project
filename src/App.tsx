import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import EditPage from './entities/EditPage';
import GoodsPage from './entities/GoodsPage';
import PageLayout from './layouts/PageLayout';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<GoodsPage />} />
        <Route path="goods_page" element={<GoodsPage />} />
        <Route path="edit_page" element={<EditPage />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
