/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import BottomNav from './BottomNav';

const mockProps = {
  onClick: jest.fn(),
  activeTab: 0,
};

describe('<BottomNav />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BottomNav {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<BottomNav{...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
