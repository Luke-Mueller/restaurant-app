import React from 'react';

import Button from '../Button/Button';
import arrowLeft from '../../../assets/arrow-left.png';
import arrowRight from '../../../assets/arrow-right.png';

import './PageBtns.css';

const PageBtns = props => {
  let backBtn, forwardBtn;

  // DEFINES BACK BUTTON
  if (props.page !== 1) {
    backBtn = (
      <Button
        className="PageBtns__button"
        imgAlt="Left arrow"
        imgSrc={arrowLeft}
        imgClassName="PageBtns__img"
        onClick={() => props.setPage(props.page - 1)}
        type="button" />
    );
  } else backBtn = <div />;

  // DEFINES FORWARD BUTTON
  if (props.page < props.maxPages) {
    forwardBtn = (
      <Button
      className="PageBtns__button"
      imgAlt="Right arrow"
      imgSrc={arrowRight}
      imgClassName="PageBtns__img"
      onClick={() => props.setPage(props.page + 1)}
      type="button" />
    );
  } else forwardBtn = <div />;

  return (
    <div className="PageBtns">
      {backBtn}
      {forwardBtn}
    </div>
  );
};

export default PageBtns;
