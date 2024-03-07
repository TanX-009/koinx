import MaxWidthContainer from "@/components/misc/MaxWidthContainer";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "./styles.module.css";

export default function Location({ location }) {
  return (
    <MaxWidthContainer>
      <div className={styles.location}>
        {location.map((item, index) => {
          const capFirstLetter = item.charAt(0).toUpperCase() + item.slice(1);
          if (index === location.length - 1)
            return (
              <span className={styles.current} key={index}>
                {capFirstLetter}
              </span>
            );
          return (
            <span key={index}>
              {capFirstLetter} <MdKeyboardDoubleArrowRight />
            </span>
          );
        })}
      </div>
    </MaxWidthContainer>
  );
}
