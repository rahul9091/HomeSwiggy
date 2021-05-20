import React, {Component} from 'react';
import { Text, View ,StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import {HomePage,Cart} from '../Screen/index';
import Profile from '../Screen/Profile/Profile';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// import Search from '../Screen/Search/Search';

const Tab = createBottomTabNavigator();

function TabRoutes({navigation}) {
  return (
    <Tab.Navigator 
      activeColor={colors.themeColor}
      inactiveColor={colors.black}
      barStyle={{
        backgroundColor: colors.white,
        borderTopWidth: 5,
        borderTopColor: colors.lightGreyBg,
      }}
    
    
    
    
    >
      <Tab.Screen name="Home" component={HomePage}
       options={{
         tabBarLabel:"Home",
        tabBarIcon: ({ color }) => (
          <Image
            style={styles.Icon}
            source={imagePath.bag}
            tintColor={color}
            />
       ),
       tabBarOptions: {
        activeTintColor: 'red',
        inactiveColor:'red'

    },
           }} 
     />
     
          
      <Tab.Screen name="Cart" component={Cart}
      options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={styles.Icon}
            source={imagePath.heart}
            tintColor={color}
            />
       )
           }} 
    />
     <Tab.Screen name="Search" component={Profile}
      options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={styles.Icon}
            source={imagePath.user}
            color="red"
            tintColor={color}
            />
       )
           }} 
    />
      {/* <Tab.Screen name="Cart" component={Cart}
       options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={styles.Icon}
            source={  imagePath.cartBottom }/>
       )
           }} /> */}
      {/* <Tab.Screen name="Profile" component={Profile}
      
      
       options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={styles.Icon}
            source={  imagePath.user }/>
       )
           }}
     /> */}
      {/* <Tab.Screen name="Deals" component={LatestDeals}
       options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={styles.Icon}
            source={  imagePath.tv }/>
       )
           }} /> */}
    </Tab.Navigator>
  );
}


export default TabRoutes;

const styles = StyleSheet.create({
  Icon:{
    width:30,
    height:30,
    marginTop:10,
    color:colors.green
  }
})