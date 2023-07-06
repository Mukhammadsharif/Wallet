import React from 'react'
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle
} from 'react-native'

import AppIcon, { AppIconType } from 'src/assets/AppIcon'
import { AppText } from 'src/components/AppText'
import { appTheme } from 'src/theme/AppThemeStore'
import { ThemeColorKey } from 'src/theme/colors'
import { sizes } from 'src/theme/sizes'

interface Props {
  readonly title: string
  readonly onPress?: () => void
  readonly style?: StyleProp<ViewStyle>
  readonly disabled?: boolean
  readonly isLoading?: boolean
  readonly titleColor?: ThemeColorKey

  readonly startIcon?: AppIconType
  readonly startIconTintType?: 'tint' | 'stroke'

  readonly endIcon?: AppIconType
  readonly endIconTintType?: 'tint' | 'stroke'

  readonly type?: 'secondary' | 'default' | 'text'
  readonly size?: 'big' | 'small'
}

type StartIconProps = Pick<
  Props,
  'startIcon' | 'startIconTintType' | 'isLoading'
> & { disabledText: ThemeColorKey }

type EndIconProps = Pick<Props, 'endIcon' | 'endIconTintType' | 'isLoading'> & {
  disabledText: ThemeColorKey
}

const StartIcon: React.FC<StartIconProps> = props => {
  if (props.isLoading) return null
  if (!props.startIcon) return null
  const isTint = props.startIconTintType === 'tint'
  const color = appTheme.colors[props.disabledText]
  return (
    <AppIcon
      style={styles.me8}
      type={props.startIcon}
      tint={isTint ? color : undefined}
      stroke={!isTint ? color : undefined}
    />
  )
}

const EndIcon: React.FC<EndIconProps> = props => {
  if (props.isLoading) return null
  if (!props.endIcon) return null
  const isTint = props.endIconTintType === 'tint'
  const color = appTheme.colors[props.disabledText]
  return (
    <AppIcon
      style={styles.ms8}
      type={props.endIcon}
      tint={isTint ? color : undefined}
      stroke={!isTint ? color : undefined}
    />
  )
}

const Loading: React.FC<Pick<Props, 'isLoading'>> = props => {
  if (!props.isLoading) return null
  return <ActivityIndicator color={appTheme.colors.mainWhite} />
}

const Text: React.FC<
  Pick<Props, 'isLoading' | 'title' | 'type'> & { disabledText: ThemeColorKey }
> = props => {
  if (props.isLoading) return null
  return (
    <AppText
      fontFamily={props.type === 'secondary' ? 'f14w700' : 'f14w700'}
      children={props.title}
      color={props.disabledText}
    />
  )
}

const getBackground = (
  disabled: boolean | undefined,
  type: string | undefined
) => {
  if (type === 'secondary') return appTheme.colors.mainWhite
  if (type === 'text') return appTheme.colors.clear

  return disabled ? appTheme.colors.mainBlue : appTheme.colors.mainBlue
}

const getPressedBackground = (type: string | undefined) => {
  if (type === 'secondary') return appTheme.colors.mainWhite
  if (type === 'text') return 'transparent'

  return appTheme.colors.mainBlue
}

const getPressableStyle = (props: Props) => {
  const background = getBackground(props.disabled, props.type)
  const borderColor = props.type === 'secondary' ? 'mainBlue' : 'clear'
  const pressedBackground = getPressedBackground(props.type)
  const size = props.size ?? 'big'

  return ({ pressed }: { pressed: boolean }) => [
    styles.container,
    {
      backgroundColor:
        pressed && !props.disabled ? pressedBackground : background,
      height:
        size === 'big'
          ? sizes.primaryButtonHeight
          : sizes.primaryButtonHeightSmall,
      borderColor: appTheme.colors[borderColor],
      borderWidth: borderColor !== 'clear' ? ms(1) : 0
    },
    props.style
  ]
}

export const PrimaryButton: React.FC<Props> = props => {
  let disabledText: ThemeColorKey = props.disabled
    ? 'mainWhite'
    : props.titleColor ?? 'mainWhite'
  if (props.type === 'secondary' || props.type === 'text') {
    disabledText = props.disabled ? 'mainBlue' : props.titleColor ?? 'mainBlue'
  }

  const onPress = () => {
    if (props.isLoading || props.disabled === true) return
    props.onPress?.()
  }

  return (
    <Pressable onPress={onPress} style={getPressableStyle(props)}>
      <StartIcon {...props} disabledText={disabledText} />

      <Loading {...props} />

      <Text
        title={props.title}
        isLoading={props.isLoading}
        type={props.type}
        disabledText={disabledText}
      />

      <EndIcon {...props} disabledText={disabledText} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: ms(5),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  count: {
    marginStart: ms(8)
  },

  me8: {
    marginEnd: ms(8)
  },

  ms8: {
    marginStart: ms(8)
  }
})
