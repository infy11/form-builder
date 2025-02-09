import React from "react";
import GenericObject from "@/lib/genericObject";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { setValidationField } from "@/store/slices/formSlice";

function ValidationConfiguration({
  validationInfo,
  widgetId,
}: {
  validationInfo: GenericObject;
  widgetId: string;
}) {
  const dispatch = useDispatch();
  return (
    <div>
      {Object.entries(validationInfo || {}).map(([key, value]) => {
        return (
          <div
            key={key}
            className="grid grid-cols-[120px_1.5fr] flex  item items-center gap-2 mt-4">
            <Label>{key}</Label>
            <Input
              value={value}
              onChange={(event) => {
                dispatch(
                  setValidationField({
                    id: widgetId,
                    field: key,
                    value: event.target.value,
                  }),
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ValidationConfiguration;
