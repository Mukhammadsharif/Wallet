import React, { memo } from 'react'
import { StyleSheet } from 'react-native'

import AppIcon from 'src/assets/AppIcon'
import { AppText } from 'src/components/AppText'
import { AppTouchable } from 'src/components/AppTouchable'
import { commonStyles } from 'src/theme/AppThemeStore'

interface Props {
  readonly title: string
  readonly onPress?: () => void
}

export const SectionHeader: React.FC<Props> = memo(props => {
  return (
    <AppTouchable onPress={props.onPress} style={styles.base}>
      <AppText
        children={props.title}
        style={commonStyles.flexOne}
        fontFamily={'f16w700'}
      />

      {!!props.onPress && <AppIcon type={'icArrowRight'} />}
    </AppTouchable>
  )
})

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: ms(30),
    marginBottom: ms(16),
    ...commonStyles.basePH
  }
})
