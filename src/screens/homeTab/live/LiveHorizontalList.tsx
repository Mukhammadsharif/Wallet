import { observer } from 'mobx-react'
import React from 'react'
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native'

import { ShortPopularModel } from 'src/models/models'
import { HomeTabStore } from 'src/screens/homeTab/HomeTabStore'
import { ShortLiveListItem } from 'src/screens/homeTab/live/ShortLiveListItem'

interface Props {
  readonly store: HomeTabStore
}

export const LiveHorizontalList: React.FC<Props> = observer(props => {
  const renderItem = (info: ListRenderItemInfo<ShortPopularModel>) => {
    return <ShortLiveListItem item={info.item} />
  }

  return (
    <FlatList
      horizontal
      style={styles.base}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      renderItem={renderItem}
      data={props.store.live}
    />
  )
})

const styles = StyleSheet.create({
  base: {
    height: ms(138)
  },

  contentContainer: {
    paddingStart: ms(20),
    paddingEnd: ms(10)
  }
})
