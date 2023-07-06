import { ParamListBase, useNavigation } from '@react-navigation/native'
import React, { JSX, useCallback } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'

import { COLORS } from '../../utils/color'

interface Title {
  title: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  onPressLeft?: string
  onPressRight?: string
  goBack?: boolean
}

const useTabHeader = ({ goBack, onPressLeft, onPressRight }) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const handlePressLeft = useCallback(() => {
    if (goBack) {
      navigation.goBack()
    } else if (onPressLeft) {
      navigation.navigate(onPressLeft)
    }
  }, [goBack, onPressLeft, navigation])

  const handlePressRight = useCallback(() => {
    if (onPressRight) {
      navigation.navigate(onPressRight)
    }
  }, [navigation, onPressRight])

  return { handlePressLeft, handlePressRight }
}

const TabHeader = ({
  title,
  onPressRight,
  onPressLeft,
  iconRight,
  iconLeft,
  goBack
}: Title): JSX.Element => {
  const { handlePressLeft, handlePressRight } = useTabHeader({
    goBack,
    onPressLeft,
    onPressRight
  })
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePressLeft}>{iconLeft}</TouchableOpacity>

      <Text style={styles.text(iconRight)}>{title}</Text>

      <TouchableOpacity onPress={handlePressRight}>
        {iconRight}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.white
  },
  text: (iconRight: any) => [styles.title, { marginLeft: iconRight ? 0 : -20 }]
})
export default TabHeader
