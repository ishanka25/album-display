import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//create component
const App = () => (
    <View style={{ flex: 1 }}>
            <Header headerText={'Albums'} />
            <AlbumList />
    </View>
);

//render component
AppRegistry.registerComponent('albums', () => App);
