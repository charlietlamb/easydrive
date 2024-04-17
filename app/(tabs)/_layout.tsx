import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { Search } from 'lucide-react'
import { MaterialIcons } from '@expo/vector-icons'

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarLabel: 'Calendar',
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <MaterialIcons name="calendar-month" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: 'Inbox',
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <MaterialIcons name="chat-bubble" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="instructors"
        options={{
          tabBarLabel: 'Instructors',
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <MaterialIcons name="directions-car" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarLabel: 'Account',
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default Layout
