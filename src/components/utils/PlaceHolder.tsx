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
          cursor: "progress",
        }),
      }}
    >
      <p.div
        style={{
          opacity: loaded ? 1 : 0,
          userSelect: loaded ? undefined : "none",
        }}
        transition="opacity .3s"
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: token("colors.green.500"),
            },
          }}
        >
          <App>{children}</App>
        </ConfigProvider>
      </p.div>
    </p.div>
  );
}
