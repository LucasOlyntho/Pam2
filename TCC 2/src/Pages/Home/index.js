import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { FlatList, Pressable, ScrollView } from 'react-native-web';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

export default function Home() {

    const navigation = useNavigation();

    const tabs = [
      {
        img: "img",
        nome: "IMC",
        desc: "descrição",
        page: "Imc"
      },
      {
        img: "img",
        nome: "IMC",
        desc: "descrição",
        page: "Imc"
      },
      {
        img: "img",
        nome: "IMC",
        desc: "descrição",
        page: "Imc"
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
                <Text>{item.img}</Text>
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
