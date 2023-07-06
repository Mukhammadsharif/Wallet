import React, { JSX } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { COLORS } from 'src/utils/color'

interface ButtonProps {
  title: string
  onPress?: () => void
  width?: string | number
  height?: string | number
  backgroundColor: string
  titleColor?: string
}
const Button = ({
  title,
  onPress,
  width = '100%',
  height = 40,
  backgroundColor,
  titleColor = COLORS.white
}: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { width, height, backgroundColor }]}
    >
      <Text style={[{ color: titleColor }, styles.title]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 5,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'SFProDisplay-Medium',
    fontSize: 14,
    fontWeight: '600'
  }
})

export default Button
