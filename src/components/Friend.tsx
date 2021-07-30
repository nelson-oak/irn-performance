import React, { memo } from 'react'
import { Text } from 'react-native'

interface IFriendProps {
  friend: {
    id: number
    name: string
    followers: number
  }
}

function FriendComponent({
  friend
}: IFriendProps) {
  return (
    <Text>
      Nome: { friend.name } - Seguidores: { friend.followers }
    </Text>
  )
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.friend, nextProps.friend)
})