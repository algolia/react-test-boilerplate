import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Button from '../Button.js';
import Label from '../Label.js';

describe('Button', () => {
  it('works', () => {
    let renderer = createRenderer();
    renderer.render(<Button name="John" click={() => {}} />);
    let actualElement = renderer.getRenderOutput();
    let expectedElement = <div onClick={() => {}}><Label name="John" /></div>;
    expect(actualElement).toEqualJSX(expectedElement);
  });

  it('has a click property', () => {
    let renderer = createRenderer();
    let hasClicked = false;
    let click = () => hasClicked = true;
    renderer.render(<Button name="John" click={click} />);
    renderer.getRenderOutput().props.onClick();
    expect(hasClicked).toBe(true);
  });
});
