import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { connect } from 'react-redux';
// import {connect } from "react-redux"



const Stack = createStackNavigator();

 

function Routes(props) {
    // const userDataContext = useContext(userContext);
    const {isLoggedin, userData}=props;
    console.log(isLoggedin,'got logged in data in routes')
    console.log(userData,'got user data in routes')
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
         
      {isLoggedin?<>{MainStack()}</>:<>{AuthStack()}</>}
      
{/* 
       {AuthStack()}
       {MainStack()} */}
       {/* {AuthStack()} */}
       {/* {MainStack()} */}


      </Stack.Navigator>
    </NavigationContainer>
  );
}


const mapStateToProps = (state) => {
  return {
    isLoggedin:state.auth.isLoggedin,
    userData:state.auth.userData
  }
}

export default connect(mapStateToProps)(Routes)