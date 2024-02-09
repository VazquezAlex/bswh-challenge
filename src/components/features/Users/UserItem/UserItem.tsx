// Core imports.
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface UserItemProps {
    name: string;
}

const UserItem = ({name}: UserItemProps): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#bababa',
        padding: 10,
    },
});

export default UserItem;
