import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TextInputProps = {
  defaultValue: string;
  label: string;
  placeholder: string;
  isHidden: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
function TextAreaWidget({
  defaultValue,
  label,
  placeholder,
  isHidden,
  onChange,
}: TextInputProps) {
  if (isHidden) {
    return null;
  }
  return (
    <>
      <Label> {label}</Label>
      <Textarea
        placeholder={placeholder}
        value={defaultValue}
        onChange={onChange}
      />
    </>
  );
}

export default TextAreaWidget;
