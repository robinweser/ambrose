import React from 'react'

import VisuallyHidden from '.'

import createSnapshot from '../../testing/createSnapshot'

describe('<VisuallyHidden />', () => {
  it('renders correctly with default props', () => {
    const snapshot = createSnapshot(<VisuallyHidden>Children</VisuallyHidden>)
    expect(snapshot).toMatchSnapshot()
  })
})
