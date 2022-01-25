import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Header from '../components/Header';

test('renders content', () => {
  const component = render(
    <Header />,
  );

  expect(component.container).toHaveTextContent(
    'Muistutusten selaus',
  );
});
