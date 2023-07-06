import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { useAppTranslation } from 'src/i18n'
import { HomeHeader } from 'src/screens/homeTab/HomeHeader'
import { HomeTabStore } from 'src/screens/homeTab/HomeTabStore'
import { HotContentHorizontalList } from 'src/screens/homeTab/hotContent/HotContentHorizontalList'
import { LiveHorizontalList } from 'src/screens/homeTab/live/LiveHorizontalList'
import { PopularHorizontalList } from 'src/screens/homeTab/popular/PopularHorizontalList'
import { SectionHeader } from 'src/screens/homeTab/SectionHeader'
import { StoriesHorizontalList } from 'src/screens/homeTab/story/StoriesHorizontalList'
import { appTheme, commonStyles } from 'src/theme/AppThemeStore'
import { notImplemented } from 'src/utils/alert'

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: appTheme.colors.secondaryBackground
  }
})

export const HomeScreen: React.FC = () => {
  const t = useAppTranslation()
  const [store] = useState(() => new HomeTabStore())
  return (
    <>
      <HomeHeader store={store} />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={commonStyles.pb32}
        showsVerticalScrollIndicator={false}
      >
        <StoriesHorizontalList store={store} />
        <SectionHeader title={t('popular')} onPress={notImplemented} />
        <PopularHorizontalList store={store} />
        <SectionHeader title={t('hotContent')} onPress={notImplemented} />
        <HotContentHorizontalList store={store} />
        <SectionHeader title={t('live')} onPress={notImplemented} />
        <LiveHorizontalList store={store} />
      </ScrollView>
    </>
  )
}
