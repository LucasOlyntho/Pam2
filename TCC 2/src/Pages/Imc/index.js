import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, TextInput } from 'react-native';
import { useState } from 'react';
import styles from './styles';

export default function Imc() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [categoria, setCategoria] = useState('');

    const categoriasImc = [
        { limite: 18.5, mensagem: "peso abaixo do normal", cor: "#3498db" },
        { limite: 25, mensagem: "peso normal", cor: "#2ecc71" },
        { limite: 30, mensagem: "excesso de peso", cor: "#f39c12" },
        { limite: 35, mensagem: "obesidade grau I", cor: "#e67e22" },
        { limite: 40, mensagem: "obesidade grau II", cor: "#d35400" },
        { limite: Infinity, mensagem: "obesidade grau III", cor: "#c0392b" },
    ];

    const calcularImc = () => {
        const pesoImc = parseFloat(peso);
        const alturaImc = parseFloat(altura);
        
        if (pesoImc > 0 && alturaImc > 0) {
            const novoImc = pesoImc / (alturaImc * alturaImc);
            setImc(novoImc);

        
            for (let i = 0; i < categoriasImc.length; i++) {
                if (novoImc < categoriasImc[i].limite) {
                    setCategoria(categoriasImc[i]);
                    break;
                }
            }
        } else {
            setImc(null);
            setCategoria('');
        }
    };

    return (
        <View style={styles.container}>

            <Text style={styles.textTitle}>IMC</Text>
            
            <View style={styles.square}>
                <Text style={styles.texto}>Insira o peso (em kg):</Text>
                <TextInput 
                    style={styles.textBox} 
                    value={peso} 
                    onChangeText={setPeso} 
                    keyboardType="numeric" 
                    placeholder="Ex: 70"
                />
                <Text style={styles.texto}>Insira a altura (em metros):</Text>
                <TextInput 
                    style={styles.textBox} 
                    value={altura} 
                    onChangeText={setAltura} 
                    keyboardType="numeric" 
                    placeholder="Ex: 1.75"
                />

                <Pressable onPress={calcularImc} style={({ pressed }) => [
                    styles.button, 
                    { opacity: pressed ? 0.7 : 1 }
                ]}>
                    <Text style={styles.buttonText}>Calcular</Text>
                </Pressable>

                {imc !== null && (
                    <View style={[styles.resultadoContainer, { backgroundColor: categoria.cor }]}>
                        <Text style={styles.resultadoTexto}>
                            Seu IMC é {Math.round(imc * 10) / 10}, você está com {categoria.mensagem}.
                        </Text>
                    </View>
                )}

            </View>

            <StatusBar style="auto" />
        </View>
    );
}
