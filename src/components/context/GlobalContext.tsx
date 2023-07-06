import React, { createContext, useState } from 'react'

export interface ShowTopProps {
  showTopNav: boolean
  setShowTopNav: (showTopNav: boolean) => void
  profileScreen: boolean
  setProfileScreen: (profileScreen: boolean) => void
}

export const GlobalContext = createContext<ShowTopProps>({} as ShowTopProps)

interface Props {
  children: React.ReactNode
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [showTopNav, setShowTopNav] = useState(true)
  const [profileScreen, setProfileScreen] = useState<boolean>(false)
  return (
    <GlobalContext.Provider
      value={{ showTopNav, setShowTopNav, profileScreen, setProfileScreen }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
