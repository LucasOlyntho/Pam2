import { FlatList, Modal, Text, View,  StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import styles from './styles'

export default function Index() {

  const [mdVisivel, setMdVisivel] = useState([true])

  const [calVacJovem, setCalVacJovem ] = useState([
    {
      vacina: "Autismo",
      dose: "única",
      doencas: ["LIMA", "Duarte", "Kue", "K11"]
    }
  ])

  const [calVacAdulto, setCalVacAdulto ] = useState([
    {
      vacina: "Esquisofrenia",
      dose: "única",
      doencas: ["LIMA", "Tiago"]
    }
  ])

  const [calVacGest, setCalVacGest ] = useState([
    {
      vacina: "Esqueci o nome desa",
      dose: "única",
      doencas: ["LIMA", "Guilherme"]
    }
  ])
  
  const [calVac, setCalVac ] = useState([])

  const irCalendario = (calendario) => {

    setCalVac(calendario)

    setMdVisivel(false)

  }

  return (
    <View style={styles.container}>
      <FlatList
        data={calVac}
        showsVerticalScrollIndicator={false}
        renderItem={({item, i}) =>
          <View>
            <Text>{item.vacina}</Text>
            <Text>{item.dose}</Text>
            <FlatList
              data={item.doencas}
              showsVerticalScrollIndicator={false}
              renderItem={({item, i}) =>
                <View>
                  <Text>{item}</Text>
                </View>
            }/>
          </View>
        }/>

        <Modal visible={mdVisivel}>
          <View style={styles.modalView}>
            <View style={styles.espacoBotoes}>
              <Pressable onPress={() => {irCalendario(calVacJovem)}}>
                <View style={styles.botaoModal}>
                  <Text>criança e jovem</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => {irCalendario(calVacAdulto)}}>
                <View style={styles.botaoModal}>
                  <Text>adulto e idoso</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => {irCalendario(calVacGest)}}>
                <View style={styles.botaoModal}>
                  <Text>gestante</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </Modal>

    </View>
  );
}