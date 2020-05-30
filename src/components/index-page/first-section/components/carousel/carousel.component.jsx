import React, { useEffect } from 'react';
import Img from 'gatsby-image';
import map from 'lodash/map';

import swipeNextIcon from './icons/swipe-next.icon.svg';
import swipePrevIcon from './icons/swipe-prev.icon.svg';

import Styles from './carousel.module.scss';
import { activateSiemaSlider } from './carousel.actions';

// TODO: Refactor it
export const SwipeArrow = ({ swipeTo, className }) => {
  return (
    <button
      className={`${className} ${Styles.swipeArrow}`}
      data-siema-arrow={swipeTo}
      type="button"
    >
      <img
        className={Styles.swipeIcon}
        src={swipeTo === 'next' ? swipeNextIcon : swipePrevIcon}
        alt={`Стрелочка ${swipeTo === 'next' ? 'вправо' : 'влево'}. Посмотреть ${
          swipeTo === 'next' ? 'следующую' : 'предыдущую'
        } фотографию в слайдере.`}
      />
    </button>
  );
};

export const Carousel = ({ slides }) => {
  useEffect(() => {
    activateSiemaSlider();
  }, []);

  return (
    <div className={Styles.carousel}>
      {map(slides, (slide, i) => (
        <div className={Styles.slide} key={i}>
          <Img fluid={slide.img.asset.fluid} className={Styles.image} alt={slide.alt} />
        </div>
      ))}
    </div>
  );
};