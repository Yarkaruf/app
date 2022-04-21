import React, { forwardRef, useEffect, useState } from "react";
import cx from "classnames";
import styles from "./file-input.module.scss";
import { Paragraph } from "shared/ui/core/components/paragraph";
import { Icon } from "shared/ui/core/components/icon";

interface IFileInput {
  id?: string;
  name?: string;
  className?: string;

  fileName?: string;
  onChange?: (e: React.ChangeEvent) => void;
}

export const FileInput = forwardRef<HTMLInputElement, IFileInput>((props: IFileInput, ref) => {
  const [fileName, setFileName] = useState(props.fileName ? props.fileName : "");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && e.target.files[0] && setFileName(e.target.files[0].name);
    props.onChange?.(e);
  };

  useEffect(() => {
    props.fileName && setFileName(props.fileName);
  }, [props.fileName]);

  return (
      <label htmlFor={props.id} className={cx(styles.container, props.className)}>
        <Icon  name="file" className={styles.icon} strokeIcon/>
        {fileName.length > 0 ? (
          <Paragraph>{fileName}</Paragraph>
        ) : (
          <Paragraph className={styles.placeholder}>Прикрепите файл (pdf, doc, jpg, png)</Paragraph>
        )}

      <input
        ref={ref}
        type="file"
        id={props.id}
        name={props.name}
        className={styles.input}
        onChange={e => {
          onInputChange(e);
        }}
      />
      </label>
  );
});
