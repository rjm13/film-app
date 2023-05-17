import React, {useContext, useEffect, useState} from 'react';
import { View, 
        StyleSheet, 
        Text, 
        Dimensions, 
        Switch, 
        ScrollView, 
        TouchableWithoutFeedback, 
        TouchableOpacity, 
        ActivityIndicator,
        Modal,
        Image
    } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {StatusBar} from 'expo-status-bar';

import {AppContext} from '../AppContext';
import useStyles from '../styles';

// import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
// import { updateUser } from '../src/graphql/mutations';
// import { getUser } from '../src/graphql/queries';



const Settings = ({navigation} : any) => {

    const { setTheme, setMilitaryTime } = useContext(AppContext);
    const { theme, militaryTime, userID } = useContext(AppContext);

    const styles = useStyles(theme);

    const [userInfo, setUserInfo] = useState()

//theme switch
    const [isSwitchOn, setIsSwitchOn] = useState<boolean>(theme);
    const [is24SwitchOn, setIs24SwitchOn] = useState<boolean>(militaryTime);


    const onToggleSwitch = async () => {

        if (theme === true) {
            setIsSwitchOn(false);
            setTheme(false);
            // await API.graphql(
            //     graphqlOperation(
            //         updateUser, {input: {
            //             id: userID,
            //             Setting1: false,
            // }}))
        } else {
            setIsSwitchOn(true);
            setTheme(true);
            // await API.graphql(
            //     graphqlOperation(
            //         updateUser, {input: {
            //             id: userID,
            //             Setting1: true,
            // }}))
        }
    }  

    // const onToggle24Switch = async () => {

    //     if (militaryTime === true) {
    //         setIs24SwitchOn(false);
    //         setMilitaryTime(false);
    //         await API.graphql(
    //             graphqlOperation(
    //                 updateUser, {input: {
    //                     id: userID,
    //                     Setting4: false,
    //         }}))
    //     } else {
    //         setIs24SwitchOn(true);
    //         setMilitaryTime(true);
    //         await API.graphql(
    //             graphqlOperation(
    //                 updateUser, {input: {
    //                     id: userID,
    //                     Setting4: true,
    //         }}))
    //     }
    // }  

    const [quals, setQuals] = useState([{}]);

    //get the user info
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         let qualsarr = [];
    //         const response = await API.graphql(graphqlOperation(
    //             getUser, {id: userID}
    //         ))
    //         setUserInfo(response.data.getUser);
            
    //         for (let i =0; i < response.data.getUser.quals.items.length; i++) {
    //             qualsarr.push(response.data.getUser.quals.items[i].qual)
    //         }
    //         setQuals(qualsarr);
    //     }
    //     fetchUser();
    // }, [])

    const [signingout, setSigningout] = useState(false)

    //sign out function
    // async function SignOut() {
    //     setSigningout(true);
    //     try {
    //         await Auth.signOut()
    //         .then(() => navigation.replace('SignIn'))
    //         setSigningout(false)
    //     } catch (error) {
    //         console.log('error signing out: ', error);
    //         alert("error signing out")
    //         setSigningout(false)
    //     }
    // }

    const [visible, setVisible] = useState(false);
    const showModal = () => {setVisible(true);}
    const hideModal = () => setVisible(false);

    const containerStyle = {
        backgroundColor: theme === true ? '#000' : '#fff', 
        borderRadius: 15,
        paddingVertical: 40
    };

    const [modalVisible, setModalVisible] = useState(false);


    return (
                
        <View style={styles.container}>

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}>
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                <View style={{justifyContent: 'center', alignItems: 'center', height: Dimensions.get('window').height, width: Dimensions.get('window').width}}>
                <View style={{backgroundColor: '#fff', padding: 40, borderRadius: 10, overflow: 'hidden'}}>
                    <View style={{ alignItems: 'center'}}>
                            <Text style={[styles.paragraph, {paddingVertical: 20}]}>
                                Are you sure you want to log out?
                            </Text>
                            <View style={{}}>
                                {signingout ? (
                                    <ActivityIndicator size="small" color="maroon"/>
                                ) : (
                                <TouchableOpacity 
                                //onPress={SignOut}
                                >
                                        <View style={styles.buttonlayout} >
                                            <Text style={styles.buttontext}>Log Out</Text> 
                                        </View>
                                    </TouchableOpacity> 
                                )}
                            </View>
                        </View>
                </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
            
        <ScrollView>
                
            <View style={{height: 100}}/>

            <Image
                style={{alignSelf: 'center', marginVertical: 40, height: 100, width: 100, borderRadius: 50, resizeMode: 'contain', overflow: 'hidden'}}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />

            <View >
                <View style={styles.optionsitem}>
                    <View style={[istyles.subblock, {width: '100%', flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <Text style={styles.subparagraph}>
                                Name
                            </Text>
                            <Text style={[styles.infotext, {textTransform: 'capitalize'}]}>
                                Randy Myers
                            </Text>
                    </View>
                </View>
            </View>

            <View >
                <View style={styles.optionsitem}>
                    <View style={[istyles.subblock, {width: '100%', flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <Text style={styles.subparagraph}>
                                Location
                            </Text>
                            <Text style={[styles.infotext, {}]}>
                                Houston, TX
                            </Text>
                    </View>
                </View>
            </View>

            

            <View style={styles.linebreak}/>


            <View style={{ marginHorizontal: 20, marginVertical: 20}}>
                <Text style={styles.paragraph}>
                    App Settings
                </Text>
            </View>

            <View>
                <View style={styles.optionsitem}>
                    <View style={istyles.subblock}>
                        <Text style={styles.subparagraph}>
                            Light Mode
                        </Text>
                    </View>
                    
                    <Switch
                        trackColor={{ false: 'gray', true: '#64BE50' }}
                        thumbColor={isSwitchOn === true ? '#187D46' : isSwitchOn === false ? "#474747" : "#474747"}
                        ios_backgroundColor="#187D46"
                        onValueChange={onToggleSwitch}
                        value={isSwitchOn}
                    />
                </View>
            </View>

            <View style={styles.linebreak}/>
            
            <View style={{ marginHorizontal: 20, marginVertical: 20}}>
                <Text style={styles.paragraph}>
                    Options
                </Text>
            </View>

            <View >
                <View style={styles.optionsitem}>
                    <View style={istyles.subblock}>
                        <TouchableWithoutFeedback onPress={() => {setModalVisible(true)}}>
                            <Text style={styles.subparagraph}>
                                Sign Out
                            </Text>
                        </TouchableWithoutFeedback>
                        
                    </View>
                </View>
            </View>
            <StatusBar style={theme === true ? 'light' : "dark"} backgroundColor='transparent'/>
        </ScrollView>
        </View>
    );
}

const istyles = StyleSheet.create({

    subblock: {
        width: '75%',
    },

});

export default Settings;