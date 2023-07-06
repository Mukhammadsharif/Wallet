import React, { memo } from 'react'
import { FlatList, StyleSheet } from 'react-native'

const style = StyleSheet.create({ list: { width: '100%' } })

export const WalletsList: React.FC = memo(() => {
  return <FlatList style={style.list} />
})
