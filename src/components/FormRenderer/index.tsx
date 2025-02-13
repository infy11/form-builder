import React from "react";
import Text from "@/components/widgets/Text";
import TextInput from "@/components/widgets/TextInput";
import noop from "@/lib/noop";
import WidgetCustomizer from "@/components/widgets/WidgetCustomizer";
import NumberInput from "@/components/widgets/NumberInput";
import TextArea from "@/components/widgets/TextArea";
import { DatePicker } from "@/components/ui/datePicker";
import Select from "@/components/widgets/Select";
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
