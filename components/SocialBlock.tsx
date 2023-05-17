import React, { useEffect, useState, useContext, useRef } from 'react';
import {
    View, 
    Text, 
    Dimensions,
    Animated,
    PanResponder,
    Platform,
    Linking,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

import {AppContext} from '../AppContext';
import useStyles from '../styles';

import * as RootNavigation from '../navigation/RootNavigation';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SocialBlock = () => {

    return (
        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.facebook.com/ChicagoIrishFF/')}>
                <Image 
                    style={{height: 50, width: 50}}
                    source={require('../assets/social/facebook.png')}
                    
                />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://twitter.com/ChicagoIrishFF')}>
                <Image 
                    style={{height: 40, width: 40, marginRight: 4}}
                    source={require('../assets/social/twitter.png')}
                />
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.instagram.com/chicagoirishff/')}>
                <Image 
                    style={{height: 40, width: 40, marginRight: 6}}
                    source={require('../assets/social/instagram.png')}
                />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.youtube.com/channel/UCcyukF7C8Q4FNt8cA9F4S_w')}>
               <Image 
                    style={{height: 35, width: 35, marginRight: 6}}
                    source={require('../assets/social/youtube.png')}
                /> 
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://filmfreeway.com/ChicagoIrishFilmFestival')}>
                <Image 
                    style={{height: 34, width: 34, borderRadius: 16, overflow: 'hidden', marginRight: 6}}
                    source={require('../assets/social/filmfreeway.jpeg')}
                />
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback onPress={() => Linking.openURL('mailto:info@chicagoirishfilmfestival.com')}>
                <Image 
                    style={{height: 36, width: 36}}
                    source={require('../assets/social/email.png')}
                />
            </TouchableWithoutFeedback>
            
        </View>
    )
}

export default SocialBlock;