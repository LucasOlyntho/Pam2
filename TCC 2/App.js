import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './src/Pages/Home';
import Imc from './src/Pages/Imc';
import BeberAgua from './src/Pages/BeberAgua';
import Vacinas from './src/Pages/Vacinas';
import TomarRemedio from './src/Pages/TomarRemedio';
import Meditacao from './src/Pages/Meditacao';
import ControleDiabetes from './src/Pages/ControleDiabetes';
import FrasesMotivacionais from './src/Pages/FrasesMotivacionais';
import Pressao from './src/Pages/Pressao';
import FrutasInformacoes from './src/Pages/FrutasInformacoes';

export default function App() {

    const Stack = createNativeStackNavigator ();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Imc' component={Imc} />
                <Stack.Screen name='BeberAgua' component={BeberAgua} />
                <Stack.Screen name='Vacinas' component={Vacinas} />
                <Stack.Screen name='TomarRemedio' component={TomarRemedio} />
                <Stack.Screen name='Meditacao' component={Meditacao} />
                <Stack.Screen name='ControleDiabetes' component={ControleDiabetes} />
                <Stack.Screen name='FrasesMotivacionais' component={FrasesMotivacionais} />
                <Stack.Screen name='Pressao' component={Pressao} />
                <Stack.Screen name='FrutasInformacoes' component={FrutasInformacoes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
