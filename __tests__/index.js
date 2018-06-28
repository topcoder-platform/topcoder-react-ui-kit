import iface from '../src';

test('Package exports expected interface', () => {
  expect(iface).toMatchSnapshot();
});
