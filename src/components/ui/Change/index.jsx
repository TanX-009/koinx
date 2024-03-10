import React from "react";
import styles from "./styles.module.css";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

function High({ children, prefix = true, type = "background" }) {
  return (
    <div
      className={`${styles.high} ${
        type === "background" ? styles.bg : styles.fg
      }`}
    >
      {prefix && <GoTriangleUp />} {children}
    </div>
  );
}

function Low({ children, prefix = true, type = "background" }) {
  return (
    <div
      className={`${styles.low} ${
        type === "background" ? styles.bg : styles.fg
      }`}
    >
      {prefix && <GoTriangleDown />} {children}
    </div>
  );
}

function Change({ value, postfix, prefix = true, type = "background" }) {
  if (value > 0)
    return (
      <High prefix={prefix} type={type}>
        {value}
        {postfix}
      </High>
    );
  return (
    <Low prefix={prefix} type={type}>
      {value}
      {postfix}
    </Low>
  );
}

Change.High = High;
Change.Low = Low;

export default Change;
