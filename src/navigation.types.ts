export type RootStackParamList = {
  OnboardingScreen: undefined
  TabsStackScreen: undefined
  NFTImageDetail: undefined
  Notification: undefined
  Settings: undefined
}

export type AppTabsParamList = {
  TabHome: undefined
  SearchTab: undefined
  MessagesTab: undefined
  ProfileTab: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
