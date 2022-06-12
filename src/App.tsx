import React from 'react';

import './assets/scss/normalize.scss';
import PageLayout from './layouts/PageLayout';
import Footer from './shared/Footer';
import Header from './shared/Header';
import Sidebar from './shared/Sidebar';

const App = () => {
  return (
    <PageLayout>
      <Sidebar />
    </PageLayout>
  );
};

export default App;
