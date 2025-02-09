import React from "react";
import Text from "@/components/widgets/Text";
import TextInput from "@/components/widgets/TextInput";
import noop from "@/lib/noop";
import WidgetCustomizer from "@/components/widgets/WidgetCustomizer";
import NumberInput from "@/components/widgets/NumberInput";
import TextArea from "@/components/widgets/TextArea";
import { DatePicker } from "@/components/ui/datePicker";

function FormRenderer(widgets: any) {
  console.log("form state", widgets);
  return (
    <div>
      {Object.entries(widgets.formState || {}).map(([key, value]) => {
        return (
          <div key={key} className="mt-4">
            {value.type === "text" ? (
              <WidgetCustomizer
                Component={Text}
                metadata={value?.metadata}
                validation={value?.validation}
                widgetId={key}
              />
            ) : null}
            {value.type === "inputGeneric" ? (
              <WidgetCustomizer
                Component={TextInput}
                metadata={value?.metadata}
                validation={value?.validation}
                widgetId={key}
              />
            ) : null}
            {value.type === "inputNumber" ? (
              <WidgetCustomizer
                Component={NumberInput}
                metadata={value?.metadata}
                validation={value?.validation}
                widgetId={key}
              />
            ) : null}
            {value.type === "textArea" ? (
              <WidgetCustomizer
                Component={TextArea}
                metadata={value?.metadata}
                widgetId={key}
                validation={value?.validation}
              />
            ) : null}
            {value.type === "datePicker" ? (
              <WidgetCustomizer
                Component={DatePicker}
                metadata={value?.metadata}
                validation={value?.validation}
                widgetId={key}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default FormRenderer;
