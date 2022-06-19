import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Sidebar.module.scss';
import { sidebarConfig } from './sidebarConfig';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.sidebar_wrapper}>
      <ul className={style.sidebar_menu}>
        <li className={style.sidebar_menu_header}>
          <div className={style.sidebar_menu_header_logo}>A</div>
          <div className={style.sidebar_menu_header_text}>
            <p className={style.sidebar_menu_header_title}>Super admin</p>
            <p className={style.sidebar_menu_header_subtitle}>Админ-меню</p>
          </div>
        </li>
        {sidebarConfig.map((menuItem) => {
          const isActiveClassName = pathname.includes(menuItem.path) ? style.active : '';
          const isActiveTextClassName = pathname.includes(menuItem.path) ? style.active_text : '';
          return (
            <Link
              key={menuItem.id}
              to={menuItem.path}
              className={`${isActiveClassName} ${style.sidebar_menu_item}`}>
              <li className={style.sidebar_menu_item_inner}>
                <img src={menuItem.img} alt="" />
                <p className={`${isActiveTextClassName} ${style.sidebar_menu_item_text}`}>
                  {menuItem.name}
                </p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
