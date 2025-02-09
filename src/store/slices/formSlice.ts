import { createSlice } from "@reduxjs/toolkit";
import GenericObject from "@/lib/genericObject";

type FormState = {
  form: {
    id: string;
    widgets: {
      type: string;
      id: string;
      metadata: GenericObject;
      validation: GenericObject;
      value: string;
    };
  };
};

const initialState: FormState | { form: { widgets: {} } } = {
  form: {
    widgets: {},
  },
};
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormState: (state: FormState, action) => {
      state.form = action.payload;
    },
    setAddFormComponent: (state: FormState, action) => {
      state.form.widgets[action.payload.id] = action.payload;
    },
    setMetadataField: (state: FormState, action) => {
      state.form.widgets[action.payload.id].metadata[action.payload.field] =
        action.payload.value;
    },
    setValidationField: (state: FormState, action) => {
      state.form.widgets[action.payload.id].validation[action.payload.field] =
        action.payload.value;
    },
    setDeleteMetadataField: (state: FormState, action) => {
      delete state.form.widgets[action.payload.id];
    },
    resetState: (state: FormState) => {
      state.form = {
        id: "",
        widgets: {},
      };
    },
  },
});

export const {
  setFormState,
  setAddFormComponent,
  setMetadataField,
  setDeleteMetadataField,
  setValidationField,
  resetState,
} = formSlice.actions;
export default formSlice.reducer;
