import { Box, El, Text } from 'ambrose'

export default function TextInput({
  label,
  name,
  value,
  required,
  disabled,
  valid,
  errorMessage,
  onChange,
  onBlur,
  onFocus,
}) {
  return (
    <Box space={1}>
      <Box
        as="label"
        htmlFor={name}
        direction="row"
        alignItems="center"
        space={2}>
        <El
          as="input"
          type="checkbox"
          id={name}
          name={name}
          checked={value}
          required={required}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          extend={{
            cursor: 'pointer',
            padding: 10,
            fontSize: 'inherit',
            appearance: 'none',
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: 'grey',
            ':checked': {
              ':before': {
                marginLeft: -5,
                marginTop: -5,

                display: 'block',
                content: "''",
                width: 10,
                height: 10,
                backgroundColor: 'black',
                position: 'absolute',
              },
            },
            extend: [
              {
                condition: !valid,
                style: {
                  borderColor: 'foreground.alert',
                },
              },
            ],
          }}
        />
        <Text>{label}</Text>
      </Box>
      {errorMessage && !valid && (
        <Text color="foreground.alert">{errorMessage}</Text>
      )}
    </Box>
  )
}
