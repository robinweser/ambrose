const style = {
  height: 0,
  overflow: 'hidden',
  visibility: 'hidden',
}

export default function useHidden() {
  return {
    props: {
      'aria-hidden': true,
    },
    style,
  }
}
