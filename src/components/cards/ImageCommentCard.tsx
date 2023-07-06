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

interface ImageCommentCardProps {
  avatar: ImageSourcePropType
  titleActive: string
  title: string
  description: string
}

const Footer = ({ description }: any) => {
  const [like, setLike] = useState<boolean>(false)
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => {
          setLike(!like)
        }}
      >
        {!like ? <CommentLike /> : <CommentDislike />}
      </TouchableOpacity>

      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const ImageCommentCard = ({
  avatar,
  titleActive,
  title,
  description
}: ImageCommentCardProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />

      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <View>
            <Text style={styles.titleActive}>{titleActive}</Text>
            <Text style={styles.title}>{title}</Text>
          </View>

          <TouchableOpacity onPress={() => {}}>
            <MoreIcon />
          </TouchableOpacity>
        </View>

        <Footer description={description} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.profileImageBackground,
    paddingLeft: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.dividerBackground
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
  mainContainer: {
    flex: 1,
    paddingLeft: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    marginTop: 10
  }
})
export default ImageCommentCard
