import React, { memo } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

interface IFriendProps {
  friend: {
    id: number
    name: string
    followers: number
  }
  unFollow: () => void
}

function FriendComponent({
  friend,
  unFollow
}: IFriendProps) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text>
        Nome: { friend.name } - Seguidores: { friend.followers }
      </Text>

      <TouchableOpacity onPress={unFollow}>
        <Text>Deixar de seguir</Text>
      </TouchableOpacity>
    </View>
  )
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.friend, nextProps.friend)
})