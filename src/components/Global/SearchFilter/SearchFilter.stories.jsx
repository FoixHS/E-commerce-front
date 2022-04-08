import React from 'react';
import SearchFilter from '.';

export default {
  title: 'SearchFilter',
  component: SearchFilter,
};

const searchFuncTest = () => {};

export function SearchFilterExample() {
  return <SearchFilter searchHandler={searchFuncTest} />;
}
