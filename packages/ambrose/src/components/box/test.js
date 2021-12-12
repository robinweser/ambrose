import React from 'react'

import Box from '.'

import createSnapshot from '../../testing/createSnapshot'

describe('<Box />', () => {
  it('renders correctly with default props', () => {
    const snapshot = createSnapshot(<Box>Children</Box>)
    expect(snapshot).toMatchSnapshot()
  })
  it('renders correctly with backgroundColor', () => {
    const snapshot = createSnapshot(
      <Box backgroundColor="lightgrey">Children</Box>
    )
    expect(snapshot).toMatchSnapshot()
  })
  it('renders correctly with paddingHorizontal', () => {
    const snapshot = createSnapshot(<Box paddingHorizontal={10}>Children</Box>)
    expect(snapshot).toMatchSnapshot()
  })
  it('renders correctly with paddingVertical', () => {
    const snapshot = createSnapshot(<Box paddingVertical={10}>Children</Box>)
    expect(snapshot).toMatchSnapshot()
  })
})
