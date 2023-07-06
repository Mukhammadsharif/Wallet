import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { COLORS } from 'src/utils/color'

interface FinanceCardProps {
  icon: React.ReactNode
  title: string
  date: string
  dateIndex: string
  rate: string
  currentRate: string
}
const FinanceCard = ({
  icon,
  date,
  dateIndex,
  rate,
  currentRate,
  title
}: FinanceCardProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>{icon}</View>

      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>
          {date} <Text style={styles.dateIndex}>{dateIndex}</Text>
        </Text>
      </View>

      <View>
        <Text style={styles.rate}>{rate}</Text>
        <Text style={styles.currentRate}>{currentRate}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.profileImageBackground,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.dividerBackground
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.mainBlack,
    fontFamily: 'SFProDisplay-Light'
  },
  date: {
    fontSize: 11,
    fontWeight: '300',
    color: COLORS.darkGray,
    fontFamily: 'SFProDisplay-Light',
    paddingTop: 3
  },
  dateIndex: {
    color: COLORS.mainBlue
  },
  rate: {
    fontSize: 14,
    fontWeight: '300',
    color: COLORS.mainBlack,
    fontFamily: 'SFProDisplay-Light',
    textAlign: 'right'
  },
  currentRate: {
    fontSize: 11,
    color: COLORS.darkGray,
    fontFamily: 'SFProDisplay-Light',
    fontWeight: '300',
    textAlign: 'right',
    paddingTop: 3
  }
})
export default FinanceCard
