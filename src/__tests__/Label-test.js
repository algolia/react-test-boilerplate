import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Label from '../Label.js';

describe('Label', () => {
  it('works', () => {
    let renderer = createRenderer();
    renderer.render(<Label name="John" />);
    let actualElement = renderer.getRenderOutput();
    let expectedElement = <span>Hello John</span>;
    expect(actualElement).toEqualJSX(expectedElement);
  });
});
