import React, { useContext, useState } from 'react'
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { GlobalContext } from 'src/components/context/GlobalContext'

import Avatar from '../../assets/images/avatar.png'
import Button from '../../components/buttons/Button'
import FinanceCard from '../../components/cards/FinanceCard'
import ProfileAudio from '../../components/profile/ProfileAudio'
import ProfileCurrencyCard from '../../components/profile/ProfileCurrencyCard'
import ProfileImage from '../../components/profile/ProfileImage'
import ProfileMenu from '../../components/profile/ProfileMenu'
import ProfilePost from '../../components/profile/ProfilePost'
import ProfileVideo from '../../components/profile/ProfileVideo'
import {
  CurrencyDown,
  CurrencyUp,
  FinanceLeftIcon,
  FinanceRightIcon,
  ShareIcon,
  TrashIcon,
  USDTIcon,
  VerifyIconProfile
} from '../../components/Svgs'
import { COLORS } from '../../utils/color'

export interface MenuProps {
  desoc: boolean
  finance: boolean
  reactions: boolean
}

const currencyCard = [
  {
    icon: <USDTIcon />,
    title: '5.321',
    description: 'USDT',
    percentage: '1.44%',
    percentageIcon: <CurrencyUp />,
    amount: '11,2',
    value: '2 237.24'
  },
  {
    icon: <USDTIcon />,
    title: '5.321',
    description: 'USDT',
    percentage: '1.44%',
    percentageIcon: <CurrencyDown />,
    amount: '11,2',
    value: '2 237.24',
    up: false
  },
  {
    icon: <USDTIcon />,
    title: '5.321',
    description: 'USDT',
    percentage: '1.44%',
    percentageIcon: <CurrencyDown />,
    amount: '11,2',
    value: '2 237.24',
    up: false
  },
  {
    icon: <USDTIcon />,
    title: '5.321',
    description: 'USDT',
    percentage: '1.44%',
    percentageIcon: <CurrencyDown />,
    amount: '11,2',
    value: '2 237.24',
    up: false
  },
  {
    icon: <USDTIcon />,
    title: '5.321',
    description: 'USDT',
    percentage: '1.44%',
    percentageIcon: <CurrencyDown />,
    amount: '11,2',
    value: '2 237.24',
    up: false
  }
]

const CurrencyCard = () => (
  <View style={styles.currencyCardContainer}>
    <ScrollView
      showsHorizontalScrollIndicator={false}
      persistentScrollbar={true}
      pagingEnabled={false}
      nestedScrollEnabled={true}
      minimumZoomScale={10.0}
      horizontal={true}
    >
      {currencyCard.map((props, i) => (
        <ProfileCurrencyCard {...props} key={i} />
      ))}
    </ScrollView>
  </View>
)

const finance = [
  {
    icon: <FinanceLeftIcon />,
    title: 'Send USDT',
    date: 'Sep 2, 5:34 AM •',
    dateIndex: 'From: 0x6555...97cd',
    rate: '-1186 USDT',
    currentRate: '-$1,185.76 USD'
  },
  {
    icon: <FinanceRightIcon />,
    title: 'Send USDT',
    date: 'Sep 2, 5:34 AM •',
    dateIndex: 'From: 0x6555...97cd',
    rate: '-1186 USDT',
    currentRate: '-$1,185.76 USD'
  },
  {
    icon: <FinanceLeftIcon />,
    title: 'Send USDT',
    date: 'Sep 2, 5:34 AM •',
    dateIndex: 'From: 0x6555...97cd',
    rate: '-1186 USDT',
    currentRate: '-$1,185.76 USD'
  },
  {
    icon: <FinanceRightIcon />,
    title: 'Send USDT',
    date: 'Sep 2, 5:34 AM •',
    dateIndex: 'From: 0x6555...97cd',
    rate: '-1186 USDT',
    currentRate: '-$1,185.76 USD'
  }
]

const style = StyleSheet.create({
  finance: { flex: 1, paddingBottom: 200 },
  menuDesoc: { flex: 1 },
  profileScroll: { paddingTop: 100, paddingBottom: 200 }
})

const Finance = () => (
  <ScrollView
    stickyHeaderHiddenOnScroll={true}
    contentContainerStyle={style.finance}
    nestedScrollEnabled={true}
  >
    {finance.map((props, i) => (
      <FinanceCard {...props} key={i} />
    ))}
  </ScrollView>
)

const getProfileStyle = showTopNav => [
  styles.container,
  {
    backgroundColor: !showTopNav ? COLORS.nativeBackground : COLORS.mainBlack
  }
]

const InputContainer = () => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputText}>
      217 <Text style={styles.inputThinText}>Inputs</Text>
    </Text>

    <Text style={styles.inputText}>
      118 <Text style={styles.inputThinText}>Outputs</Text>
    </Text>

    <Text style={styles.inputText}>
      234 <Text style={styles.inputThinText}>Transaction</Text>
    </Text>
  </View>
)

const Balance = () => (
  <>
    <Text style={styles.balanceKey}>
      Balance:
      <Text style={styles.balanceValue}> 0.814867124750270799 Ether</Text>
    </Text>

    <Text style={styles.balanceKey}>
      Value:
      <Text style={styles.balanceValue}>
        {'      '}
        $3,237.96 (@ $3,973.61/ETH)
      </Text>
    </Text>
  </>
)

const PublicItem = () => (
  <View style={styles.buttonContainer}>
    <Button title={'Public item'} backgroundColor={COLORS.mainBlue} />
  </View>
)

const Address = () => (
  <View style={styles.verifyContainer}>
    <Text style={styles.verifyText}>0x7eE...3F5</Text>
    <VerifyIconProfile style={styles.verifyIcon} />
  </View>
)

const Head = () => (
  <View style={styles.headerContainer}>
    <View style={styles.avatarContainer}>
      <Image source={Avatar} style={styles.avatar} />
    </View>

    <Text style={styles.statusText}>
      Status: <Text style={styles.statusActiveText}>Hello World!</Text>
    </Text>
  </View>
)

const defaultMenu = {
  desoc: true,
  finance: false,
  reactions: false
}

const Menu = () => {
  const [menu, setMenu] = useState<MenuProps>(defaultMenu)
  return (
    <>
      <ProfileMenu menu={menu} setMenu={setMenu} />
      <ScrollView nestedScrollEnabled={true}>
        {menu.desoc ? (
          <ScrollView
            stickyHeaderHiddenOnScroll={true}
            contentContainerStyle={style.menuDesoc}
            nestedScrollEnabled={true}
          >
            <ProfileImage
              rightFirstIcon={<TrashIcon />}
              rightSecondIcon={<ShareIcon />}
              more={true}
              add={true}
            />
            <ProfileVideo />
            <ProfileAudio />
            <ProfilePost />
          </ScrollView>
        ) : menu.finance ? (
          <Finance />
        ) : null}
      </ScrollView>
    </>
  )
}

const useShowTopNav = () => {
  const { showTopNav, setShowTopNav } = useContext(GlobalContext)

  const changeOnScroll = ({ nativeEvent }: any) => {
    const heightValue = nativeEvent.contentOffset.y

    if (heightValue < 117) {
      setShowTopNav(true)
    } else {
      setShowTopNav(false)
    }
  }

  return { showTopNav, changeOnScroll }
}

const Profile: React.FC = () => {
  const { showTopNav, changeOnScroll } = useShowTopNav()

  return (
    <SafeAreaView style={getProfileStyle(showTopNav)}>
      <ScrollView
        nestedScrollEnabled={true}
        stickyHeaderIndices={[1]}
        scrollEventThrottle={16}
        onScroll={changeOnScroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.profileScroll}
      >
        <View style={styles.mainContainer}>
          <Head />
          <Address />
          <InputContainer />
          <Balance />
          <PublicItem />
          <CurrencyCard />
        </View>
        <Menu />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.mainBlack,
    flex: 1
  },
  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    marginTop: -20,
    marginLeft: 20
  },
  avatar: {
    width: 68,
    height: 68,
    zIndex: 100
  },
  mainContainer: {
    backgroundColor: COLORS.nativeBackground
  },
  headerContainer: {
    paddingRight: 20,
    flex: 1,
    backgroundColor: COLORS.white
  },
  statusText: {
    alignSelf: 'flex-end',
    marginTop: -20,
    color: COLORS.profileBlack,
    fontFamily: 'SFProDisplay-Light'
  },
  statusActiveText: {
    color: COLORS.profileBlue
  },
  verifyContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingTop: 10,
    backgroundColor: COLORS.white
  },
  verifyText: {
    fontSize: 22,
    color: COLORS.mainBlack,
    fontFamily: 'SFProDisplay-Light',
    fontWeight: '400'
  },
  verifyIcon: {
    marginLeft: 10
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 8,
    backgroundColor: COLORS.white
  },
  inputText: {
    fontFamily: 'SFProDisplay-Medium',
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.darkGray,
    paddingLeft: 20
  },
  inputThinText: {
    fontWeight: '300',
    fontFamily: 'SFProDisplay-Light'
  },
  balanceKey: {
    paddingLeft: 20,
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'SFProDisplay-Light',
    color: COLORS.mainBlack,
    backgroundColor: COLORS.white
  },
  balanceValue: {
    paddingLeft: 5,
    color: COLORS.darkGray
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 28,
    backgroundColor: COLORS.white
  },
  currencyCardContainer: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: COLORS.white
  }
})
export default Profile
