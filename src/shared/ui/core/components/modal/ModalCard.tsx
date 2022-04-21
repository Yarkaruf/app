import React, { useRef } from "react";
import { KeyName, useClickOutside, useKeyDown } from "@yoldi/utils/hooks";
import cx from "classnames";

export interface IModalCard {
  children?: React.ReactNode;
  close: () => void;
  title?: React.ReactNode;

  className?: string;
}

export const ModalCard = (props: IModalCard) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, props.close);
  useKeyDown(KeyName.ESC, props.close);

  return (
    <div className={cx("modal__content", props.className)} ref={ref}>
      <button className="modal__close" onClick={props.close} />
      {props.children}
    </div>
  );
};
