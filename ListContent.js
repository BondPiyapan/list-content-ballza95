import React from 'react'
import {
  View,
  Text,
} from 'react-native'

export default function ListContent({
  textLeft,
  textRight,
  textStyleLeft,
  textStyleRight,
  backgroundColor,
  borderColor,
}) {
  return (
    <View style={{
      width: '100%',
      backgroundColor,
      flexDirection: 'row',
      borderBottomWidth: 0.8,
      borderColor,
    }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: 16,
          paddingVertical: 16,
        }}
      >
        <Text
          style={textStyleLeft}
        >
          {textLeft}
        </Text>
        <Text
          numberOfLines={2}
          style={textStyleRight}
        >
          {textRight}
        </Text>
      </View>
    </View>
  )
}