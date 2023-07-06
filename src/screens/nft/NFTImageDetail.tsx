import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'

import { ExportIcon } from 'src/components/Svgs'
import { COLORS } from 'src/utils/color'

import Avatar3 from '../../assets/images/Avatar1.png'
import Avatar2 from '../../assets/images/Avatar2.png'
import Avatar1 from '../../assets/images/Avatar3.png'
import ImageCommentCard from '../../components/cards/ImageCommentCard'
import ProfileDetailImage from '../../components/profile/ProfileDetailImage'

const cards = [
  {
    avatar: Avatar1,
    titleActive: '0x829...6a40',
    title: '17:11 / 18.12.2021',
    description:
      'Sometimes we face a problem that turns out to be more vicious than we imagined...'
  },
  {
    avatar: Avatar2,
    titleActive: '0x829...6a40',
    title: '17:11 / 18.12.2021',
    description:
      'Sometimes we face a problem that turns out to be more vicious than we imagined...'
  },
  {
    avatar: Avatar3,
    titleActive: '0x829...6a40',
    title: '17:11 / 18.12.2021',
    description:
      'Sometimes we face a problem that turns out to be more vicious than we imagined...'
  }
]

const NFTImageDetail = (): JSX.Element => {
  const [commentToggle, setCommentToggle] = useState<boolean>(false)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileDetailImage
          rightFirstIcon={<ExportIcon />}
          comment={commentToggle}
          commentToggle={commentToggle}
          setCommentToggle={setCommentToggle}
        />
        {cards.map((props, i) => (
          <ImageCommentCard {...props} key={i} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.profileImageBackground,
    paddingBottom: 200
  }
})
export default NFTImageDetail
