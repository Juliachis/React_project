import React, { FC } from 'react';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import Sidebar from '../../shared/Sidebar';
import style from './PageLayout.module.scss';

interface IMainLayout {
  children: React.ReactNode;
}

const PageLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <div className={style.content_wrapper}>
        <Sidebar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
