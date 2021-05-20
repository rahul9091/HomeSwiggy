import React from 'react';
import {Text,View,StyleSheet,Image, TouchableOpacity} from 'react-native';
import imagePath from '../constants/imagePath'
import colors from '../styles/colors';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';


const Headers = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.containerStyle}>
            <Text style={{fontSize:30,fontWeight:'bold',marginLeft:10}}>Swiggy</Text>
            <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.BAG)}>
            <Image style={styles.cartStyle} source={imagePath.cart} />
            </TouchableOpacity>
            {/* <Image style={styles.cart2Style} source={imagePath}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    cartStyle:{
        width:50,
        height:50
    },
    containerStyle:{
        backgroundColor:colors.themeColor,
        alignItems:'center',
        justifyContent:"space-between",
        flexDirection:'row'
    }
})

export default Headers;