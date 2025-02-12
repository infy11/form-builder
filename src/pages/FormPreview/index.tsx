import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Text from "@/components/widgets/Text";
import TextInput from "@/components/widgets/TextInput";
import { TypographyH4 } from "@/components/ui/typographyH4";
import Textarea from "@/components/widgets/TextArea";
import NumberInput from "@/components/widgets/NumberInput";
import { DatePicker } from "@/components/ui/datePicker";
import SelectWidget from "@/components/widgets/Select";

function FormPreview() {
  const formState = useSelector((state: RootState) => state.form.form.widgets);
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateField = (widgetId: string, value: string, validation: any) => {
    if (!validation) return "";

    if (validation.required && !value) {
      return "This field is required";
    }

    if (validation.minLength && value.length < validation.minLength) {
      return `Minimum length is ${validation.minLength} characters`;
    }

    if (validation.maxLength && value.length > validation.maxLength) {
      return `Maximum length is ${validation.maxLength} characters`;
    }

    if (validation.maxDate && value) {
      const inputDate = new Date(value);
      const maxDate = new Date(validation.maxDate);
      if (inputDate > maxDate) {
        return `Date must be before ${maxDate.toLocaleDateString()}`;
      }
    }

    return "";
  };

  const handleInputChange = (widgetId: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [widgetId]: value,
    }));

    // Clear error when user starts typing
    if (errors[widgetId]) {
      setErrors((prev) => ({
        ...prev,
        [widgetId]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    Object.entries(formState || {}).forEach(([key, widget]) => {
      const value = formValues[key] || "";
      const error = validateField(key, value, widget.validation);

      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please check the form for errors",
        variant: "destructive",
      });
      return;
    }

    const formResponse = {
      id: uuidv4(),
      responses: formValues,
      submittedAt: new Date().toISOString(),
    };

    toast({
      title: "Form Submitted Successfully",
      description: JSON.stringify(formResponse),
    });

    setFormValues({}); // Reset form
    setErrors({}); // Clear errors
  };

  return (
    <div className="flex items-center flex-col">
      <div className="bg-violet-200 w-full h-[150px]"></div>
      <Card className="z-10 w-[500px] flex items-center absolute top-32">
        <form onSubmit={handleSubmit} className="p-4 w-full">
          <TypographyH4>Form Preview</TypographyH4>
          <div className="flex flex-col gap-4 w-full">
            {Object.entries(formState || {})
              .sort((a, b) => a[1]?.order - b[1]?.order)
              .map(([key, value]) => {
                const error = errors[key];
                return (
                  <div key={key} className="mt-1">
                    {value.type === "text" ? (
                      <Text {...value.metadata} />
                    ) : null}
                    {value.type === "inputGeneric" ? (
                      <div>
                        <TextInput
                          {...value.metadata}
                          defaultValue={formValues[key] || ""}
                          onChange={(e) =>
                            handleInputChange(key, e.target.value)
                          }
                          error={error}
                        />
                        {error && (
                          <span className="text-red-500 text-sm">{error}</span>
                        )}
                      </div>
                    ) : null}
                    {value.type === "inputNumber" ? (
                      <div>
                        <NumberInput
                          {...value.metadata}
                          defaultValue={formValues[key] || ""}
                          onChange={(e) =>
                            handleInputChange(key, e.target.value)
                          }
                          error={error}
                        />
                        {error && (
                          <span className="text-red-500 text-sm">{error}</span>
                        )}
                      </div>
                    ) : null}
                    {value.type === "textArea" ? (
                      <div>
                        <Textarea
                          {...value.metadata}
                          defaultValue={formValues[key] || ""}
                          onChange={(e) =>
                            handleInputChange(key, e.target.value)
                          }
                          error={error}
                        />
                        {error && (
                          <span className="text-red-500 text-sm">{error}</span>
                        )}
                      </div>
                    ) : null}
                    {value.type === "datePicker" ? (
                      <div>
                        <DatePicker
                          {...value.metadata}
                          defaultValue={formValues[key] || ""}
                          onChange={(e: Date) =>
                            handleInputChange(key, e.toDateString())
                          }
                          error={error}
                        />
                        {error && (
                          <span className="text-red-500 text-sm">{error}</span>
                        )}
                      </div>
                    ) : null}
                    {value.type === "select" ? (
                      <div>
                        <SelectWidget
                          {...value.metadata}
                          defaultValue={
                            formValues[key] || value?.metadata?.defaultValue
                          }
                          onChange={(e: string) => handleInputChange(key, e)}
                          options={value.metadata.options}
                          error={error}
                        />
                        {error && (
                          <span className="text-red-500 text-sm">{error}</span>
                        )}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            <Button type="submit" className="self-end">
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default FormPreview;
