import { styled as p } from "panda/jsx";

import { useState, type ReactElement, useEffect } from "react";

export function PlaceHolder({
  children,
}: {
  children: ReactElement;
}): ReactElement {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <p.div
      style={{
        minHeight: "30px",
        minWidth: "30px",
        opacity: loaded ? 1 : 0,
        transition: "opacity .3s",
      }}
    >
      {children}
    </p.div>
  );
}
