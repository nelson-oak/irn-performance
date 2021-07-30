import React from 'react'
import { Text } from 'react-native'

interface IFriendProps {
  friend: {
    name: string
    followers: number
  }
}

export function Friend({
  friend
}: IFriendProps) {
  return (
    <Text>
      Nome: { friend.name } - Seguidores: { friend.followers }
    </Text>
  )
}