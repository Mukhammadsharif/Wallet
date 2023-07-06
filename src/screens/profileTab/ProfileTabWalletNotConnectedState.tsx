import React from 'react'
import { StyleSheet, View } from 'react-native'

import { AppText } from 'src/components/AppText'
import { PrimaryButton } from 'src/components/buttons/PrimaryButton'
import { translate } from 'src/i18n'

export const ProfileTabWalletNotConnectedState: React.FC = () => {
  return (
    <View style={styles.center}>
      <AppText
        children={translate('walletNotConnected')}
        fontFamily={'f26w400'}
      />
      <AppText
        style={styles.description}
        textAlign={'center'}
        fontFamily={'f14w400'}
        color={'darkGray'}
        children={translate('walletNotConnectedDescription')}
      />
      <PrimaryButton
        title={translate('sharedConnect')}
        style={{ width: ms(200) }}
      />
    </View>
  )
}

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
