import React, { memo } from 'react'
import { Image, StyleSheet } from 'react-native'

import { AppText } from 'src/components/AppText'
import { AppTouchable } from 'src/components/AppTouchable'
import { ShortStoryModel } from 'src/models/models'
import { commonStyles } from 'src/theme/AppThemeStore'
import { notImplemented } from 'src/utils/alert'

interface Props {
  readonly item: ShortStoryModel
}

export const ShortStoryListItem: React.FC<Props> = memo(props => {
  return (
    <AppTouchable onPress={notImplemented} style={styles.item}>
      <Image source={{ uri: props.item.avatar }} style={styles.image} />
      <AppText
        fontFamily={'f10w500'}
        children={props.item.fullName}
        numberOfLines={2}
        color={'darkGray'}
        textAlign={'center'}
        style={commonStyles.mt8}
      />
    </AppTouchable>
  )
})

const styles = StyleSheet.create({
  item: {
    width: ms(68),
    height: ms(103),
    marginEnd: ms(10)
  },

  image: {
    width: ms(68),
    height: ms(68),
    borderRadius: ms(68) / 2
  }
})
