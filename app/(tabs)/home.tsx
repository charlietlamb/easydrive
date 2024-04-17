import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'

export class home extends Component {
  render() {
    return (
      <View>
        <Link href="/(modals)/login">Login</Link>
        <Link href="/(modals)/search">Search</Link>
        <Link href="/instructor/123">Instructors</Link>
        <Text>home</Text>
      </View>
    )
  }
}

export default home
