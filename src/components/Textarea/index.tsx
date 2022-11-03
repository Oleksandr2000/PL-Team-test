import React from "react";
import { TextareaProps } from "./Textarea.props";
import cn from "classnames";

import styles from "./Textarea.module.scss";

const Textarea = ({ placeholder, label, variant, error, value, name, touched, handlerVlue, onBlur }: TextareaProps) => {
  return (
    <div
      className={cn(styles.root, {
        [styles.large]: variant === "large",
        [styles.medium]: variant === "medium",
        [styles.small]: variant === "small",
      })}>
      <label className={styles.label}>{label}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        name={name}
        onBlur={onBlur}
        onChange={e => handlerVlue(name, e.target.value)}
      />
      {error && touched ? <div className={styles.error}>{error}</div> : null}
    </div>
  );
};

export default Textarea;
