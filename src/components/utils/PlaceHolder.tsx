import { styled as p } from "panda/jsx";
import { App, ConfigProvider } from "antd";
import { useState, type ReactElement, useEffect } from "react";
import { token } from "panda/tokens";

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
        transition: "all .3s",
        width: "fit-content",
        ...(!loaded && {
          borderRadius: "3px",
          background: token("colors.gray.200"),
        }),
      }}
    >
      <p.div
        style={{
          opacity: loaded ? 1 : 0,
        }}
        transition="opacity .3s"
      >
        <ConfigProvider>
          <App>{children}</App>
        </ConfigProvider>
      </p.div>
    </p.div>
  );
}
