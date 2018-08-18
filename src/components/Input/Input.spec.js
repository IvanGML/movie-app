import React from 'react';
import renderer from 'react-test-renderer';
import { Input } from './Input';


test('< Input />', () => {
  const component = renderer.create(
    <Input />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
