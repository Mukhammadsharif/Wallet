import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'

import { AppText } from 'src/components/AppText'
import { appTheme } from 'src/theme/AppThemeStore'

interface Props {
  readonly title: string
}

export const BottomSheetHeader: React.FC<Props> = memo(props => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.handle,
          { backgroundColor: appTheme.colors.mainWhite200 }
        ]}
      />
      {!!props.title && (
        <AppText
          children={props.title}
          fontFamily={'f14w700'}
          textAlign={'center'}
        />
      )}
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    marginBottom: ms(8)
  },

  handle: {
    height: ms(5),
    borderRadius: ms(5 / 2),
    width: ms(36),
    marginTop: ms(8),
    marginBottom: ms(14),
    alignSelf: 'center'
  }
})
