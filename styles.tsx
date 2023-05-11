import React, {useContext, useEffect} from 'react';
import {Dimensions, Platform, StyleSheet} from 'react-native';
import { AppContext } from './AppContext';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height


function useStyles(theme : any) {

  //const { theme } = useContext(AppContext);

return StyleSheet.create ({
  
    container: {
        flex: 1,
        backgroundColor:  theme === true ? '#F6F6F6' : '#303030',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
      },
      header: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
      },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
      },
      infotext: {
        fontSize: 14,
        color: theme === true ? '#ffffffa5' : '#000000a5',
      },
    paragraph: {
      fontSize: 14,
      color: theme === true ? '#fff' : '#000',
    },
    subtext: {
      fontSize: 12,
      fontWeight: '600',
      color: theme === true ? '#ffffffa5' : '#000000a5',
    },
    itemtext: {
      marginLeft: 30,
      fontSize: 16,
      fontWeight: '400',
      color: theme === true ? '#fff' : '#000',
    },
    textInputTitle: {
      color: theme === true ? '#000' : '#fff',
      fontWeight: 'normal',
    },
    inputfield: {
        width: SCREEN_WIDTH - 40,
        height: 40,
        backgroundColor: '#363636',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        overflow: 'hidden',
    },
    inputtitle: {
      color: theme === true ? '#fff' : '#000',
      fontSize: 18,
      fontWeight: '600'
    },
    buttonlayout: {
        backgroundColor: 'maroon',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        overflow: 'hidden',
    },
    buttontext: {
      fontSize: 16,
      fontWeight: '800',
      color: '#fff',
      textAlign: 'center'
    },
    optionsitem: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      marginLeft: 40,
      marginRight: 40,
      marginBottom: 30,
  },
  timeselect: {
    fontSize: 18,
    fontWeight: '600',
    color: theme === true ? '#fff' : '#000'
  },
  settingsitem: {
    fontSize: 16,
    color: theme === true ? '#fff' : '#000',
  },
});
}

export default useStyles