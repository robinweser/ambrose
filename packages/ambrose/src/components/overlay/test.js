import React from 'react'

import Overlay from '.'

import createSnapshot from '../../testing/createSnapshot'

describe('<Overlay />', () => {
  it('renders correctly with visible true', () => {
    const snapshot = createSnapshot(
      <Overlay
        bg="grey100"
        top={0}
        right={0}
        left={0}
        bottom={0}
        visible={true}>
        Children
      </Overlay>
    )
    expect(snapshot).toMatchSnapshot()
  })
  it('renders correctly with visible false', () => {
    const snapshot = createSnapshot(
      <Overlay
        bg="grey100"
        top={0}
        right={0}
        left={0}
        bottom={0}
        visible={false}>
        Children
      </Overlay>
    )
    expect(snapshot).toMatchSnapshot()
  })
})
