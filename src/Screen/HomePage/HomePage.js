import React,{Component} from 'react';
import {Text,View,FlatList} from 'react-native';
import Deals from '../../Components/Deals';
import imagePath from '../../constants/imagePath';
import Headers from '../../Components/Headers';
import actions from '../../redux/actions';

export default class HomePage extends Component{

    
    constructor(props) {
        super(props);
        this.state = {

            myData: [
                {
                    id: 0,
                    photo: imagePath.foods1,
                    name: "Pal Dhaba",
                    line: "Indian Food",
                    price1: 70,
                    price2: 359,
                    // offer: "30% OFF",
                    quantity: 0

                },
                {
                    id: 1,
                    photo: imagePath.foods2,
                    name: "Ordinary Cafe",
                    line: "Continental Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity: 0
                },
                {
                    id: 2,
                    photo: imagePath.foods3,
                    name: "Batido Milk Shake",
                    line: "Shake and beverages",
                    price1: 159,
                    price2: 359,
                    // offer: "30% OFF",
                    quantity: 0
                },
                {
                    id: 3,
                    photo: imagePath.food1,
                    name: "Haldiram",
                    line: " Fast Food",
                    price1: 29,
                    price2: 89,
                    offer: "10% OFF",
                    quantity: 0
                },
                {
                    id: 4,
                    photo: imagePath.food2,
                    name: "Domino's 5",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity: 0
                },
                {
                    id: 5,

                    photo: imagePath.food3,
                    name: "Domino's 6",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity: 0
                },
                {
                    id: 6,
                    photo: imagePath.food1,
                    name: "LA Pino",
                    line: "Pizza",
                    price1: 290,
                    price2: 359,
                    offer: "30% OFF",
                    quantity: 0
                },
                {
                    id: 7,
                    photo: imagePath.food2,
                    name: "Domino's 8",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "10% OFF",
                    quantity: 0
                }, 
            ],
            toggle:false
        }
    }

    _onNextScrean = (id) => {
        console.log(id)

    }


    buyNow = (id) => {
        console.log(id,"have got some id")
        const {myData} = this.state
        let newArr = [...myData]
        let index = newArr.findIndex((item)=> item.id === id)
        console.log(index,"got some index")
        actions.addToCart(newArr,index)
    }



    render(){
        const {myData} = this.state

        return (
            <View style={{flex:1}}>
                <Headers/>
                <FlatList
                data={myData}
                keyExtractor={(item)=> item.id}
                numColumns={2}
                renderItem={({item})=>{
                    return <Deals food={item}
                    buyNow={this.buyNow}
                    _onNextScrean={this._onNextScrean}
                    />
                }}
                
                />
                {/* <Text>Welcome to HomePage</Text> */}
            </View>
        )
    }
}
