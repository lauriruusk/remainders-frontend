import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Actions from '../components/Actions';

test('renders content', () => {
  const show = false;
  const success = false;
  const hlog = true;
  const setUserName = true;
  const setPass = true;
  const component = render(
    <Actions
      show={show}
      success={success}
      hlog={hlog}
      setUsername={setUserName}
      setPass={setPass}
    />,
  );

  expect(component.container).toBeVisible();
});
