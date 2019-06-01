//import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

// Create a component
const App = () => (
  <Header headerText={'Albums!'} />
);


// Render it to the device
AppRegistry.registerComponent('albums', () => App); 
// For every React-Native application we create, we need to register one component. In
// this case we register our top level component App and give it the name of our project, 'albums'
