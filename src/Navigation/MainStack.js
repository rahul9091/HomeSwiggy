
      // <Stack.Screen options={{ headerShown: false }} name={navigationStrings.HOME_PAGE} component={HomePage} />
   

      import React from "react";
      import {createStackNavigator} from '@react-navigation/stack'
      import TabRoutes from "./TabRoutes";
      import navigationStrings from "../constants/navigationStrings";
import Bag from "../Screen/Bag/Bag";
    //   import { FinalCart, FoodDetails} from '../Screen/index';
      const Stack=createStackNavigator();
      export default function(){
      
      
        return(
          <>
          <Stack.Screen
            name={navigationStrings.TAB_ROUTES}
            options={{ headerShown: false }}
            
            component={TabRoutes}
          />      
          {/* {/* <Stack.Screen options={{ headerShown: false }} name={navigationStrings.FOOD_DETAILS} component={FoodDetails}/> */}
          <Stack.Screen options={{ headerShown: true }} name={navigationStrings.BAG} component={Bag}/> 
      
          
            </>
        )
      }
      