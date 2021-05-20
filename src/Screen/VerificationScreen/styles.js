import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
   

    sentCode:{
     textAlign:'center',
     fontSize:20,
    },
    buttonStyle:{
      color:colors.themeColor
    },
    phone:{
        textAlign:'center',
     fontSize:18,
     marginVertical:5,
     fontWeight:'bold'
    
    },
    footer1:{
        textAlign:'center',
        marginVertical:50
    }, 
    sendOTPTouch: {
        backgroundColor: 'orange',
        height: 50,
        marginHorizontal: 30,
        borderRadius: 10,
        marginTop: 10,
      },
      sendOTPText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 12,
      },
    
    
    
      container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F5FCFF',
        padding: 5,
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center',
        // color: '#333333',
        marginBottom: 20,
      },
      textInputContainer: {
        marginBottom: 20,
      },
      roundedTextInput: {
        // borderRadius: 10,
        borderWidth: 1,
      },
     
      textInput: {
        height: 40,
        width: '80%',
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        letterSpacing: 5,
        marginBottom: 10,
        textAlign: 'center',
      },
      buttonStyle: {
        marginHorizontal: 20,
      },
    
    
    })
    