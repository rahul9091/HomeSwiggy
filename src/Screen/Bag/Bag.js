import React, { Component } from 'react';
import {Text,View,FlatList,TouchableOpacity,Image} from 'react-native';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import styles from './styles';

 class Bag extends Component{
     constructor(props){
         super(props);
         this.state={
             total:0,
             totalPrice2:0,
         }
     }



     
  _renderItem = ({item, index}) => {
     return (
       <View>
         <View style={styles.rowDirection}>
           <Image source={item.photo} style={styles.photo} />
           <View style={styles.colDirection}>
             <View style={{flexDirection: 'row'}}>
                <Text style={styles.name}>{item.name}</Text>
                {/* <TouchableOpacity onPress={() => this.deleteItemCart(item.id)}>
                 <Image source={imagePath.delete} style={styles.delete} />
               </TouchableOpacity> */}
             </View>
            
             
             <Text style={styles.line}>{item.line}</Text>
             {/* <Text style={styles.line}>Size:8</Text> */}
             <View style={{flexDirection: 'row'}}>
               <Text style={styles.line}> Rs {item.price1}</Text>
               <Text style={styles.line2}> Rs {item.price2}</Text>
               <Text style={styles.line3}>({item.offer})</Text>
               <Text></Text>
             </View>
 
             <View style={styles.newView}>
              <TouchableOpacity onPress={() => this.deleteQuantity(index)}>
                 <Text style={styles.sub2}>-</Text>
                 <TouchableOpacity onPress={()=>this.deleteFromCart(item.id)}>
                 <Text style={{fontSize:20,fontWeight:'bold',marginTop:7}}>Delete</Text>
                 </TouchableOpacity>
               </TouchableOpacity>
               <Text style={styles.count}>{item.quantity}</Text>
               <TouchableOpacity onPress={() => this.addQuantity(index)}>
                 <Text style={styles.add2}>+</Text>
               </TouchableOpacity>
               
               
             </View>
           </View>
         </View>
       </View>
     );
   };

   deleteFromCart = (id) => {
    actions.deleteCart(id)
   }

   addQuantity = (index) => {
     const {cartAry} = this.props
     let addedArray = [...cartAry]
     console.log(addedArray,"addedArray")
     const index1 = index
    //  let index = addedArray.findIndex((item)=> item.id === id)
     console.log(index1,'got index1 in the add Quantity')
     actions.incrementCart(addedArray,index1)
   }

  deleteQuantity= (index) => {
    const {cartAry} = this.props;
    const cartArray2 = [...cartAry]
    const index2 = index
    actions.decrementCart(cartArray2,index2)
  }
   
  render() {
      const {cartAry,amount,discount} = this.props;
      
      console.log(cartAry,"fetch cartAry from redux")
      const {total,totalPrice2} = this.state;
  
    return (
      <View style={{flex: 1}}>
        <View style={styles.toggleStyle}>
        <Text style={styles.headerText}>SHOPPING BAG</Text>
            </View>
        <View style={styles.headerShadow}></View>

        <View style={{flex: 1}}>
          <FlatList
            data={cartAry}
            // showsVerticalScrollIndicator={false}
            // numColumns={2}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{marginBottom: 10}} />}
            renderItem={(item, index) => this._renderItem(item, index)}
          />

          <View>
            <Text style={{marginTop: 7, fontWeight: 'bold', marginLeft: 8}}>
              PRICE DETAILS ({cartAry.length} Items)
            </Text>
            <View
              style={{
                backgroundColor: 'gray',
                height: 1,
                // borderBottomWidth:1,
                opacity: 0.5,
                marginLeft: 8,
                marginRight: 8,
                marginBottom: 8,
                marginTop: 5,
              }}></View>

            <View style={styles.paymentRow}>
              <Text style={{opacity: 0.7}}>Total MRP</Text>
              <Text style={{marginLeft: 'auto'}}>Rs.{discount}</Text>
            </View>
            <View style={styles.paymentRow}>
              <Text style={{opacity: 0.7}}>Discount on MRP</Text>
              <Text style={{marginLeft: 'auto', color: '#54baa4'}}>
                {' '}
                - Rs. {amount}
              </Text>
            </View>
            <View style={styles.paymentRow}>
              {/* <Text style={{opacity: 0.7}}>Convenience Fee</Text> */}
              {/* <Text
                style={{
                  marginLeft: 'auto',
                  textDecorationLine: 'line-through',
                }}>
                Rs.99
              </Text> */}
              {/* <Text style={{color: '#54baa4'}}> FREE</Text> */}
            </View>
            <View
              style={{
                backgroundColor: 'gray',
                height: 1,
                opacity: 0.5,
                marginLeft: 8,
                marginRight: 8,
                marginBottom: 8,
                marginTop: 5,
              }}></View>
            <View style={styles.paymentRow}>
              <Text style={{opacity: 0.7, fontWeight: 'bold'}}>
                Total Amount
              </Text>
              <Text style={{marginLeft: 'auto', fontWeight: 'bold'}}>
                Rs. {discount-amount}
              </Text>
            </View>
          </View>
        </View>

       <TouchableOpacity
          style={styles.place2Order}
          onPress={() => navigation.navigate(navigationStrings.TRACK_ORDER)}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginRight: 'auto',
              marginLeft: 'auto',
              marginTop: 'auto',
              marginBottom: 'auto',
            }}>
            PLACE ORDER
          </Text>
        </TouchableOpacity>

        <View></View>
        {/* <Text>{total}</Text> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        cartAry:state.food.newFoodAry,
        amount:state.food.totalAmount,
        discount:state.food.discountAmount
    }
}

export default connect(mapStateToProps)(Bag);