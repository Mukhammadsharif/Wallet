import React, { memo } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { AppIconType } from 'src/assets/AppIcon'
import { AppTouchable } from 'src/components/AppTouchable'
import { ThemeColorKey } from 'src/theme/colors'

interface Props {
  readonly onPress: () => void
  readonly style?: StyleProp<ViewStyle>
  readonly icon: AppIconType
  readonly tint: ThemeColorKey
}

export const NavigationHeaderIconButton: React.FC<Props> = memo(props => {
  return (
    <AppTouchable style={props.style} onPress={props.onPress}>
      {/*<AppIcon type={props.icon} tint={appTheme.color(props.tint)} />*/}
    </AppTouchable>
  )
})
