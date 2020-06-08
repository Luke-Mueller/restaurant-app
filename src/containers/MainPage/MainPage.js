import React, { useState, useEffect } from 'react';

import Backdrop from '../../components/Backdrop/Backdrop';
import Details from '../../components/DetailComps/Details/Details';
import Header from '../../components/Header/Header';
import PageBtns from '../../components/ButtonComps/PageBtns/PageBtns';
import Table from '../../components/TableComps/Table/Table';

import './MainPage.css';

import { ITEMS_PER_PAGE } from '../../utils/globalVars';

const MainPage = props => {
  const [details, setDetails] = useState([]);
  const [paginatedResult, setPaginatedResult] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const maxPages = Math.ceil((props.queryResult.length) / ITEMS_PER_PAGE);

  const paginate = arr => {
    const paginatedArr = arr.filter(restaurant => {
      const idx = arr.indexOf(restaurant);
      const start = (props.page - 1) * ITEMS_PER_PAGE;
      const end = (start + ITEMS_PER_PAGE);
      if (idx >= start && idx < end) return restaurant;
      else return null;
    });
    setPaginatedResult(paginatedArr);
  };

  useEffect(() => {
    paginate(props.queryResult);
    // eslint-disable-next-line
  }, [props.page, props.queryResult]);

  const setDetailsHandler = details => {
    setDetails(details)
    setShowDetails(true);
  };

  let className, bClassName, dClassName;
  props.entered ?
    className = "MainPage active" :
    className = "MainPage";
  if (showDetails) {
    bClassName = "Backdrop active";
    dClassName = "Details active";
  } else {
    bClassName = "Backdrop";
    dClassName = "Details";
  };

  return (
    <div className={className}>
      <div className="MainPage__div" />
      <Header
        attireArr={props.attireArr}
        genreArr={props.genreArr}
        query={props.query} />
      <Table
        className="MainPage__table"
        ITEMS_PER_PAGE={ITEMS_PER_PAGE}
        page={props.page}
        paginatedResult={paginatedResult}
        setDetails={setDetailsHandler}
        setShowDetails={setShowDetails} />
      <PageBtns
        maxPages={maxPages}
        page={props.page}
        setPage={props.setPage} />
      <Backdrop className={bClassName}>
        <Details
          className={dClassName}
          details={details}
          restaurantArr={props.restaurantArr}
          setShowDetails={setShowDetails} />
      </Backdrop>
    </div>
  );
};

export default MainPage;
