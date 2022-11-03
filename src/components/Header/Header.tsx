import React from "react";
import { HeaderProps } from "./Header.props";

import styles from "./Header.module.scss";

const Header = ({ count }: HeaderProps) => {
  return (
    <div className={styles.root}>
      <h1>Web Blog</h1>
      <div className={styles.count}>
        Всього постів: <span>{count}</span>
      </div>
    </div>
  );
};

export default Header;
