import React, { SetStateAction } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { MenuProps } from 'src/screens/profileTab/Profile'
import { COLORS } from 'src/utils/color'

interface ProfileMenuProps {
  menu: MenuProps
  setMenu: React.Dispatch<SetStateAction<MenuProps>>
}

const state = {
  desoc: { desoc: true, finance: false, reactions: false },
  finance: { desoc: false, finance: true, reactions: false },
  reactions: { desoc: false, finance: false, reactions: true }
}
const ProfileMenu = ({ menu, setMenu }: ProfileMenuProps): JSX.Element => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => setMenu(state.desoc)}
      style={menu.desoc ? styles.textContainerActive : styles.textContainer}
    >
      <Text style={menu.desoc ? styles.textActive : styles.text}>
        Desoc (12)
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => setMenu(state.finance)}
      style={menu.finance ? styles.textContainerActive : styles.textContainer}
    >
      <Text style={menu.finance ? styles.textActive : styles.text}>
        Finance (2)
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => setMenu(state.reactions)}
      style={menu.reactions ? styles.textContainerActive : styles.textContainer}
    >
      <Text style={menu.reactions ? styles.textActive : styles.text}>
        Reactions (34)
      </Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.dividerBackground
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 10
  },
  textContainerActive: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: COLORS.mainBlue,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 10
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'SFProDisplay-Light',
    color: COLORS.darkGray
  },
  textActive: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'SFProDisplay-Light',
    color: COLORS.mainBlue
  }
})
export default ProfileMenu
