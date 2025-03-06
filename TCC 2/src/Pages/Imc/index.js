import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Pressable, TextInput } from 'react-native-web';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

export default function Imc() {

    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [imc, setImc] = useState(0)
    const [categoriasImc, setCategoriasImc] = useState([
        {
            limite: 18.5,
            mensagem: "o peso abaixo do normal"
        },
        {
            limite: 25,
            mensagem: "o peso normal"
        },
        {
            limite: 30,
            mensagem: "excesso de peso"
        },
        {
            limite: 35,
            mensagem: "obesidade grau I"
        },
        {
            limite: 40,
            mensagem: "obesidade grau II"
        },
        {
            limite: Infinity,
            mensagem: "obesidade grau III"
        },
    ])


    const calcularImc = (pesoImc, alturaImc) => {

        if(pesoImc > 0 && alturaImc > 0) {
            setImc(pesoImc / (alturaImc * alturaImc))
        } else {
            setImc(0)
        }

    }

    const mostrarImc = (imcMostrar) => {

        if (imcMostrar <= 0)
            return null;

        else {

            var msg = "Seu IMC é de " + Math.round(imcMostrar*10)/10 + ", você está com "

            for (let i = 0; i < categoriasImc.length; i++) {
                if (imcMostrar < categoriasImc[i].limite) {
                    msg += categoriasImc[i].mensagem;
                    break;
                }
            }
        
            msg += ".";

            return msg;
        }
    }

    return (
        <View style={styles.container}>

            <View style = {styles.square}>

            <Text>Insira o peso:</Text>
            <TextInput style={styles.textBox} value={peso} onChangeText={(text) => setPeso(text)}></TextInput>
            <Text>Insira a altura (em metros):</Text>
            <TextInput style={styles.textBox} value={altura} onChangeText={(text) => setAltura(text)}></TextInput>

            <Pressable onPress={() => calcularImc(peso, altura)}>
                <View style={styles.teste}>
                    <Text>Calcular</Text>
                </View>
            </Pressable>
            
            <Text>{mostrarImc(imc)}</Text>
  
            </View>

            <StatusBar style="auto" />
        </View>
    );
}
