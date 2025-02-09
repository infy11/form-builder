import React from "react";
import GenericObject from "@/lib/genericObject";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { setMetadataField } from "@/store/slices/formSlice";

function MetadataConfiguration({
  metadata,
  widgetId,
}: {
  metadata: GenericObject;
  widgetId: string;
}) {
  const dispatch = useDispatch();
  console.log("metadata", metadata);
  return (
    <div>
      {Object.entries(metadata || {}).map(([key, value]) => {
        return (
          <div
            key={key}
            className="grid grid-cols-[120px_1.5fr] flex  item items-center gap-2 mt-4">
            <Label>{key}</Label>
            <Input
              value={value}
              onChange={(event) => {
                dispatch(
                  setMetadataField({ id: widgetId, field: key, value: event.target.value }),
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default MetadataConfiguration;
