import React from "react";
import { PostLayoutProps } from "./PostLayout.props";

import styles from "./PostLayout.module.scss";

const PostLayout = ({ children, title }: PostLayoutProps): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.root}>{children}</div>
    </div>
  );
};

export default PostLayout;
