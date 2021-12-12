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
      <label htmlFor={name}>{label}</label>
      <El
        as="input"
        id={name}
        name={name}
        value={value}
        required={required}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        extend={{
          padding: 10,
          fontSize: 'inherit',
          appearance: 'none',
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: 'grey',
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
      {errorMessage && !valid && (
        <Text color="foreground.alert">{errorMessage}</Text>
      )}
    </Box>
  )
}
