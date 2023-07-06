import { NavigationProp, useNavigation } from '@react-navigation/native'
import React, { memo, PropsWithChildren, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

import { AppText } from 'src/components/AppText'
import { NavigationHeaderIconButton } from 'src/components/navigation/NavigationHeaderIconButton'
import { appTheme } from 'src/theme/AppThemeStore'
import { sizes } from 'src/theme/sizes'

interface Props {
  readonly title?: string | React.ReactElement
  readonly titleAlign?: 'center' | 'left'
  readonly hideBack?: boolean
  readonly right?: () => React.ReactElement
  readonly modal?: boolean
  readonly titleLarge?: boolean
  readonly isLoading?: boolean
}

const getTitleStyle = (
  titleAlign: string | undefined,
  hideBack: boolean | undefined,
  rightIconsSize: number
) => {
  return [
    styles.title,
    {
      marginStart:
        titleAlign === 'left' && hideBack ? ms(16) : !hideBack ? ms(32) : 0,
      marginEnd: rightIconsSize + ms(16) + ms(8)
    }
  ]
}

const Title: React.FC<
  { rightIconsSize: number; hideBack: boolean | undefined } & Props
> = ({ rightIconsSize, title, titleAlign, hideBack }) => {
  if (typeof title === 'string' && !!title)
    return (
      <AppText
        children={title}
        color={'mainBlack'}
        textAlign={titleAlign ?? 'center'}
        ellipsizeMode={'tail'}
        style={getTitleStyle(titleAlign, hideBack, rightIconsSize)}
      />
    )

  if (typeof title !== 'string' && !!title)
    <View children={title} style={styles.title} />

  return null
}

const Loader: React.FC<
  Props & { setRightIconsSize: (size: number) => void }
> = props => {
  return (
    <View
      onLayout={e => props.setRightIconsSize(e.nativeEvent.layout.width)}
      style={[styles.right]}
    >
      {props.right?.()}
      {props.isLoading && <ActivityIndicator />}
    </View>
  )
}

const Header: React.FC<PropsWithChildren & { isModal: boolean }> = ({
  isModal,
  children
}) => (
  <View
    style={[
      styles.container,
      {
        marginTop: sizes.safeAreaTop,
        height: isModal ? sizes.modalHeaderHeight : sizes.headerHeight
      }
    ]}
    children={children}
  />
)

const NavigationButton: React.FC<{
  isModal: boolean
  navigation: NavigationProp<ReactNavigation.RootParamList>
}> = ({ isModal, navigation }) => (
  <NavigationHeaderIconButton
    style={isModal ? styles.closeModalButton : undefined}
    icon={isModal ? 'icAlertClose' : 'icBack'}
    onPress={navigation.goBack}
    tint={'mainBlack'}
  />
)

export const AppNavigationHeader = memo<PropsWithChildren<Props>>(props => {
  const navigation = useNavigation()
  const isModal = props.modal === true
  const hideBack = props.hideBack || !navigation.canGoBack()
  const [rightIconsSize, setRightIconsSize] = useState(0)

  return (
    <View
      style={{
        backgroundColor: appTheme.colors.mainWhite,
        minHeight: isModal ? sizes.modalHeaderHeight : sizes.headerHeight
      }}
    >
      <Header isModal={isModal}>
        <Title {...props} rightIconsSize={rightIconsSize} hideBack={hideBack} />

        {!hideBack && (
          <NavigationButton isModal={isModal} navigation={navigation} />
        )}

        {(!!props.right || props.isLoading) && (
          <Loader {...props} setRightIconsSize={setRightIconsSize} />
        )}
      </Header>
      {props.children}
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },

  title: {
    position: 'absolute',
    flex: 1,
    top: ms(5),
    left: ms(0),
    right: ms(0),
    bottom: ms(0)
  },

  right: {
    position: 'absolute',
    right: ms(16),
    bottom: ms(0),
    top: ms(5),
    alignItems: 'center',
    justifyContent: 'center'
  },

  closeModalButton: {
    position: 'absolute',
    width: sizes.modalHeaderHeight,
    height: sizes.modalHeaderHeight,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
