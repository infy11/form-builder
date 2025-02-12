import React, { Dispatch } from "react";
import GenericObject from "@/lib/genericObject";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import {
  setMetadataField,
  setMetadataOptionsField,
} from "@/store/slices/formSlice";
import TypographyH4 from "@/components/ui/typographyH4";

function OptionsConfiguration({
  options,
  dispatch,
  widgetId,
}: {
  options: Record<string, any>;
  dispatch: Dispatch<any>;
  widgetId: string;
}) {
  return (
    <div className="mt-4">
      <p className="font-bold">Data </p>
      {Object.entries(options || {}).map(
        ([key, value]: Record<string, any>) => {
          return (
            <div
              key={key}
              className="grid grid-cols-[120px_1.5fr] flex  item items-center gap-2 mt-4">
              <Input
                placeholder={value?.label}
                value={value?.label}
                onChange={(e) => {
                  dispatch(
                    setMetadataOptionsField({
                      widgetId: widgetId,
                      optionId: key,
                      value: {
                        ...value,
                        label: e.target.value,
                      },
                    }),
                  );
                }}
              />
              <Input
                placeholder={value?.value}
                value={value?.value}
                onChange={(e) => {
                  dispatch(
                    setMetadataOptionsField({
                      widgetId: widgetId,
                      optionId: key,
                      value: {
                        ...value,
                        value: e.target.value,
                      },
                    }),
                  );
                }}
              />
            </div>
          );
        },
      )}
    </div>
  );
}
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
          <>
            {key === "options" ? (
              <OptionsConfiguration
                options={value}
                widgetId={widgetId}
                dispatch={dispatch}
              />
            ) : (
              <div
                key={key}
                className="grid grid-cols-[120px_1.5fr] flex  item items-center gap-2 mt-4">
                <Label>{key}</Label>
                <Input
                  value={value}
                  onChange={(event) => {
                    dispatch(
                      setMetadataField({
                        id: widgetId,
                        field: key,
                        value: event.target.value,
                      }),
                    );
                  }}
                />
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default MetadataConfiguration;
