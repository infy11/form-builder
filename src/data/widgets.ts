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
    icon: "datePicker.svg",
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
  {
    id: "select",
    name: "select",
    icon: "select.svg",
    type: "select",
    metadata: {
      defaultValue: "",
      label: "select",
      isDisabled: false,
      options: {
        options1: {
          value: "option1",
          label: "option 1",
        },
        options2: {
          value: "option2",
          label: "option 2",
          id: "option2",
        },
        options3: {
          value: "option3",
          label: "option 3",
          id: "option3",
        },
      },
    },
    validation: {
      required: true,
      maxDate: new Date(),
    },
  },
];

export default widgets;
