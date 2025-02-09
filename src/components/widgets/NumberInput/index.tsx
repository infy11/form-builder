import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type NumberInputProps = {
  defaultValue: string;
  label: string;
  placeholder: string;
  isHidden: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
function NumberInput({
  defaultValue,
  label,
  placeholder,
  isHidden,
  onChange,
}: NumberInputProps) {
  if (isHidden) {
    return null;
  }
  return (
    <>
      <Label> {label}</Label>
      <Input
        type="number"
        placeholder={placeholder}
        value={defaultValue}
        onChange={onChange}
      />
    </>
  );
}

export default NumberInput;
