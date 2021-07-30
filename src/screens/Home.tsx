import React, { useState, useCallback } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView
} from 'react-native'

import { FriendsList } from '../components/FriendsList'

interface IFriend {
  id: number
  name: string
  followers: number
  onlineAt: string
}

interface IFriendData {
  id: number
  name: string
  followers: number
}

export function Home() {
  const [name, setName] = useState('')
  const [friends, setFriends] = useState<IFriend[]>([])

  async function handleSearch() {
    const response = await fetch(`http://192.168.0.107:3333/friends?q=${name}`)
    const data = await response.json()

    const formattedData = data.map((friend: IFriendData) => {
      return {
        id: friend.id,
        name: friend.name,
        followers: friend.followers,
        onlineAt: `${new Date().getHours()}:${new Date().getMinutes()}`
      }
    })

    setFriends(formattedData)
  }

  const handleUnFollow = useCallback(() => {
    console.log('Deixou de seguir fulano')
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do amigo"
        onChangeText={setName}
      />

      <Button
        title="Buscar"
        onPress={handleSearch}
      />

      <FriendsList
        friends={friends}
        unFollow={handleUnFollow}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginVertical: 10
  },
})