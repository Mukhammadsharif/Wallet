import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import { AppText } from 'src/components/AppText'
import { AppTouchable } from 'src/components/AppTouchable'
import { AppNavigationHeader } from 'src/components/navigation/AppNavigationHeader'

const styles = StyleSheet.create({
  component: { flex: 1 }
})

export const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.navigate('TabsStackScreen')
  }, [navigation])

  return (
    <View style={styles.component}>
      <AppNavigationHeader title={'Onboarding'} />
      <AppTouchable onPress={() => navigation.navigate('TabsStackScreen')}>
        <AppText children={'Start'} />
      </AppTouchable>
    </View>
  )
}
