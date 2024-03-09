import React, { useEffect, useRef } from "react";

export default function InnerHTML({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.innerHTML = children;
  }, [children]);

  return <span ref={ref}></span>;
}
