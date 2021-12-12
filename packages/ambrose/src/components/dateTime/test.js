import React from 'react'

import DateTime from '.'
import Text from '../text'

import createSnapshot from '../../testing/createSnapshot'

describe('<DateTime />', () => {
  it('renders correctly with default props', () => {
    const snapshot = createSnapshot(
      <DateTime>{new Date(2021, 1, 15)}</DateTime>
    )
    expect(snapshot).toMatchSnapshot()
  })
  it('renders correctly when nested', () => {
    const snapshot = createSnapshot(
      <Text variant="heading">
        <DateTime>{new Date(2021, 1, 15)}</DateTime>
      </Text>
    )
    expect(snapshot).toMatchSnapshot()
  })
})
