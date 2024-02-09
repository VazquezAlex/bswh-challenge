// Core imports.
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface AlbumItemProps {
    item: any;
}

const AlbumItem = ({item}: AlbumItemProps): JSX.Element => {
    return (
        <View style={styles.containter}>
            <Text style={styles.name}>{item.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containter: {
        paddingLeft: 35,
        paddingRight: 10,
        paddingVertical: 5,
    },
    name: {
        textTransform: 'capitalize',
    },
});

export default AlbumItem;
