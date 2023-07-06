import React, { memo } from 'react'
import { Image, StyleSheet } from 'react-native'

import { AppText } from 'src/components/AppText'
import { AppTouchable } from 'src/components/AppTouchable'
import { ShortHotContentModel } from 'src/models/models'
import { notImplemented } from 'src/utils/alert'
import { getShortAddress } from 'src/utils/getShortAddress'

interface Props {
  readonly item: ShortHotContentModel
}

export const HotContentListItem: React.FC<Props> = memo(props => {
  return (
    <AppTouchable onPress={notImplemented} style={styles.item}>
      <Image source={{ uri: props.item.mainPicture }} style={styles.picture} />
      <AppText
        fontFamily={'f12w500'}
        children={props.item.title + props.item.title}
        textAlign={'center'}
        numberOfLines={1}
        ellipsizeMode={'middle'}
        style={styles.title}
      />
      <AppTouchable onPress={notImplemented}>
        <AppText
          children={getShortAddress(props.item.topBid)}
          textAlign={'center'}
          color={'mainBlue'}
          fontFamily={'f10w400'}
        />
      </AppTouchable>
    </AppTouchable>
  )
})

const styles = StyleSheet.create({
  item: {
    width: ms(100),
    marginEnd: ms(10)
  },

  picture: {
    width: ms(100),
    height: ms(100),
    borderRadius: ms(5),
    overflow: 'hidden',
    marginBottom: ms(10)
  },

  avatar: {
    width: ms(30),
    height: ms(30),
    borderRadius: ms(68) / 2,
    position: 'absolute',
    alignSelf: 'center',
    borderWidth: ms(2),
    top: ms(76 - 30 / 2)
  },

  titleContainer: {
    flexDirection: 'row',
    marginTop: ms(18),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: ms(16)
  },

  title: {
    marginEnd: ms(5)
  }
})
