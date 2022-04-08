import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchFilter from '.';

const searchFuncTest = () => {};

test('Render SearchFilter', async () => {
  render(<SearchFilter searchHandler={searchFuncTest} />);
  const items = await screen.getAllByRole('button');
  expect(items).toHaveLength(2);
});
