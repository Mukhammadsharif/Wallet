import React, { JSX } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { COLORS } from '../../utils/color'

interface ProfileCurrencyCardProps {
  icon?: JSX.Element
  title?: string
  description?: string
  percentage?: string
  percentageIcon?: JSX.Element
  amount?: string
  value?: string
  up?: boolean
}

const Header = ({ icon, title, description }) => (
  <View style={styles.header}>
    {icon}
    <View style={styles.headerTitleContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
)

const ProfileCurrencyCard = ({
  icon,
  title,
  description,
  percentage,
  percentageIcon,
  amount,
  value,
  up = true
}: ProfileCurrencyCardProps): JSX.Element => (
  <View style={styles.container}>
    <Header icon={icon} title={title} description={description} />

    <View style={styles.percentageContainer}>
      <Text style={up ? styles.percentageTextUp : styles.percentageTextDown}>
        {percentage}
      </Text>
      {percentageIcon}
    </View>

    <Text style={styles.amount}>$ {amount}</Text>
    <Text style={styles.value}>Value: $ {value}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.currencyCardBackground,
    padding: 10,
    borderRadius: 5,
    marginLeft: 10
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.dividerBackground,
    borderStyle: 'solid',
    paddingBottom: 6
  },
  headerTitleContainer: {
    marginLeft: 13
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '900',
    fontFamily: 'SFProDisplay-Medium',
    color: COLORS.mainBlack,
    textAlign: 'right'
  },
  description: {
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'SFProDisplay-Light',
    color: COLORS.darkGray,
    textAlign: 'right'
  },
  percentageContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 6
  },
  percentageTextUp: {
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'SFProDisplay-Light',
    color: COLORS.green
  },
  percentageTextDown: {
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'SFProDisplay-Light',
    color: COLORS.red
  },
  amount: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'SFProDisplay-Light',
    color: COLORS.darkGray,
    marginTop: 2
  },
  value: {
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'SFProDisplay-Light',
    color: COLORS.darkGray,
    marginTop: 2
  }
})

export default ProfileCurrencyCard
