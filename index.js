import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create component
const App = () => (
        <Header />
);

//render component
AppRegistry.registerComponent('albums', () => App);
