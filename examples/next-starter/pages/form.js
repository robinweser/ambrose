import React from 'react'
import Head from 'next/head'
import { Box, Text, Click, useField, useBoolField } from 'ambrose'

import TextInput from '../components/TextInput'
import Checkbox from '../components/Checkbox'

export default function Page() {
  const firstname = useField({
    name: 'firstname',
    showValidationOn: 'blur',
    required: true,
  })

  const lastname = useField({
    name: 'lastname',
    showValidationOn: 'blur',
    validation: {
      'Enter at least 2 characters.': (value) => value.length >= 2,
      'Enter only alphabetic letters.': /^[a-z]+$/gi,
    },
  })

  const newsletter = useBoolField({
    name: 'newsletter',
  })

  return (
    <Box
      as="main"
      id="main"
      role="main"
      aria-label="Main content"
      padding={10}
      space={[2, 3, 4, 5]}>
      <Click href="/">
        <Text extend={{ textDecoration: 'underline' }}>Back to Main</Text>
      </Click>
      <TextInput label="Firstname" {...firstname.props} />
      <TextInput label="Lastname" {...lastname.props} />
      <Checkbox label="Accept Newsletter" {...newsletter.props} />
    </Box>
  )
}
