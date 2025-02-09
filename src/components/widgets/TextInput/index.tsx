import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type TextInputProps = {
  defaultValue: string;
  label: string;
  placeholder: string;
  isHidden: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
function TextInput({
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
      <Input
        placeholder={placeholder}
        value={defaultValue}
        onChange={onChange}
      />
    </>
  );
}

export default TextInput;
