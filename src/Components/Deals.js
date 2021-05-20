import React,{useState} from 'react';
import {Switch} from 'react-native'
import imagePath from '../constants/imagePath';



import {
    View,
    Text,
    StyleSheet,
    Image,
    Modal,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';
import navigationStrings from '../constants/navigationStrings';
import colors from '../styles/colors';




export default function Deals (props) {
    const {buyNow,food} = props;
    // console.log(food)

    // const { data, buyNow,toggle } = props;
    return (
        <>
         
        <View >

          

            <View style={styles.card}>
                <Image
                    source={food.photo}
                    style={styles.photo}
                />
                <View style={styles.rowDirection}>
                    <Text style={styles.name}>{food.name}</Text>
                    <Image
                        source={imagePath.heart}
                        style={styles.heart}
                    />
                </View>
                <Text style={styles.line}>{food.line}</Text>
                <View style={styles.rowDirection}>
                    <Text style={styles.price1}>
                        Rs {food.price1}
                    </Text>
                    <Text style={styles.price2}>
                        Rs {food.price2}
                    </Text>
                    <Text style={styles.offer}>
                        Rs . {food.offer}
                    </Text>
                </View>

            </View>


            <View>
               <TouchableOpacity style={styles.buy2Now} onPress={()=> buyNow(food.id)} >
                    <Text style={styles.buyText}>BUY NOW</Text>

                </TouchableOpacity>
            </View>
        </View>
        </>


    )

}

const styles = StyleSheet.create({
    card: {
        marginLeft: 2,
        marginRight: 2,
        flex: 1
    },
    photo: {
        width: 200,
        height: 180,

    },
    heart: {
        width: 15,
        height: 15,
        marginLeft: "auto",
        marginRight: 15,
        marginTop: 5
    },
    name: {
        fontWeight: 'bold',

    },
    line: {
        fontSize: 15,
        color: "gray"
    },
    rowDirection: {
        flexDirection: 'row'
    },
    price2: {
        fontSize: 12,
        marginTop: 2,
        textDecorationLine: 'line-through',
        color: "gray",
        marginRight: 2,
        marginLeft: 2
    },
    offer: {
        color: 'red'
    },
    buyNow: {
        height: 30,

        marginRight: 15,
        marginLeft: 5,
        borderRadius: 30,
        backgroundColor: colors.theme2Color
    },
    buy2Now:{
        height: 30,

        marginRight: 15,
        marginLeft: 5,
        borderRadius: 30,
        backgroundColor: colors.themeColor
    },
    buyText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 50,
        marginTop: 5
    }
})