import React from 'react';

const context = {

    isRootScreen: null,
    setIsRootScreen: (val: boolean | null) => {},

    userID: null,
    setUserID: (val: string | null) => {},

    expoPushToken: null,
    setExpoPushToken: (val: string | null) => {},

    userFirstName: null,
    setUserFirstName: (val: string | null) => {},

    userLastName: null,
    setUserLastName: (val: string | null) => {},

    systemID: null,
    setSystemID: (val: string | null) => {},

    hospID: null,
    setHospID: (val: string | null) => {},

    departID: null,
    setDepartID: (val: string | null) => {},

    userRoleID: null,
    setUserRoleID: (val: string | null) => {},

    deepLink: null,
    setDeepLink: () => {},

    theme: false,
    setTheme: (val: boolean) => {},

    isManager: false,
    setIsManager: (val: boolean) => {},

    militaryTime: false,
    setMilitaryTime: (val: boolean) => {},
}

export const AppContext = React.createContext(context);