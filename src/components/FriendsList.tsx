import React, { useMemo } from 'react'
import { FlatList } from 'react-native'
import { View, Text } from 'react-native'
import { Friend } from './Friend'

interface IFriendsListProps {
  friends: Array<{
    id: number
    name: string
    followers: number
    onlineAt: string
  }>
  unFollow: () => void
}

export function FriendsList({
  friends,
  unFollow
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

      <FlatList style={{marginTop: 20, marginBottom: 150}}
        data={friends}
        keyExtractor={item => String(item.id)}
        renderItem={({ item: friend }) => (
          <Friend
            friend={friend}
            unFollow={unFollow}
          />
        )}
      />
    </View>
  )
}