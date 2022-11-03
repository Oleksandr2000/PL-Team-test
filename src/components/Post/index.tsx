import React from "react";
import { PostProps } from "./Post.props";

import styles from "./Post.module.scss";

const Item = ({ author, avatar, content }: PostProps): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={styles.author}>{author}</div>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
};

export default Item;
