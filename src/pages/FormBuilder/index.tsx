import React from "react";
import Header from "@/components/Header/Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar/app-sidebar";
import FormBuilderContainer from "@/components/FormBuilderContainer";

function FormBuilder() {
  return (
    <>
      <div>
        <SidebarProvider defaultOpen={true}>
          <AppSidebar />
          <SidebarTrigger />
          <FormBuilderContainer />
        </SidebarProvider>
      </div>
    </>
  );
}

export default FormBuilder;
