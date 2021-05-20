import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
// import imagePath from '../constants/imagePath';

export default class SnapCorousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://assets.entrepreneur.com/content/3x2/2000/20181222122915-swiggy.jpeg",
                "https://assets.entrepreneur.com/content/3x2/2000/20181222122915-swiggy.jpeg",
                "https://assets.entrepreneur.com/content/3x2/2000/20181222122915-swiggy.jpeg"
            ]
        }
    }
    render() {
        return (
            <SliderBox
                images={this.state.images}
                dotColor="orange"
                inactiveDotColor="grey"
                sliderBoxHeight={400}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 15,
                    marginHorizontal: 10,
                    padding: 0,
                    margin: 0
                }}
                autoplay
                circleLoop
            />
        )
    }
}