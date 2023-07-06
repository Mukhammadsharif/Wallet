import { LayoutAnimation } from 'react-native'

export const animateNextFrame = () => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
}
