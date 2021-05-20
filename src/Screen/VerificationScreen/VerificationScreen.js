import React from 'react';
import { Component } from 'react';
import {Text,View,StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/TextInputComponent';
import actions from '../../redux/actions';
import styles from './styles';
import FlashMessage from "react-native-flash-message";
import navigationStrings from '../../constants/navigationStrings';

export default class VerificationScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            Otp:"",
            inputText:''
        }
    }


    verifyOtp = () => {
        const {userId} = this.props.route.params
        const {Otp} = this.state;
        console.log(Otp,'otp text inputed')
        actions.otpVerify({userId,otp:Otp,deviceToken:"123"}).then((response)=>{
            // console.log(Otp, "otp Verified ")
            console.log(response)


            showMessage({
                message:"OTP Verified",
                type:'success'
            })
            this.props.navigation.navigate(navigationStrings.TAB_ROUTES)
        }).catch((error)=> {
            console.log(error)

            showMessage({
                message:"Wrong OTP",
                type:'warning'
            })
        })

       
    }

    setNumber = (text) =>{
        this.setState({
            Otp:text
        })
    }

    updateOtpText = () => {
        // will automatically trigger handleOnTextChange callback passed
        this.input1.setValue(this.state.inputText);
      };



    render(){
        const {Otp} = this.state;
        const {userId} = this.props.route.params
        const {navigation} = this.props
        // console.log(userId,'got the userId in the next Screen')
        // const { navigate } = this.props.navigation;
        return (
            <View>
                <Header textData={'Verification code'} 
                onBack={()=> this.props.navigation.goBack()}
                />
                    <FlashMessage position="top" />
                <View style={{marginVertical:30}}>
                    <Text style={styles.sentCode}>We have sent a verfication code  </Text>
                    {/* <Text style={styles.phone}>+91-{phone}</Text> */}
                {/* <TextInput placeholder="Enter The OTP Been Sent to YOu" value={otpText} onChangeText={(text)=>this.setopt(text)}/> */}
                <TextInputComponent value={Otp} placeholder="Enter the OTP" onChangeText={(text)=>this.setState({Otp:text})}/>
                </View>

                <View>


                <View style={styles.container}>
    
        
        
        
        
        {/* <OTPTextView
          ref={(e) => (this.input1 = e)}
          containerStyle={styles.textInputContainer}
          textInputStyle={[styles.roundedTextInput, {borderRadius: 100}]}
          handleTextChange={(text) => this.setState({otpInput: text})}
          inputCount={5}
          keyboardType="numeric"
        /> */}
      </View>



                   
                </View>

                <View>
                    <Text style={styles.footer1}>Didn't receive the code? </Text>
                    <TouchableOpacity onPress={this.verifyOtp}
          style={styles.sendOTPTouch}
        //   onPress={() =>{this.checkData()}
            // navigation.navigate(navigationStrings.VERIFICATION_SCREEN, {mobile:"7988016778" }) 
          >
          <Text style={styles.sendOTPText}> Go To HomePage</Text>
          {/* <CustomButton style={styles.buttonStyle} title="GO To HomePage"/> */}
        </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}


