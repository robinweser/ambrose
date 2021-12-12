export default {
  baselineGrid: 4,
  breakpoints: {
    small: '@media (min-width: 560px)',
    medium: '@media (min-width: 800px)',
    large: '@media (min-width: 1024px)',
    huge: '@media (min-width: 1300px)',
  },
  colors: {
    black: 'black',
    white: 'white',
    red100: 'rgb(255, 150, 150)',
    red900: 'rgb(255, 0, 0)',
    grey100: 'rgb(240, 240, 240)',
    grey900: 'rgb(20, 20, 20)',
  },
  typography: {
    defaultVariant: 'body',
    defaultColor: 'foreground.primary',
    variants: {
      body: {
        fontSize: 16,
        fontWeight: 400,
        subStyle: {
          emphasis: {
            fontWeight: 700,
          },
        },
      },
      heading: {
        fontSize: 30,
        fontWeight: 700,
      },
    },
  },
}
