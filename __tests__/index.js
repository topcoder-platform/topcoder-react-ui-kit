import iface from '../src';

test('Package exports expected interface', () => {
  expect(iface).toHaveProperty('Avatar');

  /* components/buttons */
  expect(iface).toHaveProperty('Button');
  expect(iface).toHaveProperty('DangerButton');
  expect(iface).toHaveProperty('GhostButton');
  expect(iface).toHaveProperty('PrimaryButton');
  expect(iface).toHaveProperty('SecondaryButton');

  /* components/tags */
  expect(iface).toHaveProperty('Tag');
  expect(iface).toHaveProperty('DataScienceTrackTag');
  expect(iface).toHaveProperty('DataScienceTrackEventTag');
  expect(iface).toHaveProperty('DesignTrackTag');
  expect(iface).toHaveProperty('DesignTrackEventTag');
  expect(iface).toHaveProperty('DevelopmentTrackTag');
  expect(iface).toHaveProperty('DevelopmentTrackEventTag');
});
