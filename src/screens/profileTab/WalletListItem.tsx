import React, { memo } from 'react'
import { StyleSheet } from 'react-native'

import AppIcon from 'src/assets/AppIcon'
import { AppText } from 'src/components/AppText'
import { AppTouchable } from 'src/components/AppTouchable'
import { appTheme, commonStyles } from 'src/theme/AppThemeStore'

interface Props {
  readonly isLast: boolean
}

export const WalletListItem: React.FC<Props> = memo(props => {
  return (
    <AppTouchable
      style={[
        styles.item,
        {
          borderTopColor: appTheme.colors.divider,
          borderBottomWidth: props.isLast ? ms(1) : undefined,
          borderBottomColor: props.isLast ? appTheme.colors.divider : undefined
        }
      ]}
    >
      <AppText style={commonStyles.flexOne} fontFamily={'f14w600'} />
      <AppIcon type={'icRightDropdown'} />
    </AppTouchable>
  )
})

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    height: ms(54),
    marginHorizontal: ms(32),
    borderTopWidth: ms(1)
  },

  icon: {
    marginEnd: ms(10),
    width: ms(24),
    height: ms(24)
  }
})
