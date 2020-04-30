import React from 'react';

import './PageBtns.css';

const PageBtns = props => {

  let backBtn; 
  let forwardBtn;
  if (props.page !== 1) {
    backBtn = (
      <button
        className="PageBtns__button"
        onClick={() => props.setPage(props.page - 1)}>
        <img
          className="PageBtns__img"
          src="/assets/images/arrow-left.png"
          alt="Left arrow" />
      </button>
    );
  } else {
    backBtn = <div></div>
  }

  if (props.page < props.maxPages) {
    forwardBtn = (
      <button
      className="PageBtns__button"
      onClick={() => props.setPage(props.page + 1)}>
      <img
        className="PageBtns__img"
        src="/assets/images/arrow-right.png"
        alt="Right arrow" />
    </button>
    );
  } else {
    forwardBtn = <div></div>
  }

  // const forward = () => { };
  return (
    <div className="PageBtns">
      {/* <button
        className="PageBtns__button"
        onClick={() => props.setPage(props.page - 1)}>
        <img
          className="PageBtns__img"
          src="/assets/images/arrow-left.png"
          alt="Left arrow" />
      </button> */}
      {backBtn}
      {/* <button
        className="PageBtns__button"
        onClick={() => props.setPage(props.page + 1)}>
        <img
          className="PageBtns__img"
          src="/assets/images/arrow-right.png"
          alt="Right arrow" />
      </button> */}
      {forwardBtn}
    </div>
  );
};

export default PageBtns;