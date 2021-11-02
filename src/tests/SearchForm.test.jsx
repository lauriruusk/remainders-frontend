/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { FormControl } from 'react-bootstrap';
import SearchForm from '../components/SearchForm';

test('render content', () => {
  <FormControl id="ctrl" />;
  // const control = this.FormControl.id;
  const component = render(
    <SearchForm />,
  );

  expect(component.container).toBeVisible();
});
