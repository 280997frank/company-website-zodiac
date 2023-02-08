import type { ReactNode, RefObject } from "react";
import type { BoxProps, CSSObject } from "@chakra-ui/react";

export type TLayout = {
  title: string;
  children?: ReactNode;
  description?: string;
  overflow?: BoxProps["overflow"];
  containerRef?: RefObject<HTMLDivElement>;
  sx?: CSSObject;
};
