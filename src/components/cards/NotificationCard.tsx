import React, { useState } from 'react'
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import { COLORS } from 'src/utils/color'

import { CommentDislike, CommentLike, MoreIcon } from '../Svgs'

interface NotificationCardProps {
  avatar: ImageSourcePropType
  titleActive: string
  title: string
  comment: string
}

const Footer = ({ comment }: any) => {
  const [like, setLike] = useState<boolean>(false)
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.icon} onPress={() => setLike(!like)}>
        {!like ? <CommentLike /> : <CommentDislike />}
      </TouchableOpacity>

      <Text style={styles.description}>{comment}</Text>
    </View>
  )
}

const NotificationCard = ({
  avatar,
  comment,
  titleActive,
  title
}: NotificationCardProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header}>
          <Image source={avatar} style={styles.avatar} />
          <View style={styles.headerDetail}>
            <Text style={styles.titleActive}>{titleActive}</Text>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>

        <TouchableOpacity>
          <MoreIcon />
        </TouchableOpacity>
      </View>

      <Footer comment={comment} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderBottomColor: COLORS.dividerBackground,
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  avatar: {
    width: 40,
    height: 40
  },
  titleActive: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.mainBlue,
    fontFamily: 'SFProDisplay-Light'
  },
  title: {
    fontSize: 14,
    fontWeight: '300',
    color: COLORS.darkGray,
    fontFamily: 'SFProDisplay-Light'
  },
  description: {
    fontSize: 12,
    fontWeight: '300',
    color: COLORS.mainBlack,
    fontFamily: 'SFProDisplay-Light',
    paddingLeft: 13,
    flex: 1
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 7
  },
  header: {
    flex: 1,
    flexDirection: 'row'
  },
  headerDetail: {
    marginLeft: 10
  },
  icon: {
    marginTop: 5
  }
})
export default NotificationCard
