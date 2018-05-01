import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Rating } from 'react-native-elements';


class Rates extends Component {
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
      }
    render(){
        return (
            <View>    
                <Rating showRating onFinishRating={this.ratingCompleted} style={{ paddingVertical: 10 }} imageSize={40} />
                <Rating
                        showRating
                        type="star"
                        fractions={1}
                        startingValue={3}
                        readonly
                        imageSize={40}
                        onFinishRating={this.ratingCompleted}
                        style={{ paddingVertical: 10 }} />
            </View>
        )
    }
}
export default Rates;