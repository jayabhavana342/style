import React from 'react';
import Link from '../Link';
import renderer from 'react-test-renderer';

describe('Link tests', () => {
  it('Link changes the class when hovered', () => {
    const component = renderer.create(
      <Link page="http://www.facebook.com">Facebook</Link>,
    );
    let tree = component.toJSON();
    expect(tree.type).toBe('a');

    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree.props.className).toBe('hovered');

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree.props.className).toBe('normal');

  });
});

