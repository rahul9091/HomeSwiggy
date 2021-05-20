import {StyleSheet} from 'react-native';
import colors from '../../styles/colors'

export default StyleSheet.create({
    logout: {
        width: 70,
        height: 70,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 50
    },
    logoutText: {
        fontSize: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    touchableStyle: {
        backgroundColor: colors.themeColor,
        height: 55,
        width: 279,
        marginTop:40,
        marginLeft:80
    },
    textStyle:{
        alignSelf: 'center', marginTop: 12, fontSize: 20, fontWeight: "bold" 
    },
    touchable2Style:{
        marginTop:400,marginLeft:70
    },
    bgStyles:{
        height:400,width:500
    }
})