import { extendTheme } from '@chakra-ui/react'
import { palette } from './constants'

export const theme = extendTheme({
  fonts: {
    heading: 'Ubuntu, sans-serif',
    body: 'Ubuntu, sans-serif',
  },
  components: {
    Text: {
      baseStyle: () => ({
        color: 'white',
      }),
    },
    Heading: {
      baseStyle: () => ({
        color: 'white',
      }),
    },
    Button: {
      variants: {
        solid: () => ({
          color: 'white',
          background:
            'linear-gradient(#081429, #081429) padding-box, linear-gradient(45deg, rgba(211,71,21,1) 0%,rgba(246,151,117,1) 100%) border-box',
          borderRadius: '1em',
          border: '2px solid transparent',
          transition: '0.3s',
          _hover: {
            background:
              'linear-gradient(#081429, #081429) padding-box, linear-gradient(45deg, rgba(211,71,21,1) 0%,rgba(246,151,117,1) 100%) border-box',
            borderRadius: '1em',
            border: '2px solid transparent',
            transform: 'translate(0, -4px)',
          },
          _focus: {
            background:
              'linear-gradient(#081429, #081429) padding-box, linear-gradient(45deg, rgba(211,71,21,1) 0%,rgba(246,151,117,1) 100%) border-box',
            borderRadius: '1em',
            border: '2px solid transparent',
            transform: 'translate(0, -4px)',
          },
          _active: {
            background:
              'linear-gradient(#081429, #081429) padding-box, linear-gradient(45deg, rgba(211,71,21,1) 0%,rgba(246,151,117,1) 100%) border-box',
            borderRadius: '1em',
            border: '2px solid transparent',
            transform: 'translate(0, -4px)',
          },
        }),
        solid2: () => ({
          color: 'white',
          background: '#2c2b34',
          borderRadius: '1em',
          border: '1px solid transparent',
          transition: '0.3s',
          _hover: {
            background: '#2c2b34',
            borderRadius: '1em',
            border: '2px solid transparent',
            borderColor: palette.main.buttonLightBorder,
            transform: 'translate(0, -4px)',
          },
          _focus: {
            background: '#2c2b34',
            borderRadius: '1em',
            border: '2px solid transparent',
            borderColor: palette.main.buttonLightBorder,
            transform: 'translate(0, -4px)',
          },
          _active: {
            background: '#2c2b34',
            borderRadius: '1em',
            border: '2px solid transparent',
            borderColor: palette.main.buttonLightBorder,
            transform: 'translate(0, -4px)',
          },
        }),
        solid3: () => ({
          color: 'white',
          background: palette.main.button,
          borderRadius: '1em',
          border: '1px solid transparent',
          transition: '0.3s',

          _hover: {
            background: palette.main.buttonHover,
          },
          _focus: {
            background: palette.main.buttonHover,
          },
          _active: {
            background: palette.main.buttonHover,
          },
        }),
      },
    },
  },
  initialColorMode: 'dark',
})
