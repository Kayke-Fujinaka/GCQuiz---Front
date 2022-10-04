import { IDialog } from "@/interfaces";
import * as Dialog from "@radix-ui/react-dialog";
import { DialogContent, DialogOverlay } from "./style";

export function Modal({ children, width, height }: IDialog) {
  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent width={width} height={height}>
        {children}
      </DialogContent>
    </Dialog.Portal>
  );
}
