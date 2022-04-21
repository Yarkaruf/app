import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./simple-carousel.module.scss";
import cx from "classnames";
import { Props } from "react-responsive-carousel/lib/ts/components/Carousel";

interface ISimpleCarousel extends Partial<Props> {
  children: React.ReactChild[];

  onChange?: (index: number) => void;
}

export const SimpleCarousel = (props: ISimpleCarousel) => {
  return (
    <Carousel
      {...props}
      className={styles.carousel}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      emulateTouch
      infiniteLoop
      onChange={props.onChange}
      renderIndicator={(clickHandler, isSelected) => (
        <div onClick={clickHandler} className={cx(styles.dot, isSelected && styles.active)} />
      )}
    >
      {props.children}
    </Carousel>
  );
};
