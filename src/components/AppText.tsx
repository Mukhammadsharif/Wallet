import React, { memo, PropsWithChildren } from 'react'
import { Platform, Text, TextProps, TextStyle } from 'react-native'
import { NativeText } from 'react-native/Libraries/Text/TextNativeComponent'

import { appTheme } from 'src/theme/AppThemeStore'
import { ThemeColorKey } from 'src/theme/colors'
import { fonts, ThemeFontKey } from 'src/theme/fonts'

interface _Props extends TextProps {
  readonly color?: ThemeColorKey
  readonly fontFamily?: ThemeFontKey
}

type Props = _Props &
  Pick<
    TextStyle,
    | 'fontWeight'
    | 'fontSize'
    | 'letterSpacing'
    | 'lineHeight'
    | 'textAlign'
    | 'textAlignVertical'
  >

const androidBold = ['600', '500', '700', '800']

export const fontWeight = (
  weight: TextStyle['fontWeight'] | undefined
): TextStyle['fontWeight'] | undefined => {
  if (!weight) return undefined
  if (Platform.OS === 'ios') return weight
  if (androidBold.includes(weight)) return 'bold'
  return 'normal'
}

export const AppText = memo<PropsWithChildren<Props>>(props => {
  const fontFamily = fonts[props.fontFamily ?? 'f14w400']
  const color = appTheme.color(props.color ?? 'mainBlack')
  const fontSize = props.fontSize ? ms(props.fontSize) : undefined
  return (
    <NativeText
      {...props}
      allowFontScaling={false}
      style={[
        {
          lineHeight: props.lineHeight ?? fontFamily.lineHeight,
          fontFamily: fontFamily.fontFamily,
          letterSpacing: props.letterSpacing,
          fontSize: fontSize ?? fontFamily.fontSize,
          textAlign: props.textAlign,
          fontWeight: fontWeight(props.fontWeight ?? fontFamily.fontWeight),
          color
        },
        props.style
      ]}
    />
  )
})

export const ReactText: React.FC<Props> = props => {
  const fontFamily = fonts[props.fontFamily ?? 'f14w400']
  const color = appTheme.color(props.color ?? 'mainBlack')
  const fontSize = props.fontSize ? ms(props.fontSize) : undefined

  return (
    <Text
      {...props}
      allowFontScaling={false}
      style={[
        {
          lineHeight: props.lineHeight ?? fontFamily.lineHeight,
          fontFamily: fontFamily.fontFamily,
          letterSpacing: props.letterSpacing,
          fontSize: fontSize ?? fontFamily.fontSize,
          textAlign: props.textAlign,
          fontWeight: fontWeight(props.fontWeight),
          color
        },
        props.style
      ]}
    />
  )
}
