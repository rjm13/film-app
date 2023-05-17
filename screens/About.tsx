import React, { useEffect, useState, useContext } from 'react';
import {
    View, 
    Text, 
    Dimensions,
    ScrollView
} from 'react-native';

import {AppContext} from '../AppContext';
import useStyles from '../styles';
import SocialBlock from '../components/SocialBlock'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const About = ({navigation} : any) => {

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
            <ScrollView contentContainerStyle={{alignItems: 'center'}}>

                <View style={{height: 100}} />

                <View style={{marginHorizontal: 40, marginVertical: 20}}>
                    <Text style={[styles.title, {fontWeight: '500', fontSize: 24, textTransform: 'capitalize', textAlign: 'center'}]}>
                        The 25th Annual
                    </Text>
                    <Text style={[styles.title, {fontWeight: '900', fontSize: 30, textTransform: 'uppercase', textAlign: 'center'}]}>
                        Chicago Irish Film Festival
                    </Text>
                    <Text style={[styles.title, {fontSize: 20, textAlign: 'center', marginTop: 20, }]}>
                        March 25th - 27th
                    </Text>
                </View>

                <SocialBlock />

                <View>

                </View>

                {/* press release */}
                {/* Venues */}
                {/* how to fest: in person */}
                {/* how to fest: virtual */}
                {/* faq */}

            </ScrollView>
        </View>
    )
}

export default About;