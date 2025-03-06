import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { FlatList, Pressable, Image } from 'react-native-web';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

export default function Home() {

    const navigation = useNavigation();

    const tabs = [
      {
        img:require('./../../../assets/Imc.png'),
        nome: "IMC",
        desc: "descrição",
        page: "Imc"
      },
      {
        img:require('./../../../assets/Beber-Agua.png'),
        nome: "Beber água",
        desc: "descrição",
        page: "BeberAgua"
      },
      {
        img:require('./../../../assets/Tomar-Remedio.png'),
        nome: "Tomar Remédio",
        desc: "descrição",
        page: "TomarRemedio"
      },
      {
        img:require('./../../../assets/Vacinas.png'),
        nome: "Vacinas",
        desc: "descrição",
        page: "Vacinas"
      },
      {
        img:require('./../../../assets/Meditacao.png'),
        nome: "Meditação",
        desc: "descrição",
        page: "Meditacao"
      },
      {
        img:require('./../../../assets/Controle-de-Diabetes.png'),
        nome: "Controle de Diabetes",
        desc: "descrição",
        page: "ControleDiabetes"
      },
      {
        img:require('./../../../assets/Pressao.png'),
        nome: "Pressão",
        desc: "descrição",
        page: "Pressao"
      },
      {
        img:require('./../../../assets/Frutas.png'),
        nome: "Frutas e Suas Informações",
        desc: "descrição",
        page: "FrutasInformacoes"
      },
      {
        img:require('./../../../assets/Frases-Motivacionais.png'),
        nome: "Frases Motivacionais",
        desc: "descrição",
        page: "FrasesMotivacionais"
      }
    ]

    return (
        <View style={styles.container}>


      <View style={styles.nav}>

    </View>

    <View style={{flex:10, backgroundColor: ""}} >

      <FlatList
        data={tabs}
        showsVerticalScrollIndicator={false}
        renderItem={({item, i}) =>
          <Pressable onPress={() => navigation.navigate(item.page)}>
            <View style={ styles.tab}>
              <View style={styles.icon}>
                <Image style={styles.Image} source={item.img} /> 
              </View>
              <View style={styles.content}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
              </View>
            </View>
        </Pressable>
        }/>

    </View>

    </View>
    );
}
