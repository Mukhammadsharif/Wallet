import { observer } from 'mobx-react'
import React, { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'

import { AppText } from 'src/components/AppText'
import { PrimaryButton } from 'src/components/buttons/PrimaryButton'
import { translate } from 'src/i18n'
import { currentUserStore } from 'src/stores/CurrentUserStore'

export const ProfileTabWalletConnectedState: React.FC = observer(() => {
  const onDisconnectPress = useCallback(() => {
    currentUserStore.setConnectedWalletAddress(undefined)
  }, [])

  return (
    <View style={styles.center}>
      <AppText children={translate('walletConnected')} fontFamily={'f26w400'} />
      <AppText
        style={styles.description}
        textAlign={'center'}
        fontFamily={'f14w400'}
        color={'darkGray'}
        children={currentUserStore.connectedWalletAddress}
      />
      <PrimaryButton
        onPress={onDisconnectPress}
        title={translate('sharedDisconnect')}
        style={{ width: ms(200) }}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  description: {
    marginTop: ms(16),
    marginBottom: ms(30)
  }
})
