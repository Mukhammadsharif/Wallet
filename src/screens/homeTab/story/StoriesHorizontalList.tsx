import { observer } from 'mobx-react'
import React from 'react'
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native'

import { ShortStoryModel } from 'src/models/models'
import { HomeTabStore } from 'src/screens/homeTab/HomeTabStore'
import { ShortStoryListItem } from 'src/screens/homeTab/story/ShortStoryListItem'

interface Props {
  readonly store: HomeTabStore
}

export const StoriesHorizontalList: React.FC<Props> = observer(props => {
  const renderItem = (info: ListRenderItemInfo<ShortStoryModel>) => {
    return <ShortStoryListItem item={info.item} />
  }

  return (
    <FlatList
      horizontal
      style={styles.base}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      renderItem={renderItem}
      data={props.store.stories}
    />
  )
})

const styles = StyleSheet.create({
  base: {
    height: ms(103),
    marginTop: ms(20)
  },

  contentContainer: {
    paddingStart: ms(20),
    paddingEnd: ms(10)
  }
})
