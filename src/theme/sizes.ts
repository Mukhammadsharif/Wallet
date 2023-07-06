import { Dimensions, StatusBar } from 'react-native'
import { safeArea } from 'react-native-safe-area'

import { ms } from './AppThemeStore'

export const sizes = {
  modalHeaderHeight: ms(40),

  get safeAreaBottom() {
    return safeArea.bottomSafeArea
  },

  get bottomSheetMaxHeight() {
    return this.screenHeight * 0.9
  },

  get safeAreaTop() {
    return safeArea.topSafeArea
  },

  get safeAreaTopWithAndroid() {
    return safeArea.topSafeArea > 0 ? safeArea.topSafeArea : ms(16)
  },

  get safeAreaBottomWithAndroid() {
    return safeArea.bottomSafeArea > 0 ? safeArea.bottomSafeArea : ms(16)
  },

  get headerHeight() {
    return ms(40)
  },

  get tabBarHeight() {
    return ms(52) + this.safeAreaBottom
  },

  get tabBarItemHeight() {
    return ms(36)
  },

  get statusBarHeight() {
    return this.safeAreaTop + (StatusBar.currentHeight ?? 0)
  },

  get modalScreenHeight() {
    return Dimensions.get('window').height - this.safeAreaTop
  },

  get primaryButtonHeight() {
    return ms(40)
  },

  get primaryButtonHeightSmall() {
    return ms(36)
  },

  get androidStatusBar() {
    return StatusBar.currentHeight ?? 0
  },

  get screenWidth() {
    return Dimensions.get('window').width
  },

  get screenHeight() {
    return Dimensions.get('window').height
  }
}
