import React from 'react'

import Distance from '.'
import Text from '../text'

import createSnapshot from '../../testing/createSnapshot'

describe('<Distance />', () => {
  it('renders correctly with default props', () => {
    const snapshot = createSnapshot(<Distance>4000.50</Distance>)
    expect(snapshot).toMatchSnapshot()
  })
  it('renders correctly with custom unit', () => {
    const snapshot = createSnapshot(<Distance unit="km">4000.50</Distance>)
    expect(snapshot).toMatchSnapshot()
  })
  it('renders correctly when nested', () => {
    const snapshot = createSnapshot(
      <Text variant="heading">
        <Distance>4000</Distance>
      </Text>
    )
    expect(snapshot).toMatchSnapshot()
  })
})
