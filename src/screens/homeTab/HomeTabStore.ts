import { action, makeObservable, observable } from 'mobx'

import {
  ShortHotContentModel,
  ShortLiveModel,
  ShortPopularModel,
  ShortStoryModel
} from 'src/models/models'

export class HomeTabStore {
  constructor() {
    makeObservable(this)
  }

  @observable
  searchInput = ''

  @observable
  stories: ShortStoryModel[] = [
    {
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      fullName: 'Crypto Girl'
    },
    {
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      fullName: 'Sandbox’s\nLAND’s'
    },
    {
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      fullName: 'Jake Ross'
    },
    {
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      fullName: 'Erased_\nmemories'
    },
    {
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      fullName: 'Aavegotchi'
    }
  ]

  @observable
  popular: ShortPopularModel[] = [
    {
      address: '0x167ewq9ewq98ewqhjcsakhjcxhjoe8q438739433c8',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      isVerified: true,
      mainPicture:
        'https://images.placeholders.dev/?width=140&height=138&bgColor=%23000&textColor=rgba(255,255,255,0.5)',
      title: 'Nonlight_Venice bitch'
    },
    {
      address: '0x167ewq9ewq98ewqhjcsakhjcxhjoe8q438739433c8',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      isVerified: false,
      mainPicture:
        'https://images.placeholders.dev/?width=140&height=138&bgColor=%23000&textColor=rgba(255,255,255,0.5)',
      title: 'NonMarketBears'
    },
    {
      address: '0x167ewq9ewq98ewqhjcsakhjcxhjoe8q438739433c8',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      isVerified: true,
      mainPicture:
        'https://images.placeholders.dev/?width=140&height=138&bgColor=%23000&textColor=rgba(255,255,255,0.5)',
      title: 'Nonlight_Venice bitch'
    },
    {
      address: '0x167ewq9ewq98ewqhjcsakhjcxhjoe8q438739433c8',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      isVerified: true,
      mainPicture:
        'https://images.placeholders.dev/?width=140&height=138&bgColor=%23000&textColor=rgba(255,255,255,0.5)',
      title: 'NonMarketBears'
    }
  ]

  @observable
  live: ShortLiveModel[] = [
    {
      address: '0x167ewq9ewq98ewqhjcsakhjcxhjoe8q438739433c8',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      isVerified: true,
      mainPicture:
        'https://images.placeholders.dev/?width=140&height=138&bgColor=%23000&textColor=rgba(255,255,255,0.5)',
      title: 'Nonlight_Venice bitch'
    },
    {
      address: '0x167ewq9ewq98ewqhjcsakhjcxhjoe8q438739433c8',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      isVerified: true,
      mainPicture:
        'https://images.placeholders.dev/?width=140&height=138&bgColor=%23000&textColor=rgba(255,255,255,0.5)',
      title: 'NonMarketBears'
    },
    {
      address: '0x167ewq9ewq98ewqhjcsakhjcxhjoe8q438739433c8',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      isVerified: true,
      mainPicture:
        'https://images.placeholders.dev/?width=140&height=138&bgColor=%23000&textColor=rgba(255,255,255,0.5)',
      title: 'Nonlight_Venice bitch'
    },
    {
      address: '0x167ewq9ewq98ewqhjcsakhjcxhjoe8q438739433c8',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      isVerified: true,
      mainPicture:
        'https://images.placeholders.dev/?width=140&height=138&bgColor=%23000&textColor=rgba(255,255,255,0.5)',
      title: 'NonMarketBears'
    }
  ]

  @observable
  hotContent: ShortHotContentModel[] = [
    {
      mainPicture: 'https://xsgames.co/randomusers/avatar.php?g=male',
      title: 'LAND (23, 182)',
      topBid: 'Top bid 1.121 wETH'
    },
    {
      mainPicture: 'https://xsgames.co/randomusers/avatar.php?g=male',
      title: 'LAND (-160, 69)',
      topBid: 'Top bid 1.121 wETH'
    },
    {
      mainPicture: 'https://xsgames.co/randomusers/avatar.php?g=male',
      title: 'LAND (-160, 69)',
      topBid: 'Top bid 1.121 wETH'
    },
    {
      mainPicture: 'https://xsgames.co/randomusers/avatar.php?g=male',
      title: 'LAND (-160, 69)',
      topBid: 'Top bid 1.121 wETH'
    }
  ]

  @action
  setSearchInput = (value: string) => {
    this.searchInput = value
  }

  @action
  resetSearchInput = () => {
    this.searchInput = ''
  }
}
