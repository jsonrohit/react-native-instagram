import React from 'react';
import { StyleSheet, Image, View, Button,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Activity from '../screens/Activity';
import Login from '../screens/login/Login';
import { useSelector } from 'react-redux';



import Reals from '../screens/Reals';
import SearchProfile from '../screens/SearchProfile';
import Profile from '../instapay/Profile';


const Tab = createBottomTabNavigator();

const AuthStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const userCheck = useSelector((state) => state.user)
  console.log(userCheck, 'userCheck');
  if (userCheck.loginTrue) {
    return <User />;
  }
  else {
    return <AuthUser />;
  }
}


const AuthUser = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="profile" component={Profile} /> */}
      </AuthStack.Navigator>
    </NavigationContainer>
  )
}

const User = () => {
  return (
      <NavigationContainer>
           <Tab.Navigator screenOptions={{
                    headerShown: false
                  }}  initialRouteName='Home'>
          
                  <Tab.Screen name="Home" component={HomeScreen} tabBarOptions={{ showLabel:false}}
                  options={{
                  tabBarIcon: ({focused}) =>(
                  <View style={{alignItems: 'center', justifyContent: 'center', top:0 }} >
                  <Image
                  source={{ uri: 'https://img.icons8.com/material-rounded/344/home.png'}}
                  resizeMode="contain"
                  style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#000': '#748c94',
                  }} />
                  </View> ),}} />


                  <Tab.Screen name="SearchProfile" component={SearchProfile}
                  options={{
                  tabBarIcon: ({focused}) =>(
                  <View style={{alignItems: 'center', justifyContent: 'center', top:0 }} >
                  <Image
                  source={{ uri: 'https://img.icons8.com/ios/344/search--v1.png'}}
                  resizeMode="contain"
                  style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#000': '#748c94',
                  }} />
                  </View> ),}} />

                  <Tab.Screen name="Reals" component={Reals}
                  options={{
                  tabBarIcon: ({focused}) =>(
                  <View style={{alignItems: 'center', justifyContent: 'center', top:0 }} >
                  <Image
                  source={{ uri: 'https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/344/external-plus-multimedia-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png'}}
                  resizeMode="contain"
                  style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#000': '#748c94',
                  }} />
                  </View> ),}} />


                  <Tab.Screen name="Activity" component={Activity}
                  options={{
                  tabBarIcon: ({focused}) =>(
                  <View style={{alignItems: 'center', justifyContent: 'center', top:0 }} >
                  <Image
                  source={{ uri: 'https://img.icons8.com/ios-glyphs/344/like--v2.png'}}
                  resizeMode="contain"
                  style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#000': '#748c94',
                  }} />
                  </View> ),}} />

                  <Tab.Screen name="Profile" component={Profile}
                  options={{
                  tabBarIcon: ({focused}) =>(
                  <View style={{alignItems: 'center', justifyContent: 'center', top:0 }} >
                  <Image
                  source={{ uri: 'https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/344/external-plus-multimedia-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png'}}
                  resizeMode="contain"
                  style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#000': '#748c94',
                  }} />
                  </View> ),}} />

                </Tab.Navigator >
      </NavigationContainer >
    )
  }


export default Navigation;