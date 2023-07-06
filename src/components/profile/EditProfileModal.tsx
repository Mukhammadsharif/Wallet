import React, { JSX, SetStateAction, useState } from 'react'
import {
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'

import { COLORS } from 'src/utils/color'

import AvatarImg from '../../assets/images/settings-avatar-upload.png'
import { SettingsAddPhotoIcon } from '../Svgs'

interface EditProfileModalProps {
  modalVisible: boolean
  setModalVisible: React.Dispatch<SetStateAction<boolean>>
}

const Header = ({ modalVisible, setModalVisible }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
      <Text style={styles.headerButton}>Cancel</Text>
    </TouchableOpacity>

    <Text style={styles.editTiTle}>Edit profile</Text>

    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
      <Text style={styles.headerButton}>Save</Text>
    </TouchableOpacity>
  </View>
)

const Avatar = () => {
  const [avatar, setAvatar] = useState<string>()

  const pickImage = async (): Promise<any> => {
    const img = await launchImageLibrary({ mediaType: 'photo' })
    if (img.assets?.length) {
      setAvatar(img?.assets[0]?.uri)
    }
  }

  return (
    <View style={styles.avatarContainer}>
      <TouchableOpacity
        onPress={() => pickImage()}
        style={styles.avatarImageContainer}
      >
        <Image
          source={avatar ? { uri: avatar } : AvatarImg}
          style={styles.avatar}
        />
        <SettingsAddPhotoIcon style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}

const Background = () => {
  const [background, setBackground] = useState<string>()

  const pickBackground = async (): Promise<any> => {
    const img = await launchImageLibrary({ mediaType: 'photo' })
    if (img.assets?.length) setBackground(img?.assets[0]?.uri)
  }

  if (background)
    return (
      <ImageBackground
        resizeMode={'cover'}
        source={{ uri: background }}
        style={styles.imageBackground}
      >
        <TouchableOpacity onPress={pickBackground}>
          <SettingsAddPhotoIcon />
        </TouchableOpacity>
      </ImageBackground>
    )

  return (
    <TouchableOpacity
      onPress={pickBackground}
      style={styles.imageBackgroundContainer}
    >
      <SettingsAddPhotoIcon />
    </TouchableOpacity>
  )
}

const NameProfile = () => {
  const [profile, setProfile] = useState<string>('Name Profile')
  return (
    <View style={styles.textContainer}>
      <Text style={styles.title}>Name Profile</Text>
      <TextInput
        value={profile}
        onChangeText={setProfile}
        style={styles.input}
      />
    </View>
  )
}

const Name = () => {
  const [name, setName] = useState<string>('0x7eE3F543dsa3x0E0')

  return (
    <View style={styles.textContainer}>
      <Text style={styles.title}>Name</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
    </View>
  )
}

const Status = () => {
  const [status, setStatus] = useState<string>('')
  return (
    <View style={styles.textContainer}>
      <Text style={styles.title}>Status</Text>
      <TextInput
        value={status}
        onChangeText={setStatus}
        style={styles.input}
        placeholder={'Add status'}
      />
    </View>
  )
}

const EditProfileModal = ({
  modalVisible,
  setModalVisible
}: EditProfileModalProps): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <Modal animationType="slide" transparent={false} visible={modalVisible}>
      <View style={styles.centeredView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <Background />
          <View style={styles.mainContainer}>
            <Avatar />
            <NameProfile />
            <Name />
            <Status />
          </View>
        </ScrollView>
      </View>
    </Modal>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '10%'
  },
  modalView: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.white,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20
  },
  headerButton: {
    fontSize: 14,
    fontWeight: '300',
    color: COLORS.darkGray,
    fontFamily: 'SFProDisplay-Light'
  },
  editTiTle: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.mainBlack,
    fontFamily: 'SFProDisplay-Light'
  },
  imageBackgroundContainer: {
    backgroundColor: COLORS.imageBackgroundColor,
    height: 117,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageBackground: {
    height: 117,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainContainer: {
    flex: 1
  },
  avatarContainer: {
    borderBottomColor: COLORS.dividerBackground,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  avatarImageContainer: {
    width: 70,
    height: 70,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: -30,
    position: 'relative'
  },
  avatar: {
    width: 68,
    height: 68,
    borderRadius: 50
  },
  icon: {
    position: 'absolute'
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: COLORS.dividerBackground,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  input: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.mainBlue,
    fontFamily: 'SFProDisplay-Light'
  },
  title: {
    width: '30%',
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.mainBlack,
    fontFamily: 'SFProDisplay-Light'
  }
})

export default EditProfileModal
