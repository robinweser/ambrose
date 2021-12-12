import React from 'react'

import Text from '.'

import createSnapshot from '../../testing/createSnapshot'

describe('<Text />', () => {
  it('renders correctly with default props', () => {
    const snapshot = createSnapshot(<Text>Children</Text>)
    expect(snapshot).toMatchSnapshot()
  })
  it('renders correctly with variant', () => {
    const snapshot = createSnapshot(<Text variant="heading">Children</Text>)
    expect(snapshot).toMatchSnapshot()
  })
  it('renders correctly with substyle', () => {
    const snapshot = createSnapshot(<Text subStyle="emphasis">Children</Text>)
    expect(snapshot).toMatchSnapshot()
  })
  it('renders correctly with color', () => {
    const snapshot = createSnapshot(<Text color="green">Children</Text>)
    expect(snapshot).toMatchSnapshot()
  })
  it('renders correctly when nested', () => {
    const snapshot = createSnapshot(
      <Text>
        Nested <Text subStyle="emphasis">Children</Text>
      </Text>
    )
    expect(snapshot).toMatchSnapshot()
  })
  it('renders correctly when aligned', () => {
    const snapshot = createSnapshot(<Text align="right">Children</Text>)
    expect(snapshot).toMatchSnapshot()
  })
  it('renders correctly when transformed', () => {
    const snapshot = createSnapshot(
      <Text>
        Nested <Text transform="uppercase">children</Text>
      </Text>
    )
    expect(snapshot).toMatchSnapshot()
  })
  it('renders correctly when nesting colosr', () => {
    const snapshot = createSnapshot(
      <Text color="primary">
        Nested <Text subStyle="emphasis">Children</Text>
      </Text>
    )
    expect(snapshot).toMatchSnapshot()
  })
})
