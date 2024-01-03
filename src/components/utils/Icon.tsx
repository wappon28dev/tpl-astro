import { Icon as Iconify, type IconifyIcon } from "@iconify/react";
import type { ReactElement } from "react";

export function Icon({
  icon,
  size = 25,
}: {
  icon: IconifyIcon;
  size?: number;
}): ReactElement {
  return <Iconify height={size} icon={icon} width={size} />;
}
