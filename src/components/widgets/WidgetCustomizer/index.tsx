import React, { useRef } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useOnClickOutside } from "usehooks-ts";
import { Card } from "@/components/ui/card";
import cx from "classnames";
import MetadataConfiguration from "@/components/widgets/WidgetCustomizer/metadataConfiguration";
import ValidationConfiguration from "@/components/widgets/ValidationConfiguration";
import GenericObject from "@/lib/genericObject";

type WidgetCustomizerProps = {
  Component: React.FC<any>;
  metadata: GenericObject;
  widgetId: string;
  validation: GenericObject;
};

function WidgetCustomizer({
  Component,
  metadata,
  validation,
  widgetId,
}: WidgetCustomizerProps) {
  const [isPreviewMode, setIsPreviewMode] = React.useState(true);
  const ref = useRef(null);
  const handleClickOutside = () => {
    setIsPreviewMode(true);
  };
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div ref={ref}>
      {isPreviewMode ? (
        <div
          className="border-0 hover:border hover:border-dashed hover:border-blue-300 transition-all duration-100 rounded-lg p-2 cursor-pointer"
          onClick={() => {
            setIsPreviewMode(false);
          }}>
          <Component {...metadata} />
        </div>
      ) : (
        <>
          <Card>
            <div className="p-3">
              <Component {...metadata} />
            </div>
            <Card className="p-4 bg-gray-50 rounded-none">
              <Tabs defaultValue="config" className="w-full ">
                <TabsList>
                  <TabsTrigger value="config">Config</TabsTrigger>
                  <TabsTrigger value="validation">validation</TabsTrigger>
                </TabsList>
                <TabsContent value="config">
                  <MetadataConfiguration
                    metadata={metadata}
                    widgetId={widgetId}
                  />
                </TabsContent>
                <TabsContent value="validation">
                  <ValidationConfiguration
                    validationInfo={validation}
                    widgetId={widgetId}
                  />
                </TabsContent>
              </Tabs>
            </Card>
          </Card>
        </>
      )}
    </div>
  );
}

export default WidgetCustomizer;
