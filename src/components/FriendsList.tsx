import React, { useMemo } from 'react'
import { View, Text } from 'react-native'
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
  const totalFollowers = useMemo(() => {
    return friends.reduce((followers, friend) => {
      return followers + friend.followers
    }, 0)
  }, [friends])
  
  return (
    <View>
      <Text>
        Total de seguidores: {totalFollowers}
      </Text>

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