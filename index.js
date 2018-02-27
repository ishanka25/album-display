import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create component
const App = () => (
        <Header headerText={'Albums'} />
);

//render component
AppRegistry.registerComponent('albums', () => App);
