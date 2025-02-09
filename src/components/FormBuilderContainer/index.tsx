import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import AddComponentsCTA from "@/components/AddComponents/AddComponentsCTA";
import ComponentsModal from "@/components/ComponentsModal";
import { v4 as uuid } from "uuid";
import GenericObject from "@/lib/genericObject";
import { setAddFormComponent, setFormState } from "@/store/slices/formSlice";
import FormRenderer from "@/components/FormRenderer";
import { Card } from "@/components/ui/card";
import TypographyH4 from "@/components/ui/typographyH4";

const generateWidget = (
  metadata: GenericObject,
  type: string,
  validation: GenericObject,
) => {
  return {
    id: uuid(),
    metadata: metadata,
    type: type,
    validation,
  };
};
function FormBuilderContainer() {
  const formState = useSelector((state: RootState) => state.form.form);
  const dispatch = useDispatch();
  const [
    isHandleAddComponentDialogVisible,
    setIsHandleAddComponentDialogVisible,
  ] = useState(false);
  const handleWidgetSelectorClick = () => {
    setIsHandleAddComponentDialogVisible(true);
  };

  const closeWidgetSelector = () => {
    setIsHandleAddComponentDialogVisible(false);
  };

  const onWidgetSelected = (
    type: string,
    metadata: GenericObject,
    validation: GenericObject,
  ) => {
    const newWidget = generateWidget(metadata, type, validation);
    dispatch(setAddFormComponent(newWidget));
  };

  return (
    <>
      <div className="w-full p-4 max-h-[80vh] flex justify-center">
        <ComponentsModal
          isOpen={isHandleAddComponentDialogVisible}
          onClose={closeWidgetSelector}
          onWidgetSelected={onWidgetSelected}
        />
        <Card className="p-4 w-[600px]">
          <TypographyH4> New Form</TypographyH4>
          {formState?.widgets ? (
            <FormRenderer formState={formState?.widgets} />
          ) : null}
          <AddComponentsCTA onClick={handleWidgetSelectorClick} />
        </Card>
      </div>
    </>
  );
}

export default FormBuilderContainer;
