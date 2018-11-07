/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Search from './Search';

const mockProps = {
  onClick: jest.fn(),
  searchValue: '',
};

describe('<Search />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Search{...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
