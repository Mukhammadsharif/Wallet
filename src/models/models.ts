export interface ShortStoryModel {
  readonly avatar: string
  readonly fullName: string
}

export interface ShortPopularModel {
  readonly mainPicture: string
  readonly avatar: string
  readonly title: string
  readonly isVerified: boolean
  readonly address: string
}

export interface ShortLiveModel {
  readonly mainPicture: string
  readonly avatar: string
  readonly title: string
  readonly isVerified: boolean
  readonly address: string
}

export interface ShortHotContentModel {
  readonly mainPicture: string
  readonly title: string
  readonly topBid: string
}
