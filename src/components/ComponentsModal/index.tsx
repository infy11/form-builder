import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import widgets from "@/data/widgets";
import { CardContent, CardHeader, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import GenericObject from "@/lib/genericObject";
type ComponentsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onWidgetSelected: (
    type: string,
    metadata: GenericObject,
    validation: GenericObject,
  ) => void;
};
function ComponentsModal({
  isOpen,
  onClose,
  onWidgetSelected,
}: ComponentsModalProps) {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Widgets</DialogTitle>
          <DialogDescription className="flex gap-2 pt-4 pb-8">
            {widgets.map((widget) => (
              <Card
                key={widget.id}
                onClick={() => {
                  onWidgetSelected(
                    widget.type,
                    widget.metadata,
                    widget.validation,
                  );
                  onClose();
                }}
                className="h-[60px] w-[80px] flex flex-col items-center gap-1 cursor-pointer">
                <img src={widget?.icon} height="60px" width="60px" />
                <Label className="text-start"> {widget.name}</Label>
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ComponentsModal;
