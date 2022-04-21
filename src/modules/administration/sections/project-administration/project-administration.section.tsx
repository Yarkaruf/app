import React, { useState } from "react";
import { Container, Paragraph, Section } from "shared/ui/core/components";
import { SectionHeading, SimpleCarousel } from "shared/ui/components";
import styles from "./project-administration.module.scss";
import Image from "next/image";
import cx from "classnames";
import { useWindowSize } from "shared/ui/core/utils/hooks/useWindowSize";

import slide1Image from "/public/img/slide-desktop1.png";
import slide2Image from "/public/img/slide-desktop2.png";
import slide3Image from "/public/img/slide-desktop3.png";
import slide1Image_tablet from "/public/img/slide-tablet1.png";
import slide2Image_tablet from "/public/img/slide-tablet2.png";
import slide3Image_tablet from "/public/img/slide-tablet3.png";
import slide1Image_mobile from "/public/img/slide-mobile1.png";
import slide2Image_mobile from "/public/img/slide-mobile2.png";
import slide3Image_mobile from "/public/img/slide-mobile3.png";

interface IProjectAdministrationSection {}

const slides = [
  {
    imgSrc: slide1Image,
    tabletImgSrc: slide1Image_tablet,
    mobileImgSrc: slide1Image_mobile,
    label: "Запуск за 1 минуту: виртуальный сервер готов к работе сразу после покупки"
  },
  {
    imgSrc: slide2Image,
    tabletImgSrc: slide2Image_tablet,
    mobileImgSrc: slide2Image_mobile,
    label: "Легкая смена условий обслуживания: быстрое переключение с помесячной оплаты на почасовую и обратно"
  },
  {
    imgSrc: slide3Image,
    tabletImgSrc: slide3Image_tablet,
    mobileImgSrc: slide3Image_mobile,
    label:
      "Простота работы: интуитивно понятный интерфейс, разработанный с учетом ваших ожиданий, на основе нашего опыта"
  }
];

export const ProjectAdministrationSection = (props: IProjectAdministrationSection) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideClassName, setCurrentSlideClassName] = useState(`text_block_${currentSlide}`);
  const [labelVisible, setLabelVisible] = useState(true);

  const updateCurrentSlide = (index: number) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);

      setLabelVisible(false);

      setTimeout(() => {
        setCurrentSlideClassName(`text_block_${index}`);
        setLabelVisible(true);
      }, 500);
    }
  };

  const windowWidth = useWindowSize().width;

  const getImageSrc = (slide: { imgSrc: string; tabletImgSrc: string; mobileImgSrc: string; label: string }) => {
    if (windowWidth > 767) {
      return slide.tabletImgSrc;
    }

    if (windowWidth > 1199) {
      return slide.imgSrc;
    }

    return slide.mobileImgSrc;
  };

  return (
    <>
      <h2 className={styles.project_title}>Управление проектом в пару кликов</h2>
      <p className={styles.project_text}>
        Простая и&nbsp;интуитивно понятная панель управления&nbsp;&mdash; минимум времени при настройке инфраструктуры
      </p>

      <Section className={styles.section}>
        <Container>
          <div className={styles.carousel_wrap}>
            <div className={styles.carousel}>
              <SimpleCarousel onChange={updateCurrentSlide} autoPlay interval={7000}>
                {slides.map((it, key) => (
                  <div className={styles.slide} key={key}>
                    {windowWidth !== 0 && (
                      <Image
                        src={getImageSrc(it) as any}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        quality={40}
                        priority
                      />
                    )}
                  </div>
                ))}
              </SimpleCarousel>
            </div>
          </div>
        </Container>
      </Section>

      <div className={cx(styles.text_block, labelVisible && styles.visible, styles[currentSlideClassName])}>
        <Paragraph level={2} weight={700} className={styles.text}>
          {slides[currentSlide].label}
        </Paragraph>
      </div>

      <div
        className={cx(styles.text_block, labelVisible && currentSlide === 1 && styles.visible, styles.text_block_1_2)}
      >
        <Paragraph level={3} className={styles.text}>
          Ежемесячная оплата 750 ₽ / мес
        </Paragraph>

        <Paragraph level={3} className={cx(styles.text, styles.text_date)}>
          оплачено до 8 Сентября 2021
        </Paragraph>

        <Paragraph level={3} weight={700} className={cx(styles.text_link)}>
          оплачено до 8 Сентября 2021
        </Paragraph>
      </div>
    </>
  );
};
