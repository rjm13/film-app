//contains all of the stlying for the drawer

import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import useStyles from '../styles';
import { useDrawerStatus } from '@react-navigation/drawer'

// import { getUser, getDepartment } from '../src/graphql/queries'
// import { API, graphqlOperation, Auth } from "aws-amplify";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
        <View style={{ flex:1 , backgroundColor: theme === true ? '#000' : '#fff'}}>
            <DrawerContentScrollView>
                <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 40}}>
                    <Text style={[styles.title, {textTransform: 'capitalize', color: theme === true ? '#fff' : 'maroon'}]}>
                        {userFirstName + ' ' + userLastName + ','} 
                    </Text>
                    <Text style={[styles.title, {textTransform: 'uppercase', color: theme === true ? '#fff' : 'maroon'}]}>
                        {' ' + 'RN'}
                    </Text>
                </View>

                <View style={{backgroundColor: theme === true ? '#fff' : 'maroon', height: 3, marginTop: 10, marginHorizontal: 20}}/>

                <View style={{marginTop: 30}}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('MyShifts')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    <Text style={styles.itemtext}>
                                        Upcoming Shifts
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => navigation.navigate('PostedShifts')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    <Text style={[styles.itemtext]}>
                                        My Trades
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('CreateTrade')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    <Text style={[styles.itemtext]}>
                                       Post Shift 
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => navigation.navigate('TradeApprovalRequests', {trigger: Math.random()})}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    <Text style={[styles.itemtext]}>
                                        Pickup Responses
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        {manager === true ? (
                            <View>

                            <View style={{backgroundColor: 'lightgray', height: 1, marginVertical: 10}}/>

                            <TouchableWithoutFeedback onPress={() => navigation.navigate('CreateShift')}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                    <View style={istyles.box}>
                                        <Text style={styles.itemtext}>
                                            Create Open Shift 
                                        </Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => navigation.navigate('ApprovalRequests', {trigger: Math.random()})}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                    <View style={istyles.box}>
                                        <Text style={styles.itemtext}>
                                            Approval Requests
                                        </Text>
                                    </View>
                                    {hasPending === true ? (
                                    <FontAwesome5 name='exclamation-circle' color='maroon' size={20} />
                                    ) : null}
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => navigation.navigate('FilledShifts', {trigger: Math.random()})}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                    <View style={istyles.box}>
                                        <Text style={styles.itemtext}>
                                            Filled Shifts
                                        </Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                    

                            <TouchableWithoutFeedback onPress={() => navigation.navigate('CreateAnnouncement')}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                    <View style={istyles.box}>
                                        <Text style={[styles.itemtext]}>
                                            Create Announcement
                                        </Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => navigation.navigate('Training')}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                    <View style={istyles.box}>
                                        <Text style={[styles.itemtext]}>
                                            Manage Training
                                        </Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>

                            </View>  
                        ) : null}
                        
                </View>
            </DrawerContentScrollView>


            {/* <Drawer.Section style={styles.bottomDrawerSection}>
                {CurrentCard !== null ? (
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Feather
                                name='book'
                                color={color}
                                size={size}
                            />
                        )}
                            label='Current Game'
                            labelStyle={ styles.itemText}
                            onPress={() => navigation.navigate('Scorecard')}
                    />
                ) : null}
            </Drawer.Section> */}
        </View>
    )
}

const istyles = StyleSheet.create({
    box: {
        paddingVertical: 14, 
        paddingHorizontal: 20, 
        flexDirection: 'row', 
        alignItems: 'center'
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