// import * as React from 'react';

// export const navigationRef = React.createRef();

// export function navigate(name, params) {
//   navigationRef.current?.navigate(name, params);
// }

import { createNavigationContainerRef, DrawerActions } from '@react-navigation/native';


export const navigationRef = createNavigationContainerRef()

export function navigate(name : any, params : any ) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function toggle() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.toggleDrawer());
  }
}

