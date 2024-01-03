import { Button as AButton } from "antd";
import type { ComponentProps, ReactElement } from "react";
import { PlaceHolder } from "../utils/PlaceHolder";

export function Button({
  ...props
}: ComponentProps<typeof AButton>): ReactElement {
  return (
    <PlaceHolder>
      <AButton {...props} />
    </PlaceHolder>
  );
}
