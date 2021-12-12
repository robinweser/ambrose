import React from 'react'

import IconButton from '.'

import createSnapshot from '../../testing/createSnapshot'

const IconTest = (props) => <svg {...props} />

describe('<IconButton />', () => {
  it('renders correctly with default props', () => {
    const snapshot = createSnapshot(
      <IconButton
        label="Icon button"
        icon={IconTest}
        onClick={() => alert('Closed.')}
      />
    )
    expect(snapshot).toMatchSnapshot()
  })

  it('renders correctly with href', () => {
    const snapshot = createSnapshot(
      <IconButton label="Icon button" icon={IconTest} href="/" />
    )
    expect(snapshot).toMatchSnapshot()
  })
})
