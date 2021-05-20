import React, { Component } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import actions from '../../redux/actions';
import { apiPost } from '../../utils/utils';

export default class Cart extends Component {

    state={
        data:[],
        limit:10,
        isLoading:false,
        noMoreData:false,
        skip:0
    }

    getData = () => {
        let {data,limit,noMoreData,skip} = this.state;
        this.setState({isLoading:true})
        actions.infiniteData({"searchType": "LEADERBOARD", "limit": `${limit}`, "skip": `${skip}`}).then((res)=>{
            console.log(res.data)
        })
    }

    componentDidMount(){
        this.getData()
    }

    if(isLoading){
        return <ActivityIndicator size="large" color="red"/>
    }
    render() {
        const {isLoading} = this.state;
        return (
            <View>
                {isLoading ? <ActivityIndicator size='large'/>: null}
                <Text>welcome to Cart Screen</Text>
            </View>
        )
    }
}
