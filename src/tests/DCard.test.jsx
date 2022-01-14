import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import DCard from '../components/DCard';

test('renders content', () => {
  const card = {
    to: 'test@test.com',
    title: 'test title',
    message: 'this is a test message',
    updated_at: '01-01-2021',
  };

  const component = render(
    <DCard rm={card} idx={0} />,
  );

  expect(component.container).toHaveTextContent(
    'this is a test message',
  );
});
