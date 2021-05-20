import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 20,
        marginBottom: 10,
      },
      headerShadow: {
        height: 1.5,
        backgroundColor: 'gray',
        opacity: 0.5,
      },
      photo: {
        width: 150,
        height: 200,
      },
      toggleStyle:{
          alignItems:'center',
          justifyContent: "space-between",
          flexDirection:'row'
      },
      rowDirection: {
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 5,
        marginLeft: 3,
        marginTop: 2,
      },
      name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
      },
      colDirection: {
        flexDirection: 'column',
        marginLeft: 20,
      },
      add: {
        fontSize: 25,
        paddingLeft: 12,
        paddingTop: 2,
    
        backgroundColor: colors.theme2Color,
        borderRadius: 50,
        width: 40,
        height: 40,
        color: 'white',
        marginTop: 10,
      },
      add2:{
        fontSize: 25,
        paddingLeft: 12,
        paddingTop: 2,
    
        backgroundColor: colors.themeColor,
        borderRadius: 50,
        width: 40,
        height: 40,
        color: 'white',
        marginTop: 10,
      },
      count: {
        fontSize: 20,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 20,
      },
      sub: {
        fontSize: 25,
        paddingLeft: 16,
    
        backgroundColor: colors.theme2Color,
        borderRadius: 100,
        width: 40,
        height: 40,
        color: 'white',
        marginTop: 10,
      },
     sub2:{
        fontSize: 25,
        paddingLeft: 16,
    
        backgroundColor: colors.themeColor,
        borderRadius: 100,
        width: 40,
        height: 40,
        color: 'white',
        marginTop: 10,
      },
      line: {
        marginTop: 10,
        fontSize: 15,
      },
      line2: {
        marginTop: 13,
        fontSize: 15,
        fontSize: 12,
        textDecorationLine: 'line-through',
      },
      line3: {
        marginTop: 10,
        fontSize: 15,
        color: colors.themeColor
      },
      newView: {
        // marginLeft:-40,
        flexDirection: 'row',
      },
      paymentRow: {
        flexDirection: 'row',
        marginTop: 5,
        marginRight: 8,
        marginLeft: 8,
      },
      place2Order: {
        backgroundColor: colors.themeColor,
        height: 50,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 5,
      },
      placeOrder: {
        backgroundColor: colors.theme2Color,
        height: 50,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 5,
      },
      delete:{
        width: 20,
        height: 20,
        // backgroundColor: '#FF3F6D',
        marginHorizontal:20,
        marginTop:25,
        marginLeft:50
    
      },
      deleteTouch:{
        width:80,
        height:80
      }
})