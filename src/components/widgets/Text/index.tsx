import React from "react";

type TextProps = {
  defaultValue: string;
  tooltipText: string;
  isHidden: boolean;
};
function Text({ defaultValue, tooltipText, isHidden }: TextProps) {
  if (isHidden) {
    return null;
  }
  return <div>{defaultValue}</div>;
}

export default Text;
