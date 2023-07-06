import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useContext } from 'react'
import { Platform, StyleSheet } from 'react-native'

import { AppIconType } from 'src/assets/AppIcon'
import { AppTouchable } from 'src/components/AppTouchable'
import { GlobalContext } from 'src/components/context/GlobalContext'
import TabHeader from 'src/components/navigation/TabHeader'
import { HeaderIconNotification, HeaderIconSettings } from 'src/components/Svgs'
import { AppTabsParamList } from 'src/navigation.types'
import Profile from 'src/screens/profileTab/Profile'
import { AppTabBar } from 'src/screens/tabs/AppTabBar'
import { TabIcon } from 'src/screens/tabs/TabIcon'
import { appTheme } from 'src/theme/AppThemeStore'
import { sizes } from 'src/theme/sizes'
import { COLORS } from 'src/utils/color'

const Tabs = createBottomTabNavigator<AppTabsParamList>()

type Keys = keyof AppTabsParamList
const TabIcons: Record<Keys, AppIconType> = {
  TabHome: 'icHome',
  SearchTab: 'icSearch',
  MessagesTab: 'icMail',
  ProfileTab: 'icAccount'
}

const HomeScreenRoute = () =>
  require('src/screens/homeTab/HomeScreen').HomeScreen
const MessagesScreenRoute = () =>
  require('src/screens/messagesTab/MessagesScreen').MessagesScreen
const SearchScreenRoute = () =>
  require('src/screens/searchTab/SearchScreen').SearchScreen

const options = ({ route }: { route: { name: Keys } }) => {
  return {
    tabBarButton: (props: any) => <AppTouchable {...props} />,
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <TabIcon isFocused={focused} icon={TabIcons[route.name]} />
    ),
    tabBarLabelPosition: 'beside-icon',
    tabBarStyle: [
      styles.tabBar,
      { backgroundColor: appTheme.colors.mainWhite }
    ],
    tabBarLabel: '',
    tabBarItemStyle: styles.tabBarItem,
    tabBarLabelStyle: styles.tabBarLabel,
    tabBarIconStyle: styles.tabBarIcon,
    headerShown: true
  }
}

const getProfileTabOptions = showTopNav => ({
  headerTitle: () => (
    <TabHeader
      title={'Name Profile'}
      iconLeft={<HeaderIconSettings />}
      iconRight={<HeaderIconNotification />}
      onPressRight={'Notification'}
      onPressLeft={'Settings'}
    />
  ),
  headerLeft: () => null,
  headerStyle: {
    height: Platform.OS === 'ios' ? 117 : 55,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.mainBlack,
    backgroundColor: COLORS.mainBlack
  },
  headerTitleStyle: {
    height: 117,
    backgroundColor: COLORS.mainBlack
  },
  headerTransparent: showTopNav
})

const CustomAppTabBar = (props: any) => <AppTabBar tabBarProps={props} />

export const AppTabs: React.FC = () => {
  const { showTopNav } = useContext(GlobalContext)
  return (
    <Tabs.Navigator tabBar={CustomAppTabBar} screenOptions={options as any}>
      <Tabs.Screen
        name={'TabHome'}
        getComponent={HomeScreenRoute}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name={'SearchTab'}
        getComponent={MessagesScreenRoute}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name={'MessagesTab'}
        getComponent={SearchScreenRoute}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name={'ProfileTab'}
        component={Profile}
        options={getProfileTabOptions(showTopNav)}
      />
    </Tabs.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
    height: sizes.tabBarHeight,
    borderTopLeftRadius: ms(24),
    borderTopRightRadius: ms(24),
    paddingTop: (sizes.tabBarHeight - sizes.tabBarItemHeight) / 2,
    paddingHorizontal: ms(16),
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOpacity: 1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: -10 }
  },

  tabBarItem: {
    borderRadius: ms(10),
    height: sizes.tabBarItemHeight
  },

  tabBarLabel: {
    marginTop: -ms(0.5)
  },

  tabBarIcon: {
    marginTop: -ms(1)
  }
})
