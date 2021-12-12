import React from 'react'

import Currency from '.'
import Text from '../text'

import createSnapshot from '../../testing/createSnapshot'

describe('<Currency />', () => {
  it('renders correctly with default props', () => {
    const snapshot = createSnapshot(<Currency>4000.50</Currency>)
    expect(snapshot).toMatchSnapshot()
  })
  it('renders correctly when nested', () => {
    const snapshot = createSnapshot(
      <Text variant="heading">
        <Currency>4000.50</Currency>
      </Text>
    )
    expect(snapshot).toMatchSnapshot()
  })
})
