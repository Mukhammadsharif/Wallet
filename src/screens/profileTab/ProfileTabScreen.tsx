import { observer } from 'mobx-react'
import React, { useContext, useEffect } from 'react'

import { GlobalContext } from 'src/components/context/GlobalContext'
import { AppNavigationHeader } from 'src/components/navigation/AppNavigationHeader'
import { useAppTranslation } from 'src/i18n'
import { currentUserStore } from 'src/stores/CurrentUserStore'

export const ProfileTabScreen: React.FC = observer(() => {
  const t = useAppTranslation()
  const { setProfileScreen } = useContext(GlobalContext)

  useEffect(() => {
    if (currentUserStore.connectedWalletAddress) {
      setTimeout(() => {
        setProfileScreen(true)
      }, 2000)
    }
  }, [setProfileScreen])

  return <AppNavigationHeader title={t('profileTitle')} />
})
