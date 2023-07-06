import React from 'react'
import { StyleSheet, View } from 'react-native'

import { AppNavigationHeader } from 'src/components/navigation/AppNavigationHeader'

const style = StyleSheet.create({ container: { flex: 1 } })

export const SearchScreen: React.FC = () => {
  return (
    <View style={style.container}>
      <AppNavigationHeader title={'Search'} />
    </View>
  )
}
