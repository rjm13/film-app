import React, { useEffect, useState, useContext } from 'react';
import {
    View, 
    Text, 
    Dimensions,
} from 'react-native';

import {AppContext} from '../AppContext';
import useStyles from '../styles';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tickets = ({navigation} : any) => {

    const { theme } = useContext(AppContext);
    const { userID } = useContext(AppContext);

    const styles = useStyles(theme);

    const [message, setMessage] = useState({
        title: '',
        subtitle: '',
        content: '',
        messageType: '',
    })

    return (
        <View style={styles.container}>
            <View style={{height: 100}} />
            
        </View>
    )
}

export default Tickets;