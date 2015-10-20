import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import Button from './Button.js';
import Label from './Label.js';

describe('Button', () => {
  it('works', () => {
    let renderer = createRenderer();
    renderer.render(<Button name="John" />);
    let actualElement = renderer.getRenderOutput();
    let expectedElement = <div><Label name="Marie" /></div>;
    expect(actualElement).toEqual(expectedElement);
  });
});
