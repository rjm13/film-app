import React, { useEffect, useState, useContext, useRef } from 'react';
import {
    View, 
    Text, 
    Dimensions,
    Animated,
    PanResponder,
    Platform
} from 'react-native';

import {AppContext} from '../AppContext';
import useStyles from '../styles';

import * as RootNavigation from '../navigation/RootNavigation';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({navigation} : any) => {

    const { theme } = useContext(AppContext);
    const { userID } = useContext(AppContext);

    const styles = useStyles(theme);

    const [message, setMessage] = useState({
        title: '',
    })

    const SCREEN_HEIGHT = Dimensions.get("window").height;

    // const pan = useState(
    //     new Animated.ValueXY({ x: 0, y: 0 })
    //   )[0];

    const pan = useState(
        new Animated.ValueXY({ x: 0, y: 100 })
      )[0];

      const scaleY = useState(
        new Animated.Value(0)
      )[0];
    
    
      const panResponder = useState(
        PanResponder.create({
          onMoveShouldSetPanResponder: () => true,
          onPanResponderGrant: () => {
            pan.extractOffset();
            return true;
          },
          onPanResponderMove: (e, gestureState) => {
            pan.setValue({ x: 0, y: gestureState.dy });
            //scaleY.setValue(gestureState.dy)
            if (gestureState.dy > 0) {
                Animated.spring(scaleY, {
                  toValue: SCREEN_HEIGHT - 100,
                  tension: 1,
                  useNativeDriver: false,
                }).start();
              } else if (gestureState.dy < 0) {
                Animated.spring(scaleY, {
                  toValue: 100,
                  tension: 1,
                  useNativeDriver: false,
                }).start();
              }
          },
          onPanResponderRelease: (e, gestureState) => {
            
            // if (gestureState.dy > 0) {
            //   Animated.spring(scaleY, {
            //     toValue: SCREEN_HEIGHT - 200,
            //     tension: 1,
            //     useNativeDriver: false,
            //   }).start();
            // } else if (gestureState.dy < 0) {
            //   Animated.spring(scaleY, {
            //     toValue: 120,
            //     tension: 1,
            //     useNativeDriver: false,
            //   }).start();
            // } else if (gestureState.dy < 0) {
            //   Animated.spring(pan.y, {
            //     toValue: 0,
            //     tension: 1,
            //     useNativeDriver: false,
            //   }).start();
            // } else if (gestureState.dy > 0) {
            //   Animated.spring(pan.y, {
            //     toValue: -SCREEN_HEIGHT - 200,
            //     tension: 1,
            //     useNativeDriver: false,
            //   }).start();
            // }
          },
        })
      )[0];

    
      const animatedHeight = {
        transform: pan.getTranslateTransform(),
      };

      const animatedBoxHeight = scaleY.interpolate({
        inputRange: [100, SCREEN_HEIGHT - 100],
        outputRange: [100, SCREEN_HEIGHT - 100],
        extrapolate: 'clamp',
      });
    

    return (
            
           <View style={{position: 'absolute', top: 0, }}>
                <Animated.View style={[{
                    position: 'absolute', 
                    alignItems: 'center',
                    height: animatedBoxHeight, 
                    backgroundColor: '#000',
                    width: Dimensions.get('window').width,
                    borderBottomLeftRadius: 14, 
                    borderBottomRightRadius: 14,
                    justifyContent: 'space-between',
                    overflow: 'hidden',
                    //transform: [{ scaleY: animatedBoxHeight }],
                }]}
                {...panResponder.panHandlers}
                >
                    <View style={{height: 1}}/>
                    <View style={{backgroundColor: '#000'}}>
                
                    </View>
                    <View>
                        <FontAwesome 
                            name='chevron-down'
                            size={14}
                            color='#fff'
                            style={{ paddingHorizontal: 20, paddingVertical: 10 }}
                        />
                    </View>
                    
                </Animated.View>
                <View style={{height: 40, width: Dimensions.get('window').width, backgroundColor: '#000'}} />
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: Dimensions.get('window').width}}>
                    <FontAwesome 
                        name='navicon'
                        size={20}
                        color='#fff'
                        style={{ paddingHorizontal: 20 }}
                        onPress={() => RootNavigation.toggle()}
                    />
                    <View style={{}}>
                        <Text style={styles.header}>
                            Chicago Irish Film Festival
                        </Text>
                    </View>
                    <FontAwesome 
                        name='ticket'
                        size={20}
                        color='#fff'
                        style={{ paddingHorizontal: 20 }}
                    />
                </View>
                
           </View>
    )
}

export default Header;