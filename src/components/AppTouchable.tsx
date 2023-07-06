import React, { forwardRef, memo, PropsWithChildren } from 'react'
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native'

interface Props {
  readonly onPress?: () => void
  readonly activeOpacity?: number
  readonly isHapticEnabled?: boolean
  readonly onLongPress?: () => void
  readonly style?: StyleProp<ViewStyle>
  readonly hitSlop?: number
}

const AppTouchableMemo = memo<
  PropsWithChildren<Props> & {
    forwardedRef: React.Ref<TouchableOpacity>
  }
>(
  ({
    onPress,
    activeOpacity,
    style,
    hitSlop,
    forwardedRef,
    children,
    onLongPress
  }) => {
    const Component = onPress || onLongPress ? TouchableOpacity : View

    return (
      <Component
        ref={forwardedRef}
        hitSlop={
          hitSlop !== undefined
            ? { top: hitSlop, bottom: hitSlop, left: hitSlop, right: hitSlop }
            : undefined
        }
        onPress={onPress ? onPress : undefined}
        onLongPress={onLongPress}
        activeOpacity={onPress ? activeOpacity ?? 0.8 : 1}
        children={children}
        style={style}
      />
    )
  }
)

export const AppTouchable = forwardRef<
  TouchableOpacity,
  PropsWithChildren<Props>
>((props: Props, ref: React.Ref<any>) => (
  <AppTouchableMemo forwardedRef={ref} {...props} />
))
