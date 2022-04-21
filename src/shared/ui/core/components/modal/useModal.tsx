import React, { useState } from "react";
import { IModal } from "shared/ui/core/components/modal/ModalWrapper";
import { Modals } from "shared/ui/core/containers/modals/Modals";

export type OptionalIfEmpty<T> = {} extends T ? [{}?] : [T];
type OmitType<T1, T2> = Pick<T1, Exclude<keyof T1, keyof T2>>;

export const useModal = function<
  ModalProps extends IModal<any, any>,
  InitProps extends Partial<OmitType<ModalProps, Omit<IModal, "onSuccess">>> = {}
>(component: React.ComponentType<ModalProps>, props: InitProps = {} as any) {
  type ModalOpenArguments = OmitType<ModalProps, InitProps & IModal>;

  const [open, setOpen] = useState<boolean>(false);

  return {
    isOpen: open,
    close: () => {
      Modals.close(component);
      setOpen(false);
    },
    open: (...params: OptionalIfEmpty<ModalOpenArguments>) => {
      const openProps = params[0] instanceof Event ? {} : params[0];

      const modalProps = {
        isOpen: open,
        close: () => {
          Modals.close(component);
          setOpen(false);
        },
        ...props,
        ...openProps
      };

      const baseOnSuccess = (modalProps as any).onSuccess;

      (modalProps as any).onSuccess = async (resp: any) => {
        await baseOnSuccess?.(resp);
        modalProps.close();
      };

      Modals.open(component, modalProps as any);
      setOpen(true);
    }
  };
};
