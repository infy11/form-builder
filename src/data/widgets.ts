const widgets = [
  {
    id: "text",
    name: "Label",
    icon: "text.svg",
    type: "text",
    metadata: {
      defaultValue: "Sample Text",
    },
    validation: {},
  },
  {
    id: "inputText",
    name: "Input Text",
    icon: "input.svg",
    type: "inputGeneric",
    metadata: {
      defaultValue: "",
      placeholder: "Enter text",
      label: "Text",
    },
    validation: {
      required: true,
      minLength: 3,
      maxLength: 10,
    },
  },
  {
    id: "inputNumber",
    name: "Number",
    icon: "inputNumber.svg",
    type: "inputNumber",
    metadata: {
      defaultValue: "",
      placeholder: "Enter text",
      label: "Text",
    },
    validation: {
      required: true,
      minLength: 3,
      maxLength: 10,
    },
  },
  {
    id: "textArea",
    name: "textArea",
    icon: "textArea.svg",
    type: "textArea",
    metadata: {
      defaultValue: "",
      placeholder: "Enter text",
      label: "Text",
    },
    validation: {
      required: true,
      minLength: 3,
      maxLength: 10,
    },
  },
  {
    id: "datePicker",
    name: "datePicker",
    icon: "textArea.svg",
    type: "datePicker",
    metadata: {
      defaultValue: new Date().toDateString(),
      label: "DOB",
      isDisabled: false,
    },
    validation: {
      required: true,
      maxDate: new Date(),
    },
  },
];

export default widgets;
