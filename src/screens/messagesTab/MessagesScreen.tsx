import React from 'react'
import { StyleSheet, View } from 'react-native'

import { AppNavigationHeader } from 'src/components/navigation/AppNavigationHeader'

const styles = StyleSheet.create({
  component: { flex: 1 }
})

export const MessagesScreen: React.FC = () => {
  return (
    <View style={styles.component}>
      <AppNavigationHeader title={'Messages'} />
    </View>
  )
}
