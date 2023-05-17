//contains all of the stlying for the drawer

import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItem, } from '@react-navigation/drawer';

import useStyles from '../styles';
import { useDrawerStatus } from '@react-navigation/drawer'

// import { getUser, getDepartment } from '../src/graphql/queries'
// import { API, graphqlOperation, Auth } from "aws-amplify";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import { AppContext } from '../AppContext';

export function DrawerContent({navigation} : any) {

    const { theme } = useContext(AppContext);
    const { isManager } = useContext(AppContext);
    const { userFirstName, userLastName } = useContext(AppContext);

    const styles = useStyles(theme);

    const status = useDrawerStatus()

    const [hasPending, setHasPending] = useState(false)

    const [manager, setManager] = useState(false)

    useEffect(() => {
        console.log(isManager)
        if (isManager === true) {
            setManager(true)
        } else {
            setManager(false)
        }
    }, [status])

    return(
        <View style={{ flex:1 , backgroundColor: theme === true ? '#fff' : '#000'}}>
            <DrawerContentScrollView>
                <View style={{height: 80}}/>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Settings')}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginVertical: 20}}>
                        <Image
                            style={{marginRight: 10, alignSelf: 'center', height: 50, width: 50, borderRadius: 25, overflow: 'hidden'}}
                            source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                            }}
                        />
                        <Text style={[styles.header, {textTransform: 'capitalize', color: theme === true ? '#000' : '#fff'}]}>
                            {userFirstName + ' ' + userLastName} 
                        </Text>
                        <Text style={[styles.header, {textTransform: 'uppercase', color: theme === true ? '#000' : '#fff'}]}>
                        
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <View style={[styles.linebreak, {width: Dimensions.get('window').width - 120}]}/>

                <View style={{marginTop: 10}}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Root')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    <FontAwesome5 
                                        name='home'
                                        color='gray'
                                        size={20}
                                    />
                                    <Text style={styles.itemtext}>
                                        Home
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => navigation.navigate('TradeApprovalRequests', {trigger: Math.random()})}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                            <View style={istyles.box}>
                                <FontAwesome 
                                    name='info-circle'
                                    color='gray'
                                    size={20}
                                />
                                <Text style={[styles.itemtext]}>
                                    About
                                </Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => navigation.navigate('PostedShifts')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    <FontAwesome 
                                        name='calendar'
                                        color='gray'
                                        size={20}
                                    />
                                    <Text style={[styles.itemtext]}>
                                        Schedule
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => navigation.navigate('PostedShifts')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    <FontAwesome 
                                        name='ticket'
                                        color='gray'
                                        size={20}
                                    />
                                    <Text style={[styles.itemtext]}>
                                        Tickets
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                   
                        
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('CreateTrade')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    <FontAwesome5 
                                        name='film'
                                        color='gray'
                                        size={20}
                                    />
                                    <Text style={[styles.itemtext]}>
                                    Films
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => navigation.navigate('TradeApprovalRequests', {trigger: Math.random()})}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    <FontAwesome5 
                                        name='trophy'
                                        color='gray'
                                        size={20}
                                    />
                                    <Text style={[styles.itemtext]}>
                                        Awards
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => navigation.navigate('TradeApprovalRequests', {trigger: Math.random()})}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    <Entypo 
                                        name='network'
                                        color='gray'
                                        size={20}
                                    />
                                    <Text style={[styles.itemtext]}>
                                        Networking
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

               

            <TouchableWithoutFeedback onPress={() => navigation.navigate('TradeApprovalRequests', {trigger: Math.random()})}>
                    <View style={{}}>
                        <View style={istyles.box}>
                            <FontAwesome 
                                name='money'
                                color='gray'
                                size={20}
                            />
                            <Text style={[styles.itemtext]}>
                                Sponsors
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
               
                <TouchableWithoutFeedback onPress={() => navigation.navigate('TradeApprovalRequests', {trigger: Math.random()})}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                        <View style={istyles.box}>
                            <FontAwesome5 
                                name='hand-holding-heart'
                                color='gray'
                                size={20}
                            />
                            <Text style={[styles.itemtext]}>
                                Support
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <View style={{height: 20}}/>
            

                        
                </View>
            </DrawerContentScrollView>


            {/* <View style={istyles.bottomDrawerSection}>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('TradeApprovalRequests', {trigger: Math.random()})}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                        <View style={istyles.box}>
                            <FontAwesome 
                                name='info-circle'
                                color='gray'
                                size={20}
                            />
                            <Text style={[styles.itemtext]}>
                                About
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('TradeApprovalRequests', {trigger: Math.random()})}>
                    <View style={{}}>
                        <View style={istyles.box}>
                            <FontAwesome 
                                name='money'
                                color='gray'
                                size={20}
                            />
                            <Text style={[styles.itemtext]}>
                                Sponsors
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
               
                <TouchableWithoutFeedback onPress={() => navigation.navigate('TradeApprovalRequests', {trigger: Math.random()})}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                        <View style={istyles.box}>
                            <FontAwesome5 
                                name='hand-holding-heart'
                                color='gray'
                                size={20}
                            />
                            <Text style={[styles.itemtext]}>
                                Support
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('TradeApprovalRequests', {trigger: Math.random()})}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                        <View style={istyles.box}>
                            <FontAwesome 
                                name='gear'
                                color='gray'
                                size={20}
                            />
                            <Text style={[styles.itemtext]}>
                                Settings
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <View style={{height: 20}}/>
            </View> */}
        </View>
    )
}

const istyles = StyleSheet.create({
    box: {
        width: 200, 
        paddingVertical: 14, 
        paddingHorizontal: 20, 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    expandedbox: {
        paddingVertical: 12, 
        paddingHorizontal: 20, 
        flexDirection: 'row', 
        alignItems: 'center',
        backgroundColor: '#ededed'
    },
    expandedtext: {
        marginLeft: 30,  
        fontSize: 16
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 10,
        //fontFamily: 'chalkboard-bold',
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        //marginBottom: 0,
        //borderTopColor: '#f4f4f4',
        //borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});