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
}

export function Home() {
  const [name, setName] = useState('')
  const [friends, setFriends] = useState<IFriend[]>([])

  async function handleSearch() {
    const response = await fetch(`http://192.168.0.107:3333/friends?q=${name}`)
    const data = await response.json()
    setFriends(data)
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

      <ScrollView style={styles.list}>
        <FriendsList
          friends={friends}
          unFollow={handleUnFollow}
        />
      </ScrollView>
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
  list: {
    marginTop: 20
  }
})