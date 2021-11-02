import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import AlertForm from '../components/AlertForm';

test('renders content', () => {
  const component = render(
    <AlertForm />,
  );

  expect(component.container).toHaveTextContent(
    'Virhe!',
  );
});
