import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import DataGrid from '../components/DataGrid';

test('renders content', () => {
  const cards = [
    {

      to: 'test1@test.com',
      title: 'test title',
      message: 'this is a test message number 1',
      updated_at: '01-01-2021',
    },
    {
      to: 'test2@test.com',
      title: 'test title',
      message: 'this is a test message number 2',
      updated_at: '01-01-2021',
    },
    {
      to: 'test3@test.com',
      title: 'test title',
      message: 'this is a test message number 3',
      updated_at: '01-01-2021',
    },
    {
      to: 'test4@test.com',
      title: 'test title',
      message: 'this is a test message number 4',
      updated_at: '01-01-2021',
    },
    {
      to: 'test5@test.com',
      title: 'test title',
      message: 'this is a test message number 5',
      updated_at: '01-01-2021',
    },

  ];

  const component = render(
    <DataGrid rem={cards} />,
  );

  expect(component.container).toHaveTextContent(
    'this is a test message number',
  );
});
