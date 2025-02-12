import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type SelectWidgetProps = {
  defaultValue: string;
  label: string;
  placeholder: string;
  isHidden: boolean;
  onChange: (value: string) => void;
  options: {
    optionId: {
      label: string;
      value: string;
    };
  };
};
function SelectWidget({
  defaultValue,
  label,
  placeholder,
  isHidden,
  onChange,
  options,
}: SelectWidgetProps) {
  if (isHidden) {
    return null;
  }
  return (
    <>
      <Label>{label}</Label>
      <Select value={defaultValue} onValueChange={onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} defaultValue={defaultValue} />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(options || {}).map(([key, value]) => (
            <SelectItem key={key} value={value.value}>
              {value.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}

export default SelectWidget;
