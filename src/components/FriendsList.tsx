import React from 'react'
import { View } from 'react-native'
import { Friend } from './Friend'

interface IFriendsListProps {
  friends: Array<{
    id: number
    name: string
    followers: number
  }>
}

export function FriendsList({
  friends
}: IFriendsListProps) {
  return (
    <View>
      {
        friends.map(friend => (
          <Friend
            key={friend.id}
            friend={friend}
          />
        ))
      }
    </View>
  )
}