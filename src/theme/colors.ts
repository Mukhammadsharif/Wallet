import { DefaultTheme } from '@react-navigation/native'

export type ThemeType = 'dark' | 'light'

export const toRgba = (hex: string, alpha: number) => {
  const match = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i)

  if (!match) {
    return 'rgba(0, 0, 0, 1)'
  }

  const first = parseInt(match[1]!, 16)
  const second = parseInt(match[2]!, 16)
  const third = parseInt(match[2]!, 16)

  return `rgba(${first}, ${second}, ${third}, ${alpha})`
}

export const light = {
  mainWhite: 'white',
  mainWhite200: '#E7ECF0',
  divider: '#E4E4E4',
  darkGray: '#687684',
  lightGray: '#A7A7A7',
  mainBlack: '#1F1F1F',
  mainBlue: '#1886FF',
  clear: 'transparent',
  border: '#E6E6E6',
  secondaryBackground: '#F7F7F7'
}

export const dark: typeof light = {
  ...light
}

export const AppNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: light.mainWhite,
    primary: 'black'
  }
}

export const colors = {
  light,
  dark
}

export type ThemeColors = typeof dark | typeof light
export type ThemeColorKey = keyof ThemeColors
