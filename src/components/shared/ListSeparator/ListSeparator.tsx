// Core imports.
import React from 'react';
import {StyleSheet, View} from 'react-native';

const ListSeparator = (): JSX.Element => {
    return <View style={styles.container} />;
};

const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderColor: '#c0c0c0',
        borderWidth: 0.5,
    },
});

export default ListSeparator;
