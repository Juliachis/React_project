import React from 'react';
import style from './Sidebar.module.scss';
import { sidebarConfig } from './sidebarConfig';

const Sidebar = () => {
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
          return (
            <li key={menuItem.id} className={style.sidebar_menu_item}>
              <div className={style.sidebar_menu_item_inner}>
                <img src={menuItem.img} alt="" />
                <p>{menuItem.name}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
