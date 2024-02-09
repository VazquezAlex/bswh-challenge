// Core imports.
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// Third-party imports,
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Local imports.
import UserPage from './src/pages/UserPage';

// Creation of stack navigation.
const Stack = createStackNavigator();

const App = (): JSX.Element => {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Users" component={UserPage} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
