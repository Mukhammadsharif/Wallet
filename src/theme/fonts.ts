import type { TextStyle } from 'react-native'
import { Platform } from 'react-native'

export const fonts = {
  f26w400: {
    fontSize: ms(26),
    lineHeight: Platform.OS === 'ios' ? ms(31) : undefined,
    fontWeight: '400'
    //fontFamily: FONTS.medium
  } as TextStyle,

  f20w400: {
    fontSize: ms(20),
    lineHeight: Platform.OS === 'ios' ? ms(24) : undefined,
    fontWeight: '400'
    //fontFamily: FONTS.medium
  } as TextStyle,

  f17w600: {
    fontSize: ms(17),
    lineHeight: Platform.OS === 'ios' ? ms(17) : undefined,
    fontWeight: '600'
    //fontFamily: FONTS.medium
  } as TextStyle,

  f16w700: {
    fontSize: ms(16),
    lineHeight: Platform.OS === 'ios' ? ms(19) : undefined,
    fontWeight: '700'
    //fontFamily: FONTS.medium
  } as TextStyle,

  f14w400: {
    fontSize: ms(14),
    lineHeight: Platform.OS === 'ios' ? ms(17) : undefined,
    fontWeight: '400'
    //fontFamily: FONTS.medium
  } as TextStyle,

  f14w600: {
    fontSize: ms(14),
    lineHeight: Platform.OS === 'ios' ? ms(17) : undefined,
    fontWeight: '600'
    //fontFamily: FONTS.medium
  } as TextStyle,

  f14w700: {
    fontSize: ms(14),
    lineHeight: Platform.OS === 'ios' ? ms(17) : undefined,
    fontWeight: '700'
    //fontFamily: FONTS.medium
  } as TextStyle,

  f12w500: {
    fontSize: ms(12),
    lineHeight: Platform.OS === 'ios' ? ms(14) : undefined,
    fontWeight: '500'
    //fontFamily: FONTS.medium
  } as TextStyle,

  f10w500: {
    fontSize: ms(10),
    lineHeight: Platform.OS === 'ios' ? ms(12) : undefined,
    fontWeight: '500'
    //fontFamily: FONTS.medium
  } as TextStyle,

  f10w400: {
    fontSize: ms(10),
    lineHeight: Platform.OS === 'ios' ? ms(12) : undefined,
    fontWeight: '400'
    //fontFamily: FONTS.medium
  } as TextStyle
}

export type ThemeFonts = typeof fonts
export type ThemeFontKey = keyof typeof fonts
