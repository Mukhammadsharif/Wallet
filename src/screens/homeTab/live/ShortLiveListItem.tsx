import React, { memo } from 'react'
import { Image, StyleSheet, View } from 'react-native'

import AppIcon from 'src/assets/AppIcon'
import { AppText } from 'src/components/AppText'
import { AppTouchable } from 'src/components/AppTouchable'
import { ShortPopularModel } from 'src/models/models'
import { appTheme } from 'src/theme/AppThemeStore'
import { notImplemented } from 'src/utils/alert'
import { getShortAddress } from 'src/utils/getShortAddress'

interface Props {
  readonly item: ShortPopularModel
}

const Address: React.FC<{ text: string }> = ({ text }) => (
  <AppTouchable onPress={notImplemented}>
    <AppText
      children={getShortAddress(text)}
      textAlign={'center'}
      color={'mainBlue'}
      fontFamily={'f10w500'}
    />
  </AppTouchable>
)

export const ShortLiveListItem: React.FC<Props> = memo(props => {
  return (
    <AppTouchable
      onPress={notImplemented}
      style={[styles.item, { backgroundColor: appTheme.colors.mainWhite }]}
    >
      <Image source={{ uri: props.item.mainPicture }} style={styles.picture} />
      <Image
        source={{ uri: props.item.avatar }}
        style={[styles.avatar, { borderColor: appTheme.colors.mainWhite }]}
      />
      <View style={styles.titleContainer}>
        <AppText
          fontFamily={'f10w500'}
          children={props.item.title + props.item.title}
          textAlign={'center'}
          numberOfLines={1}
          ellipsizeMode={'middle'}
          style={styles.title}
        />
        {props.item.isVerified && (
          <AppIcon type={'icVerified'} width={ms(16)} height={ms(16)} />
        )}
      </View>
      <Address text={props.item.address} />
    </AppTouchable>
  )
})

const styles = StyleSheet.create({
  item: {
    width: ms(140),
    height: ms(138),
    marginEnd: ms(10),
    borderRadius: ms(5),
    overflow: 'hidden'
  },

  picture: {
    width: '100%',
    height: ms(76),
    backgroundColor: 'red'
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
