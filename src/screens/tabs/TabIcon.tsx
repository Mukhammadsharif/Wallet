import { observer } from 'mobx-react'
import React, { FC } from 'react'

import AppIcon, { AppIconType } from 'src/assets/AppIcon'
import { appTheme } from 'src/theme/AppThemeStore'

interface TabIconProps {
  icon: AppIconType
  isFocused: boolean
}
export const TabIcon: FC<TabIconProps> = observer(props => {
  let color = props.isFocused
    ? appTheme.colors.mainBlue
    : appTheme.colors.mainBlack
  return (
    <AppIcon
      type={props.icon}
      tint={
        props.icon === 'icHome' || props.icon === 'icSearch' ? color : undefined
      }
      stroke={
        props.icon === 'icMail' || props.icon === 'icAccount'
          ? color
          : undefined
      }
    />
  )
})
