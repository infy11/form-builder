import { Calendar, Home, Inbox, Search, Settings, Trash2 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { Card } from "@/components/ui/card";
import { setDeleteMetadataField, setOrder } from "@/store/slices/formSlice";

export function AppSidebar() {
  const formState = useSelector((state: RootState) => state.form.form.widgets);
  const dispatch = useDispatch();
  const handleFieldDelete = (key: string) => {
    dispatch(setDeleteMetadataField({ id: key }));
  };

  return (
    <Sidebar className="mt-10">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Form fields Summary</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {Object.entries(formState || {})
                .sort((a, b) => a[1]?.order - b[1]?.order)
                .map(([key, value]) => {
                  return (
                    <SidebarMenuItem key={key}>
                      <SidebarMenuButton asChild>
                        <Card
                          className="flex justify-between mt-1 cursor-pointer"
                          onDragOver={(e) => {
                            e.preventDefault();
                          }}
                          onDrop={(e) => {
                            e.preventDefault();
                            const droppedKey = e.dataTransfer.getData("Text");
                            dispatch(
                              setOrder({ id: droppedKey, order: value.order }),
                            );
                            dispatch(
                              setOrder({
                                id: key,
                                order: formState[droppedKey].order,
                              }),
                            );
                          }}
                          draggable={true}
                          onDragStart={(e) => {
                            e.dataTransfer.setData("Text", key);
                            console.log("drag start", e);
                          }}>
                          <span className="ml-2">{value.type}</span>
                          <Trash2
                            color="red"
                            className="cursor-pointer"
                            onClick={() => handleFieldDelete(key)}
                          />
                        </Card>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
