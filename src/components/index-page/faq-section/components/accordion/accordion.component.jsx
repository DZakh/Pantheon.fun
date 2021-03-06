/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import map from 'lodash/map';

import { Text } from '../../../../common/text';

import css from './accordion.module.scss';

const Accordion = ({ className, questionsAndAnswers }) => {
  const [openedPanel, setOpenedPanel] = useState(null);
  const accordionRef = useRef(null);

  return (
    <ul ref={accordionRef} className={cx(className, css.accodion)}>
      {map(questionsAndAnswers, (qa, idx) => {
        const isOpen = openedPanel === idx;
        const getAnswerElHeight = () => {
          const HEIGHT_CORRECTION = 20;

          return (
            accordionRef.current.children[idx].querySelector('div').scrollHeight + HEIGHT_CORRECTION
          );
        };

        return (
          <li
            key={idx}
            className={cx(css.panel, { [css.opened]: isOpen })}
            onClick={() => {
              setOpenedPanel(isOpen ? null : idx);
            }}
          >
            <h3 className={css.question}>{qa.question}</h3>
            <div
              className={css.answer}
              style={{
                height: isOpen ? getAnswerElHeight() : 0,
              }}
            >
              <Text>{qa.answer}</Text>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

Accordion.propTypes = {
  className: PropTypes.string,
  questionsAndAnswers: PropTypes.arrayOf(
    PropTypes.exact({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Accordion.defaultProps = {
  className: '',
};

export default Accordion;
