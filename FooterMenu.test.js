import React from 'react';
import FooterMenu from './FooterMenu';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const rendered = renderer.create(<FooterMenu />).toJSON();
  expect(rendered).toMatchSnapshot();
});

it('changes page on button click', () => {
    
});

it('sets active attribute on page change');