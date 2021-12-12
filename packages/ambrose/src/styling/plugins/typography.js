import isPlainObject from 'isobject'

function resolveTypography(style, theme) {
  for (const property in style) {
    const value = style[property]

    if (isPlainObject(value)) {
      style[property] = resolveTypography(value, theme)
    }
  }

  const { typographyVariant, typographySubStyle } = style

  if (typographyVariant) {
    const { subStyle = {}, ...typographyStyle } =
      theme.typography.variants[typographyVariant]

    const variantStyle =
      (typographySubStyle && subStyle[typographySubStyle]) || {}

    // remove custom properties
    delete style.typographyVariant
    delete style.typographySubStyle

    return Object.assign({ ...typographyStyle, ...variantStyle }, style)
  }

  return style
}

export default function typographyPlugin() {
  return (style, type, renderer, props) => resolveTypography(style, props.theme)
}
