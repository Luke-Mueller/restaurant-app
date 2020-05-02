import React, { useState, useEffect } from 'react';

import Header from '../../components/Header/Header';
import PageBtns from '../../components/PageBtns/PageBtns';
import Table from '../../components/Table/Table';

import './MainPage.css';

import { ITEMS_PER_PAGE } from '../../utils/globalVars';

const MainPage = props => {
  const [paginatedResult, setPaginatedResult] = useState([]);

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

  let classname;
  props.entered ?
    classname = "MainPage active" :
    classname = "MainPage";

  return (
    <div className={classname}>
      <div className="MainPage__div" />
      <Header
        genresArr={props.genresArr}
        query={props.query} />
      <Table
        className="MainPage__table"
        ITEMS_PER_PAGE={ITEMS_PER_PAGE}
        page={props.page}
        paginatedResult={paginatedResult} />
      <PageBtns
        maxPages={maxPages}
        page={props.page}
        setPage={props.setPage} />
    </div>
  );
};

export default MainPage;
