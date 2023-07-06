import React, { memo } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import IcAccount from './icAccount.svg'
import IcArrowRight from './icArrowRight.svg'
import IcBackArrow from './icBackArrow.svg'
import IcBinance from './icBinance.svg'
import IcEthereum from './icEthereum.svg'
import IcHome from './icHome.svg'
import IcMail from './icMail.svg'
import IcMetamask from './icMetamask.svg'
import IcPolygon from './icPolygon.svg'
import IcRightDropdown from './icRightDropdown.svg'
import IcSearch from './icSearch.svg'
import IcSolana from './icSolana.svg'
import IcTron from './icTron.svg'
import IcVerified from './icVerified.svg'
import IcWalletConnect from './icWalletConnect.svg'
import IcWalletLogo from './icWalletLogo.svg'

export type AppIconType =
  | 'icAccount'
  | 'icArrowRight'
  | 'icBackArrow'
  | 'icBinance'
  | 'icEthereum'
  | 'icHome'
  | 'icMail'
  | 'icMetamask'
  | 'icPolygon'
  | 'icRightDropdown'
  | 'icSearch'
  | 'icSolana'
  | 'icTron'
  | 'icVerified'
  | 'icWalletConnect'
  | 'icWalletLogo'

export interface AppIconProps {
  readonly type: AppIconType
  readonly testID?: string
  readonly style?: StyleProp<ViewStyle>
  readonly isVisible?: boolean
  readonly tint?: string
  readonly stroke?: string
  readonly width?: number
  readonly height?: number
}

const components = {
  icAccount: IcAccount,
  icArrowRight: IcArrowRight,
  icBackArrow: IcBackArrow,
  icBinance: IcBinance,
  icEthereum: IcEthereum,
  icHome: IcHome,
  icMail: IcMail,
  icMetamask: IcMetamask,
  icPolygon: IcPolygon,
  icRightDropdown: IcRightDropdown,
  icSearch: IcSearch,
  icSolana: IcSolana,
  icTron: IcTron,
  icVerified: IcVerified,
  icWalletConnect: IcWalletConnect,
  icWalletLogo: IcWalletLogo
}

const getIcon = (
  type: AppIconType,
  tint: string | undefined,
  stroke: string | undefined,
  width: number | undefined,
  height: number | undefined
): JSX.Element | null | undefined => {
  if (!components[type]) return null

  const Icon = components[type]

  if (!!tint && !width && !height) return <Icon fill={tint} />

  if (!!tint && width && height)
    return <Icon fill={tint} width={width} height={height} />

  if (!!stroke && !width && !height) return <Icon stroke={stroke} />

  if (!!stroke && width && height)
    return <Icon stroke={stroke} width={width} height={height} />

  if (!stroke && !tint && width && height)
    return <Icon width={width} height={height} />

  return <Icon />
}

const AppIcon: React.FC<AppIconProps> = ({
  type,
  testID,
  style,
  isVisible,
  tint,
  stroke,
  width,
  height
}) => {
  if (isVisible === false) return null
  return (
    <View accessibilityLabel={testID} pointerEvents={'none'} style={style}>
      {getIcon(type, tint, stroke, width, height)}
    </View>
  )
}
export default memo(AppIcon)
