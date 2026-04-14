import type { ReactNode } from "react";
import { RoughNotation } from "react-rough-notation";

type RainbowHighlightProps = {
  color: string;
  children: ReactNode;
};

export function RainbowHighlight({
  color,
  children,
}: RainbowHighlightProps) {
  const content =
    typeof children === "string"
      ? children
      : Array.isArray(children)
        ? children.join("")
        : "";
  const animationDuration = Math.floor(30 * content.length) || 800;

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
}
