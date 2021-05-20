import {StyleSheet} from 'react-native';
import colors from '../../styles/colors'
// import fontFamily from '../../styles/fontFamily';

export default StyleSheet.create({
    containerStyle:{
     padding:20   
    },
    textStyle:{
        fontSize: 20, 
        fontWeight: 'bold',
        marginLeft:20,
        // fontFamily:fontFamily.bold,
        marginBottom:7
    },
    container2Style:{
        borderBottomColor: colors.grey,
         borderBottomWidth: 2,
         alignItems: 'center', 
        justifyContent: 'flex-end', 
        flexDirection: 'row-reverse' 
    },
    touchableStyle:{
        backgroundColor: colors.themeColor, 
        marginTop: -40, 
        height: 55, 
        width: 279, 
        alignSelf: 'center',
        marginTop:20
    },
    text2Style:{
        marginLeft:90
    }
})