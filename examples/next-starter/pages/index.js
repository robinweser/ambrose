import React, { useState } from 'react'
import Head from 'next/head'
import { Box, Text, Click, ThemeProvider } from 'ambrose'

export default function Page() {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeProvider theme={theme}>
      <Box
        as="main"
        id="main"
        role="main"
        aria-label="Main content"
        bg="background.primary"
        padding={10}
        space={[2, 3, 4, 5]}>
        <Click href="/form">
          <Text extend={{ textDecoration: 'underline' }}>Go To Form</Text>
        </Click>
        <Click
          as="button"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          extend={{
            color: 'foreground.primary',
            appearance: 'none',
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: 'foreground.primary',
            padding: 12,
            fontSize: 16,
            alignSelf: 'flex-start',
            extend: {
              condition: true,
              style: {
                ':active': {
                  color: 'foreground.primary',
                },
              },
            },
          }}>
          Theme: {theme}
        </Click>
        <Text>Body</Text>
        <Text subStyle="emphasis">Body Emphasis</Text>
        <Text color="foreground.alert">Body Alert</Text>
        <Text variant="heading">Heading</Text>
        <Text variant="heading" subStyle="emphasis">
          Heading Emphasis
        </Text>
        <Box bg="blue" alignSelf="flex-start" paddingHorizontal={[5, 10, 20]}>
          <Box bg="red" width={50} height={50} />
        </Box>
      </Box>
    </ThemeProvider>
  )
}
