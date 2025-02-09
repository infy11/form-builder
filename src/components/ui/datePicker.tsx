import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";

type DatePickerProps = {
  label?: string;
  isDisabled?: boolean;
  onChange: (date: Date) => void;
  value: Date | null;
};

export function DatePicker({
  label,
  isDisabled,
  onChange,
  defaultValue,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex flex-col gap-2">
          <Label>{label}</Label>
          <Button
            disabled={isDisabled}
            variant="outline"
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !defaultValue && "text-muted-foreground",
            )}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            {defaultValue ? (
              format(defaultValue, "PPP")
            ) : (
              <span>{label ? label : "Pick a date"}</span>
            )}
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={defaultValue}
          onSelect={onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
