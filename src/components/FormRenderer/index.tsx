import React from "react";
import WidgetCustomizer from "@/components/widgets/WidgetCustomizer";
import ComponentsMap from "@/data/componentsMap";

function FormRenderer(widgets: any) {
  return (
    <div>
      {Object.entries(widgets.formState || {})
        .sort((a, b) => a[1]?.order - b[1]?.order)
        .map(([key, value]) => {
          return (
            <div key={key} className="mt-4">
              <WidgetCustomizer
                Component={ComponentsMap[value?.type]}
                metadata={value?.metadata}
                validation={value?.validation}
                widgetId={key}
              />
            </div>
          );
        })}
    </div>
  );
}

export default FormRenderer;
