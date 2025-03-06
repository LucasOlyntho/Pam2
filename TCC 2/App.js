import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './src/Pages/Home';
import Imc from './src/Pages/Imc';

export default function App() {

    const Stack = createNativeStackNavigator ();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Imc' component={Imc} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
