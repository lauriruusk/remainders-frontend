import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import LoginForm from '../components/LoginForm';

test('renders content', () => {
  const hlog = true;
  const setUserName = true;
  const setPass = true;
  const component = render(
    <LoginForm hlog={hlog} setUsername={setUserName} setPass={setPass} />,
  );

  expect(component.container).toHaveTextContent(
    'Käyttäjä',
  );
});
