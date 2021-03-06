/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import { fluidImageType } from '../../../../../utils/common-types';

import { useModal } from '../../../../../hooks/use-modal';

import css from './gallery.module.scss';

const Gallery = ({ galleryImages }) => {
  const [openedImageIdx, setOpenedImageIdx] = useState(null);

  const { openModal, Modal } = useModal();

  return (
    <ul className={css.gallery}>
      {map(galleryImages, (galleryImage, idx) => (
        <li
          key={idx}
          onClick={(e) => {
            setOpenedImageIdx(idx);
            openModal(e);
          }}
          className={css.item}
        >
          <Img fluid={galleryImage.img.asset.fluid} className={css.image} alt={galleryImage.alt} />
        </li>
      ))}
      {openedImageIdx !== null && (
        <Modal>
          <Img
            fluid={galleryImages[openedImageIdx].img.asset.fluid}
            style={{ width: '80vw', maxHeight: '80vh' }}
            alt={galleryImages[openedImageIdx].alt}
          />
        </Modal>
      )}
    </ul>
  );
};

Gallery.propTypes = {
  galleryImages: PropTypes.arrayOf(fluidImageType.isRequired).isRequired,
};

export default Gallery;
