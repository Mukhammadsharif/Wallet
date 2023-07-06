import React, { memo, useCallback, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import AppIcon from 'src/assets/AppIcon'
import { AppText } from 'src/components/AppText'
import { AppTouchable } from 'src/components/AppTouchable'
import { PrimaryButton } from 'src/components/buttons/PrimaryButton'
import { FlexSpacer, Spacer } from 'src/components/FlexSpace'
import { translate, useAppTranslation } from 'src/i18n'
import { WalletsList } from 'src/screens/profileTab/WalletsList'
import { sizes } from 'src/theme/sizes'
import { animateNextFrame } from 'src/utils/ui'

interface Props {
  readonly onClosePress: () => void
  readonly onWalletSelect: () => void
}

const useFetchWallets = () => {
  const [wallets] = useState([])

  return wallets
}

const useOnBackPress = (setSelected: (props: any) => void) =>
  useCallback(() => {
    animateNextFrame()
    setSelected(undefined)
  }, [setSelected])

const useOnWalletSelect = () => {
  return useCallback(async () => {}, [])
}

const BackButton: React.FC<{ setSelected: (props: any) => void }> = ({
  setSelected
}) => (
  <AppTouchable onPress={useOnBackPress(setSelected)} style={styles.backButton}>
    <AppIcon type={'icBackArrow'} />
  </AppTouchable>
)

const ActionText: React.FC<{ selected: undefined }> = ({ selected }) => (
  <AppText
    children={selected ? selected.name : translate('connectWithWallet')}
    fontFamily={'f20w400'}
    textAlign={'center'}
    style={styles.icon}
  />
)

export const ConnectWithWalletBottomSheet: React.FC<Props> = memo(props => {
  const t = useAppTranslation()
  const [selected, setSelected] = useState<undefined>()
  const wallets = useFetchWallets()
  const onWalletSelect = useOnWalletSelect()

  return (
    <View style={styles.container}>
      <AppIcon type={'icWalletLogo'} width={ms(100)} height={ms(100)} />
      <View style={styles.top}>
        {!!selected && <BackButton setSelected={setSelected} />}
        <ActionText selected={selected} />
      </View>
      {!selected && <FlexSpacer />}
      {!!selected && <Spacer vertical={65} />}
      {!selected && <WalletsList onPress={onWalletSelect} wallets={wallets} />}
      {selected && <WalletsList onPress={onWalletSelect} wallets={wallets} />}
      <FlexSpacer />
      <PrimaryButton
        onPress={() => {
          props.onClosePress()
        }}
        title={t('skipForNow')}
        type={'secondary'}
        style={styles.button}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: ms(16),
    paddingBottom: sizes.safeAreaBottomWithAndroid,
    height: '100%'
  },

  icon: {
    width: '100%',
    height: ms(32),
    paddingTop: ms(4)
  },

  button: {
    paddingHorizontal: ms(30)
  },

  backButton: {
    position: 'absolute',
    start: ms(32),
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: ms(32),
    height: ms(32),
    zIndex: 10
  },

  top: {
    flexDirection: 'row',
    width: '100%',
    height: ms(32),
    marginTop: ms(32)
  }
})
