import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styles from "./styles.module.css";

function sideScroll(element, direction, speed, step, setExtremeState) {
  const distance = element.clientWidth;
  const scrollWidth = element.scrollWidth;

  setExtremeState("scrolling");

  let scrollAmount = 0;
  let slideTimer = setInterval(() => {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);

      if (distance >= scrollWidth) {
        setExtremeState("smaller");
      } else {
        if (element.scrollLeft === 0) setExtremeState("left");
        else if (Math.ceil(element.scrollLeft) > scrollWidth - distance - 5) {
          setExtremeState("right");
        } else setExtremeState("scrolling");
      }
    }
  }, speed);
}

function handleExtremeStyle(extremeState, extreme) {
  if (extremeState === "smaller") return styles.disable;
  else if (extremeState === extreme) return styles.disable;
  else return "";
}

export default function Scroller({ children }) {
  const itemsContainer = useRef(null);

  const [extremeState, setExtremeState] = useState("");
  useEffect(() => {
    if (itemsContainer.current === null) {
      return;
    }

    const element = itemsContainer.current;
    const distance = element.clientWidth;
    const scrollWidth = element.scrollWidth;

    if (distance >= scrollWidth) {
      setExtremeState("smaller");
    } else {
      setExtremeState("left");
    }
  }, [setExtremeState]);

  useEffect(() => {
    if (itemsContainer.current === null) {
      return;
    }

    const element = itemsContainer.current;
    const distance = element.clientWidth;
    const scrollWidth = element.scrollWidth;

    if (distance >= scrollWidth) {
      setExtremeState("smaller");
    } else {
      if (element.scrollLeft === 0) setExtremeState("left");
      else if (Math.ceil(element.scrollLeft) > scrollWidth - distance - 5) {
        setExtremeState("right");
      } else setExtremeState("scrolling");
    }
  });

  return (
    <div className={styles.scroller}>
      <div
        ref={itemsContainer}
        className={styles.itemsContainer}
        onScroll={(event) => {
          const element = event.target;
          const distance = element.clientWidth;
          const scrollWidth = element.scrollWidth;

          if (distance >= scrollWidth) {
            setExtremeState("smaller");
          } else {
            if (element.scrollLeft === 0) setExtremeState("left");
            else if (
              Math.ceil(element.scrollLeft) >
              scrollWidth - distance - 5
            ) {
              setExtremeState("right");
            } else setExtremeState("scrolling");
          }
        }}
      >
        {children}
      </div>
      <div
        className={styles.left + " " + handleExtremeStyle(extremeState, "left")}
        onClick={() => {
          sideScroll(itemsContainer.current, "left", 6, 10, setExtremeState);
        }}
      >
        <FaAngleLeft />
      </div>
      <div
        className={
          styles.right + " " + handleExtremeStyle(extremeState, "right")
        }
        onClick={() => {
          sideScroll(itemsContainer.current, "right", 6, 10, setExtremeState);
        }}
      >
        <FaAngleRight />
      </div>
    </div>
  );
}
