import React from 'react';

import './assets/scss/normalize.scss';
import GoodsPage from './entities/GoodsPage';
import PageLayout from './layouts/PageLayout';
import Footer from './shared/Footer';
import Header from './shared/Header';

const App = () => {
  return (
    <PageLayout>
      <GoodsPage />
    </PageLayout>
  );
};

export default App;
