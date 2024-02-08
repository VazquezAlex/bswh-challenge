// Core imports.
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserPage = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text>Users</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default UserPage;
