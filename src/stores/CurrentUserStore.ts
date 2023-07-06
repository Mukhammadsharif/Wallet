import { action, makeObservable, observable } from 'mobx'

export class CurrentUserStore {
  constructor() {
    makeObservable(this)
  }

  @observable
  connectedWalletAddress?: string

  @action
  setConnectedWalletAddress = (value: string | undefined) => {
    this.connectedWalletAddress = value
  }
}

export const currentUserStore = new CurrentUserStore()
