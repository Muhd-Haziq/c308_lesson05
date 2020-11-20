import React from 'react';
import {MovieList} from './Movies.js';
import {BoatList} from './Boats';
import {View, Text, ScrollView} from 'react-native';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <BoatList />
      <MovieList />

    </ScrollView>
  );
};
export default App;
