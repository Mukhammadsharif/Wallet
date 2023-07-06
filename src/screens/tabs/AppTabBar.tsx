import { BottomTabBar } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { sizes } from 'src/theme/sizes'

export const AppTabBar: React.FC<{ tabBarProps: any }> = props => {
  return (
    <View style={styles.animatable}>
      <BottomTabBar {...props.tabBarProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  animatable: {
    zIndex: 9999999,
    justifyContent: 'space-between',
    bottom: 0,
    height: sizes.tabBarHeight
  }
})
