import React from 'react'

import Carousel from '.'
import Box from '../box'

import createSnapshot from '../../testing/createSnapshot'

describe('<Carousel />', () => {
  it('renders correctly with default props', () => {
    const snapshot = createSnapshot(
      <Carousel
        items={['foo', 'bar', 'baz']}
        itemMaxWidth={250}
        itemWidth="90%"
        renderItem={(item) => (
          <Box padding={10} bg="background.secondary">
            {item}
          </Box>
        )}
      />
    )
    expect(snapshot).toMatchSnapshot()
  })
})
