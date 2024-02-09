// Core imports.
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {UsersList} from '../components/features/Users/UsersList';

const UserPage = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <UsersList />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default UserPage;
