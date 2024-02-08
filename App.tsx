// Core imports.
import React from 'react';
import {SafeAreaView} from 'react-native';

// Third-party imports,
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Local imports.
import UserPage from './src/pages/UserPage';

// Creation of stack navigation.
const Stack = createStackNavigator();

const App = (): JSX.Element => {
    return (
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={UserPage} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default App;
