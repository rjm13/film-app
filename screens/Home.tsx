import React, { useEffect, useState, useContext } from 'react';
import {
    View, 
    Text, 
    Dimensions,
    ImageBackground,
    Modal,
    TouchableWithoutFeedback
} from 'react-native';

import {AppContext} from '../AppContext';
import useStyles from '../styles';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({navigation} : any) => {

    const { theme } = useContext(AppContext);
    const { userID } = useContext(AppContext);

    const styles = useStyles(theme);

    const [message, setMessage] = useState({
        title: '',
        subtitle: '',
        content: '',
        messageType: '',
    })

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={{height: 100}} />
            <ImageBackground source={{uri: 'https://wallpaperaccess.com/full/199948.jpg'}} style={{width: Dimensions.get('window').width, height: 240, marginTop: -10}} imageStyle={{}}>
                <View style={{alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', backgroundColor: '#64BE50a5'}}>
                       <Text style={{    
                        color: 'white',
                        fontSize: 42,
                        lineHeight: 84,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        //backgroundColor: '#000000c0',
                        }}>
                        WELCOME
                    </Text> 
            </View>                        
            </ImageBackground>
        </View>
    )
}

export default Home;