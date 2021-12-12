import React from 'react'

import CarouselItem from '.'

import createSnapshot from '../../testing/createSnapshot'

describe('<CarouselItem />', () => {
  it('renders correctly with default props', () => {
    const snapshot = createSnapshot(
      <CarouselItem maxWidth="250%">Hello</CarouselItem>
    )
    expect(snapshot).toMatchSnapshot()
  })
})
