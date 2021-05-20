import React,{Component} from 'react'
import {Text,View,TouchableOpacity} from 'react-native';
import CustomButton from '../../Components/CustomButton';
import SnapCorousel from '../../Components/SnapCorousel';
import styles from './styles';
import TextInputComponent from '../../Components/TextInputComponent'
import navigationStrings from '../../constants/navigationStrings';
import validation from '../../utils/validation';
import { showMessage } from 'react-native-flash-message';
import actions from '../../redux/actions'
import FlashMessage from "react-native-flash-message";

export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            phoneNumber:"",
            isValid:""
        }
    }

    isValidate = () => {
        const {phoneNumber} = this.state
        const errorMessage = validation({phoneNo:phoneNumber})
        if(errorMessage){
            showMessage({
                message:errorMessage,
                icon:"warning",
                type:'danger'
            })
            return false 
        }
        return true;
    }


    checkData = () => {
        const {navigation} = this.props;
        let {phoneNumber} = this.state;

        if(this.isValidate()){
            this.setState({isValid:true})
            actions.login({contactDetails:{phoneNo:phoneNumber,
            countryCode:"+91",
            countryCodeISO:"IN"
            }}).then(res=>{
                console.log(res + "got something in the scren")
                navigation.navigate(navigationStrings.VERIFICATION_SCREEN,{userId:res.data.userId})

                showMessage({
                    type:"success",
                    message:"OTP Sent Successfully",
                    
                })
                
            }).catch(error=>{
                showMessage({
                    message:"Login Fail",
                    type:"danger"
                })
                console.log(error)
            })
        }

    }

    setNumber = (text) => {
        this.setState({
            phoneNumber:text
        })
    }

    render(){
        return (
            <View>
                <FlashMessage position="top" />
            <SnapCorousel/>

            
<View style={ styles.containerStyle}>
    <View style={styles.container2Style}>
        {/* <Text style={styles.boldTextStyle}>Order from a wide range of restaurants</Text> */}
    </View>
    <Text style={styles.textStyle}>Ready To Order from Top restaurants?</Text>
    <TextInputComponent placeholder="Phone Number" onChangeText={(text) => this.setNumber(text)} keyboardType={"numeric"} />
     <CustomButton style={styles.touchableStyle} title="Send OTP" onPress={this.checkData}/>
    {/* <CustomButton title="SET DELIVERY LOCATION" style={{backgroundColor:'grey'}} /> */}
    <View style={{alignItems:'center',justifyContent:"space-between",flexDirection:'row'}}>
        <TouchableOpacity  onPress={()=>navigation.navigate(navigationStrings.LOGIN)} >
        <Text style={styles.text2Style}>Have an account?<Text style={{ color: 'orange', fontSize: 16 }}> Login</Text></Text>
        </TouchableOpacity>
        
    </View>
</View>

            </View>
        )
    }
}
