import { observer } from 'mobx-react'
import React from 'react'
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native'

import { ShortHotContentModel } from 'src/models/models'
import { HomeTabStore } from 'src/screens/homeTab/HomeTabStore'
import { HotContentListItem } from 'src/screens/homeTab/hotContent/HotContentListItem'

interface Props {
  readonly store: HomeTabStore
}

export const HotContentHorizontalList: React.FC<Props> = observer(props => {
  const renderItem = (info: ListRenderItemInfo<ShortHotContentModel>) => {
    return <HotContentListItem item={info.item} />
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      renderItem={renderItem}
      data={props.store.hotContent}
    />
  )
})

const styles = StyleSheet.create({
  contentContainer: {
    paddingStart: ms(20),
    paddingEnd: ms(10)
  }
})
