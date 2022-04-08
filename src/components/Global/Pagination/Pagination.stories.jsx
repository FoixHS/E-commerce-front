import React from 'react';
import Pagination from '.';

export default {
  title: 'Pagination',
  component: Pagination,
};

export function PaginationExample() {
  <Pagination itemsPerPage={4} totalItems={20} />;
}
