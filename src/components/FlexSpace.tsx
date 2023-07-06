import React, { memo } from 'react'
import { View } from 'react-native'

import { commonStyles } from 'src/theme/AppThemeStore'

interface Props {
  readonly vertical?: number
  readonly horizontal?: number
}

const styles = StyleSheet.create({
  spacer: ({ horizontal, vertical }: any) => ({
    width: horizontal ? ms(horizontal) : undefined,
    height: vertical ? ms(vertical) : undefined
  }),
  flexSpacer: (minHeight: any) => {
    minHeight ? { flex: 1, minHeight: ms(minHeight) } : commonStyles.flexOne
  }
})

export const Spacer: React.FC<Props> = memo(({ vertical, horizontal }) => (
  <View style={styles.spacer({ horizontal, vertical })} />
))

export const FlexSpacer: React.FC<{ minHeight?: number }> = memo(props => (
  <View style={styles.flexSpacer(props.minHeight)} />
))
