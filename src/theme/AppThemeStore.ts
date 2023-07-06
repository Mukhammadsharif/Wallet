import { action, computed, makeObservable, observable } from 'mobx'
import { StyleSheet, ViewStyle } from 'react-native'
import { ms as msOrigin, setGuideLines } from 'react-native-size-matters'

import {
  colors as themeColors,
  ThemeColorKey,
  ThemeColors,
  ThemeType
} from './colors'

setGuideLines(390, 926, 1)
export const ms = (size: number, factor?: number): number =>
  // isTablet() ? size : msOrigin(size, factor)
  msOrigin(size, factor)

declare global {
  function ms(size: number): number
}
global.ms = ms

class AppThemeStore {
  constructor() {
    makeObservable(this)
    //this.setTheme(Appearance.getColorScheme() ?? 'light')
    this.setTheme('light')
  }

  @observable
  theme!: ThemeType

  @action
  setTheme(theme: ThemeType) {
    this.theme = theme
  }

  @computed
  get colors(): ThemeColors {
    return themeColors[this.theme]
  }

  color(key: ThemeColorKey | undefined): string | undefined {
    if (key === undefined) return undefined
    return this.colors[key]
  }

  getModalStyle(radius?: number) {
    return {
      backgroundColor: this.colors.mainWhite,
      borderTopLeftRadius: radius ?? ms(16),
      borderTopRightRadius: radius ?? ms(16),
      overflow: 'hidden'
    } as ViewStyle
  }
}

export const appTheme = new AppThemeStore()

export const commonStyles = StyleSheet.create({
  flexOne: {
    flex: 1
  },

  basePH: {
    paddingHorizontal: ms(20)
  },

  mt8: {
    marginTop: ms(8)
  },

  pb32: {
    paddingBottom: ms(32)
  },

  flexRow: {
    flexDirection: 'row'
  },

  alignCenter: {
    alignItems: 'center'
  }
})
