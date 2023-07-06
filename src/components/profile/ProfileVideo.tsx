import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Avatar from '../../assets/images/avatar.png'
import { COLORS } from '../../utils/color'
import { DislikeIcon, LikeIcon, MoreIcon, ShareIcon, TrashIcon } from '../Svgs'

const Footer = () => (
  <View style={styles.footer}>
    <View style={styles.footerMain}>
      <View style={styles.footerDetail}>
        <TouchableOpacity>
          <LikeIcon />
        </TouchableOpacity>
        <Text style={styles.footerDetailText}>8 607</Text>
      </View>

      <View style={styles.footerDetail}>
        <TouchableOpacity>
          <DislikeIcon />
        </TouchableOpacity>
        <Text style={styles.footerDetailText}>432</Text>
      </View>
    </View>

    <View style={styles.footerRightContainer}>
      <TouchableOpacity style={styles.share}>
        <ShareIcon />
      </TouchableOpacity>
      <TouchableOpacity>
        <TrashIcon />
      </TouchableOpacity>
    </View>
  </View>
)

const Header = () => (
  <View style={styles.header}>
    <View style={styles.headerLeftContainer}>
      <Image source={Avatar} style={styles.avatar} />

      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>17:11 / 18.12.2021</Text>
        <Text style={styles.headerTextActive}>To: 0x7eE...3F54</Text>
      </View>
    </View>

    <TouchableOpacity>
      <MoreIcon />
    </TouchableOpacity>
  </View>
)

const ProfileVideo = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.image} />

      <Text style={styles.title}>Freddy #0123</Text>

      <Text style={styles.text}>
        Sometimes we face a problem that turns out to be more vicious than we
        imagined...
      </Text>

      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.profileImageBackground,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.dividerBackground
  },
  header: {
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerLeftContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  headerTextContainer: {
    paddingLeft: 10
  },
  avatar: {
    width: 30,
    height: 30
  },
  image: {
    height: 179,
    width: '100%',
    borderRadius: 5
  },
  headerText: {
    fontFamily: 'SFProDisplay-Light',
    fontSize: 12,
    fontWeight: '300',
    color: COLORS.darkGray
  },
  headerTextActive: {
    fontFamily: 'SFProDisplay-Light',
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.mainBlue
  },
  text: {
    fontFamily: 'SFProDisplay-Light',
    fontSize: 12,
    fontWeight: '300',
    color: COLORS.mainBlack,
    paddingVertical: 10
  },
  title: {
    fontFamily: 'SFProDisplay-Light',
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.mainBlack,
    paddingTop: 20
  },
  footer: {
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footerDetail: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerDetailText: {
    fontFamily: 'SFProDisplay-Light',
    fontSize: 12,
    fontWeight: '300',
    color: COLORS.darkGray,
    paddingLeft: 8
  },
  footerMain: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footerRightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  share: {
    paddingRight: 15
  }
})
export default ProfileVideo
