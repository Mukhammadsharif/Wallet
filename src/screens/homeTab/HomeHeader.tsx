import { observer } from 'mobx-react'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import AppIcon from 'src/assets/AppIcon'
import { AppText } from 'src/components/AppText'
import { AppTouchable } from 'src/components/AppTouchable'
import { useAppTranslation } from 'src/i18n'
import { HomeTabStore } from 'src/screens/homeTab/HomeTabStore'
import { appTheme, commonStyles } from 'src/theme/AppThemeStore'
import { fonts } from 'src/theme/fonts'
import { sizes } from 'src/theme/sizes'

interface Props {
  readonly store: HomeTabStore
}

const HomeSearchInput: React.FC<Props> = ({ store }) => {
  const t = useAppTranslation()
  return (
    <TextInput
      style={[
        styles.input,
        { ...fonts.f14w400, color: appTheme.colors.mainBlack }
      ]}
      onChangeText={store.setSearchInput}
      value={store.searchInput}
      placeholder={t('homeSearchPlaceholder')}
      placeholderTextColor={appTheme.colors.lightGray}
    />
  )
}

export const HomeHeader: React.FC<Props> = observer(props => {
  return (
    <View style={[styles.base, { backgroundColor: appTheme.colors.mainWhite }]}>
      <AppIcon type={'icWalletLogo'} width={ms(32)} height={ms(32)} />
      <View
        style={[styles.inputContainer, { borderColor: appTheme.colors.border }]}
      >
        <AppIcon type={'icSearch'} tint={appTheme.colors.darkGray} />
        <HomeSearchInput store={props.store} />
      </View>
      {props.store.searchInput.length > 0 && (
        <AppTouchable
          style={{ marginStart: ms(10) }}
          onPress={props.store.resetSearchInput}
        >
          <AppText>Cancel</AppText>
        </AppTouchable>
      )}
    </View>
  )
})

const styles = StyleSheet.create({
  base: {
    height: ms(55) + sizes.safeAreaTop,
    paddingTop: sizes.safeAreaTop,
    flexDirection: 'row',
    alignItems: 'center',
    ...commonStyles.basePH
  },

  inputContainer: {
    flex: 1,
    height: ms(42),
    borderWidth: ms(1),
    marginStart: ms(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ms(13),
    borderRadius: ms(5)
  },

  input: {
    flex: 1,
    marginStart: ms(10)
  }
})
