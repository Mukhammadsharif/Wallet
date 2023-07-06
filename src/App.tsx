/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import {
  NavigationContainer,
  useNavigationContainerRef
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { LogBox, Platform, StyleSheet, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { GlobalProvider } from 'src/components/context/GlobalContext'
import TabHeader from 'src/components/navigation/TabHeader'
import { HeaderGoBackIcon, HeaderIconSettings } from 'src/components/Svgs'
import { RootStackParamList } from 'src/navigation.types'
import NFTImageDetail from 'src/screens/nft/NFTImageDetail'
import Notification from 'src/screens/notification/Notification'
import { OnboardingScreen } from 'src/screens/onboarding/OnboardingScreen'
import Settings from 'src/screens/settings/Settings'
import { AppTabs } from 'src/screens/tabs/AppTabs'
import { commonStyles } from 'src/theme/AppThemeStore'
import { AppNavigationTheme } from 'src/theme/colors'
import { COLORS } from 'src/utils/color'
import { breadcrumb } from 'src/utils/logs.utils'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'Warning: Cannot update a component (`Unknown`)',
  'Attempted to register RCTBridgeModule class AlertManager for the name',
  'Module AlertLoading requires main queue setup since it overrides',
  'Module NotificationBanner requires main queue setup since it overrides',
  '[mobx] Out of bounds',
  'Warning: Overriding previous layout animation',
  'VirtualizedLists should never be nested inside plain ScrollViews'
])

const Stack = createNativeStackNavigator<RootStackParamList>()

export const currentScreenName = {
  name: ''
}

const useOnStateChange = () => {
  const navigationRef = useNavigationContainerRef()
  const routeNameRef = useRef<string | undefined>(undefined)

  const onStateChange = useCallback(() => {
    const currentRouteName = navigationRef?.getCurrentRoute()?.name
    const previousRouteName = routeNameRef.current
    const params = navigationRef?.getCurrentRoute()?.params

    if (currentRouteName && previousRouteName !== currentRouteName) {
      currentScreenName.name = currentRouteName
      breadcrumb(currentRouteName, params, 'navigation')
    }

    routeNameRef.current = currentRouteName
  }, [navigationRef])

  return { navigationRef, onStateChange }
}

const useLoading = () => {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return isLoading
}

const style = StyleSheet.create({
  header: {
    height: Platform.OS === 'ios' ? 117 : 55,
    backgroundColor: COLORS.mainBlack,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 20 : 5
  }
})

const NFTImageDetailHeader = (props: any) => (
  <View style={style.header}>
    <TabHeader
      {...props}
      title={'Nft'}
      iconLeft={<HeaderGoBackIcon />}
      goBack={true}
    />
  </View>
)

const NotificationHeader = (props: any) => (
  <View style={style.header}>
    <TabHeader
      {...props}
      title={'Notifications'}
      iconLeft={<HeaderGoBackIcon />}
      goBack={true}
      iconRight={<HeaderIconSettings />}
      onPressRight={'Settings'}
    />
  </View>
)

const SettingsHeader = (props: any) => (
  <View style={style.header}>
    <TabHeader
      {...props}
      title={'Settings'}
      iconLeft={<HeaderGoBackIcon />}
      goBack={true}
    />
  </View>
)

const screens = [
  {
    name: 'OnboardingScreen',
    component: OnboardingScreen
  },
  {
    name: 'TabsStackScreen',
    component: AppTabs,
    options: {
      headerShown: false,
      gestureEnabled: false
    }
  },
  {
    name: 'NFTImageDetail',
    component: NFTImageDetail,
    options: {
      header: NFTImageDetailHeader,
      headerLeft: () => null,
      headerTransparent: false,
      headerShown: true,
      headerBackVisible: false
    }
  },
  {
    name: 'Notification',
    component: Notification,
    options: {
      header: NotificationHeader,
      headerLeft: () => null,
      headerTransparent: false,
      headerBackVisible: false
    }
  },
  {
    name: 'Settings',
    component: Settings,
    options: {
      headerLeft: () => null,
      header: SettingsHeader,
      headerTransparent: false,
      headerBackVisible: false
    }
  }
]

function App(): JSX.Element {
  const { navigationRef, onStateChange } = useOnStateChange()
  const isLoading = useLoading()
  if (isLoading) return <></>
  return (
    <GlobalProvider>
      <GestureHandlerRootView style={commonStyles.flexOne}>
        <BottomSheetModalProvider>
          <NavigationContainer
            ref={navigationRef}
            theme={AppNavigationTheme}
            onStateChange={onStateChange}
          >
            <Stack.Navigator
              screenOptions={{
                gestureEnabled: true,
                headerShown: true
              }}
            >
              {screens.map((props: any, i) => (
                <Stack.Screen {...props} key={i} />
              ))}
            </Stack.Navigator>
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </GlobalProvider>
  )
}

export default App
