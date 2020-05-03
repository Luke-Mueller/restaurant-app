import React from 'react';

import States from '../utils/states';
import UserOption from '../components/UserInputComps/UserOption/UserOption';

export const CreateOptions = (attr, arr) => {
  let options;
  if (attr === 'state') {
    options = States.map((state, idx) => {
      return (
        <UserOption
          content={state.name}
          key={idx}
          value={state.abb} />
      );
    });
  } else {
    options = arr.map((option, idx) => {
      return (
        <UserOption
          content={option}
          key={idx}
          value={option} />
      );
    });
  };
  return options;
};

export const Filter = (arr, by, val, err) => {
  let resArr;
  if (by === 'text') {
    if (val !== '') {
      resArr = arr.filter(restaurant => {
        return (
          restaurant.attire.toUpperCase().includes(val.toUpperCase()) ||
          restaurant.city.toUpperCase().includes(val.toUpperCase()) ||
          restaurant.genre.toUpperCase().includes(val.toUpperCase()) ||
          restaurant.name.toUpperCase().includes(val.toUpperCase()) 
        );
      });
      if (!resArr.length) err = 'Your search found no results';
    } else resArr = arr;
  } else {
    if (val !== '') {
      resArr = arr.filter(restaurant => restaurant[by].includes(val));
      if (!resArr.length && !err) err = `There are no results in that ${by}`;
    } else resArr = arr;
  };
  return [resArr, err];
};

export const Save = (attr, res) => {
  const attrArr = [];
  const includesArr = [];
  res.forEach(element => {
    const elAttr = element[attr];
    const includes = elAttr.includes(',');
    if (includes) {
      const elAttrArr = elAttr.split(',');
      includesArr.push(elAttrArr);
    } else {
      const found = attrArr.includes(elAttr);
      if (!found) attrArr.push(elAttr);
    };
  });
  const flatIncludesArr = includesArr.flat();
  flatIncludesArr.forEach(abt => {
    const found = attrArr.includes(abt);
    if (!found) attrArr.push(abt);
  });
  return attrArr;
};
