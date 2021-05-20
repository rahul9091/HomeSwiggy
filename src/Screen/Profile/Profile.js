

import React, { Component } from 'react'
import { Text, StyleSheet, Switch, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import imagePath from '../../constants/imagePath';
import actions from '../../redux/actions';
import styles from './styles'






export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            toggle:false,
        }
    }
    render() {
        const {toggle} = this.state;
        return (
            <>
            <TouchableOpacity>
            <ImageBackground style={styles.bgStyles} source={imagePath.logout}>
            <View>
                <TouchableOpacity style={styles.touchable2Style}>
                    <Text style={{fontSize:30,fontWeight:'bold',marginTop:20}}>Thanks For Shopping</Text>
                </TouchableOpacity>
                {/* <CustomButton style={styles.customStyle}/> */}
                <TouchableOpacity style={styles.touchableStyle} onPress={()=> actions.OnLogout()}>
                <Text style={styles.textStyle}>LOGOUT</Text>
            </TouchableOpacity>
            
                {/* <TouchableOpacity onPress={() => actions.onLogout()}>
                    <Image source={imagePath.logout} style={styles.logout} />
                </TouchableOpacity>
                <Text style={styles.logoutText}> LOGOUT </Text> */}

            </View>
            </ImageBackground>
            </TouchableOpacity>
            </>
        )
    }
}


