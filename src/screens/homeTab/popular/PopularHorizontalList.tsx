import { observer } from 'mobx-react'
import React from 'react'
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native'

import { ShortPopularModel } from 'src/models/models'
import { HomeTabStore } from 'src/screens/homeTab/HomeTabStore'
import { ShortPopularListItem } from 'src/screens/homeTab/popular/ShortPopularListItem'

interface Props {
  readonly store: HomeTabStore
}

export const PopularHorizontalList: React.FC<Props> = observer(props => {
  const renderItem = (info: ListRenderItemInfo<ShortPopularModel>) => {
    return <ShortPopularListItem item={info.item} />
  }

  return (
    <FlatList
      horizontal
      style={styles.base}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      renderItem={renderItem}
      data={props.store.popular}
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
