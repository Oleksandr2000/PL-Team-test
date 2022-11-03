import React from "react";
import { FormControlProps } from "./FormControl.props";
import cn from "classnames";

import styles from "./FormControl.module.scss";

const Input = ({ placeholder, label, variant, error, value, name, type, handlerVlue }: FormControlProps) => {
  return (
    <div
      className={cn(styles.root, {
        [styles.large]: variant === "large",
        [styles.medium]: variant === "medium",
        [styles.small]: variant === "small",
      })}>
      <label className={styles.label}>{label}</label>
      <input
        placeholder={placeholder}
        value={value}
        name={name}
        type={type}
        onChange={e => handlerVlue(name, e.target.value)}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
