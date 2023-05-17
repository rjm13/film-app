import { FontAwesome, Octicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useEffect, useState, useContext} from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { DrawerContent } from './DrawerContent';

import Home from '../screens/Home';
// import ConfirmAccount from '../screens/Auth/ConfirmAccount';
// import ConfirmPassword from '../screens/Auth/ConfirmPassword';
// import Redirect from '../screens/Auth/Redirect';
// import SignIn from '../screens/Auth/SignIn';
// import SignUp from '../screens/Auth/SignUp';
// import Welcome from '../screens/Auth/Welcome';
// import ForgotPassword from '../screens/Auth/ForgotPassword';
import Settings from '../screens/Settings';
import About from '../screens/About';


import { AppContext } from '../AppContext';

import { navigationRef } from './RootNavigation';

import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

const Drawer = createDrawerNavigator ();

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      ref={navigationRef}
      >
      <Drawer.Navigator
          drawerContent={props => <DrawerContent { ...props} />}
          screenOptions={{
            headerShown: false
          }}
          //drawerPosition='left'
          initialRouteName='RootNav'
      >
        <Drawer.Screen
          name='RootNav'
          component={RootNavigator}
      />
      </Drawer.Navigator>
      {/* <RootNavigator /> */}
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator({navigation} : any) {

  const [hasMessages, setHasMessages] = useState(false)

  const { theme } = useContext(AppContext);

  useEffect(() => {
    setHasMessages(false)
  }, [])

  return (
    <Stack.Navigator 
      screenOptions={{ 
        // headerStyle: {
        //   backgroundColor: theme === true ? '#000' : 'maroon',
        // },
        // title: '',
        // headerTintColor: '#fff',
        // header: () =>
        // (
        //   <View style={{ height: 60, backgroundColor: theme === true ? '#000' : 'maroon', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        //     <View style={{flexDirection: 'row', alignItems: 'center'}}>
        //       <FontAwesome 
        //           name='navicon'
        //           size={20}
        //           color='#fff'
        //           backgroundColor='transparent'
        //           style={{ paddingHorizontal: 20 }}
        //           onPress={() => { navigation.toggleDrawer() }}
        //       />
        //     </View>
        //     <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
        //       <FontAwesome
        //           name='calendar'
        //           size={20}
        //           color={'gray'}
        //           backgroundColor='#155843'
        //           style={{ paddingHorizontal: 12 }}
        //           onPress={() => { alert('Calendar not set up yet') }}
        //       />
        //       <FontAwesome 
        //           name='envelope-o'
        //           size={21}
        //           color={hasMessages === true ? 'gold' : '#fff'}
        //           backgroundColor='#155843'
        //           style={{ paddingHorizontal: 12 }}
        //           onPress={() => { navigation.navigate('Inbox')}}
        //       />
        //       <Octicons 
        //           name='gear'
        //           size={20}
        //           color={'#fff'}
        //           backgroundColor='#155843'
        //           style={{ paddingHorizontal: 12, marginRight: 10 }}
        //           onPress={() => { navigation.navigate('Settings')}}
        //       />           
        // </View>
        //   </View>
        // ), 
      }} 
      initialRouteName="Redirect"
    >
      <Stack.Screen name="Root" component={Home} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Root" component={TopTabNavigator} options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
      <Stack.Screen name="ConfirmAccount" component={ConfirmAccount} options={{ headerShown: false }}/>
      <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} options={{ headerShown: false }}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }}/>
      <Stack.Screen name="Redirect" component={Redirect} options={{ headerShown: false }}/>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/> */}
      <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const TopTab = createMaterialTopTabNavigator<RootTabParamList>();

function TopTabNavigator() {

  const { theme } = useContext(AppContext);

  return (
    <TopTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarLabelStyle: { fontSize: 14, fontWeight: '600' },
        tabBarStyle: { backgroundColor: theme === true ? '#000' : 'maroon' },
        tabBarContentContainerStyle: {alignItems: 'flex-end'},
        tabBarIndicatorStyle: {backgroundColor: 'white'},
        tabBarAndroidRipple: { borderless: false },
        tabBarPressColor: 'transparent'
        
      }}>
      <TopTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: 'shifts',
          //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate('Settings')}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}>
          //     <FontAwesome
          //       name="info-circle"
          //       size={25}
          //       color={Colors[colorScheme].text}
          //       style={{ marginRight: 15 }}
          //     />
          //   </Pressable>
          // ),
        })}
      />
    </TopTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}