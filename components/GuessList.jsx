import React from 'react';
import { FlatList , View, Text, StyleSheet} from 'react-native';

const GuessList = ({ guesses}) => {
    return(
        <FlatList data={guesses} />
    )
}

export default GuessList;