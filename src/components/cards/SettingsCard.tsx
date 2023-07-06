import { useNavigation } from '@react-navigation/native'
import React, { SetStateAction } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { COLORS } from 'src/utils/color'

interface SettingsCardProps {
  icon: React.ReactNode
  title: string
  chevron?: React.ReactNode
  toggle?: boolean
  setToggle?: React.Dispatch<SetStateAction<boolean>>
  navigationRoute?: string
}

const SettingsCard = ({
  icon,
  chevron,
  title,
  toggle,
  setToggle,
  navigationRoute
}: SettingsCardProps): JSX.Element => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => {
        if (chevron && navigationRoute) {
          navigation.navigate(navigationRoute)
        } else if (setToggle) {
          setToggle(!toggle)
        }
      }}
      style={styles.container}
    >
      <View style={styles.header}>
        {icon}
        <Text style={styles.title}>{title}</Text>
      </View>

      {chevron}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: COLORS.dividerBackground,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.mainBlack,
    fontFamily: 'SFProDisplay-Light',
    marginLeft: 13
  }
})

export default SettingsCard
