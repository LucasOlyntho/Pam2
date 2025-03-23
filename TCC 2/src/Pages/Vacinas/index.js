import { CheckBox, FlatList, Modal, Text, View, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import styles from './styles'

export default function Index() {

  const [mdVisivel, setMdVisivel] = useState([true])

  const [faixaEtaria, setFaixaEtaria] = useState("")

  const [calVacJovem, setCalVacJovem] = useState([
    {
      idade: 17,
      vacina: "Autismo",
      dose: "única",
      doencas: ["LIMA", "Duarte", "Kue", "K11"]
    },
    {
      idade: 17,
      vacina: "Autismo",
      dose: "única",
      doencas: ["LIMA", "Duarte", "Kue", "K11"]
    },
    {
      idade: 17,
      vacina: "Autismo",
      dose: "única",
      doencas: ["LIMA", "Duarte", "Kue", "K11"]
    },
  ])

  const [calVacAdulto, setCalVacAdulto] = useState([
    {
      idade: 17,
      vacina: "Esquisofrenia",
      dose: "única",
      doencas: ["LIMA", "Tiago"]
    },
    {
      idade: 17,
      vacina: "Esquisofrenia",
      dose: "única",
      doencas: ["LIMA", "Tiago"]
    },
    {
      idade: 17,
      vacina: "Esquisofrenia",
      dose: "única",
      doencas: ["LIMA", "Tiago"]
    },
  ])

  const [calVacGest, setCalVacGest] = useState([
    {
      idade: 17,
      vacina: "Esqueci o nome desa",
      dose: "única",
      doencas: ["LIMA", "Guilherme"]
    },
    {
      idade: 17,
      vacina: "Esqueci o nome desa",
      dose: "única",
      doencas: ["LIMA", "Guilherme"]
    },
    {
      idade: 17,
      vacina: "Esqueci o nome desa",
      dose: "única",
      doencas: ["LIMA", "Guilherme"]
    },
  ])

  const [vacMarcadaJovem, setVacMarcadaJovem] = useState([false, false, false])

  const [vacMarcadaAdulto, setVacMarcadaAdulto] = useState([false, true, false])

  const [vacMarcadaGest, setVacMarcadaGest] = useState([false, false, true])

  const [vacMarcada, setVacMarcada] = useState([])

  const [calVac, setCalVac] = useState([])

  const irCalendario = (calendario) => {

    setFaixaEtaria(calendario)

    if (calendario == "Jovem") {
      setCalVac(calVacJovem)
      setVacMarcada(vacMarcadaJovem)
    } else if (calendario == "Adulto") {
      setCalVac(calVacAdulto)
      setVacMarcada(vacMarcadaAdulto)
    } else if (calendario == "Gestante") {
      setCalVac(calVacGest)
      setVacMarcada(vacMarcadaGest)
    }

    setMdVisivel(false)

  }

  const marcarVacina = (index) => {

    let novaVacMarcada = []

    vacMarcada.map((vac, i, array) => {
      if (i == index) {
        novaVacMarcada.push(!vac)
      } else {
        novaVacMarcada.push(vac)
      }
    })

    setVacMarcada(novaVacMarcada)

    /*
    if (faixaEtaria == "Jovem") {
      setVacMarcadaJovem(novaVacMarcada)
      AsyncStorage.setItem('VacJovem', vacMarcadaJovem).then(() => { }).catch(error => { console.error('Erro ao cadastrar vacinas de jovem'); });
    } else if (faixaEtaria == "Adulto") {
      setVacMarcadaAdulto(novaVacMarcada)
      AsyncStorage.setItem('VacAdulto', vacMarcadaAdulto).then(() => { }).catch(error => { console.error('Erro ao cadastrar vacinas de adulto'); });
    } else if (faixaEtaria == "Gestante") {
      setVacMarcadaGest(novaVacMarcada)
      AsyncStorage.setItem('VacGest', vacMarcadaGest).then(() => { }).catch(error => { console.error('Erro ao cadastrar vacinas de gestante'); });
    } */

  }

  return (
    <View style={styles.container}>
      <View style={[styles.celula, styles.celTopo]}>
        <Text style={styles.txtTopo}>Lista Vacinação</Text>
      </View>
      <View style={styles.linha}>
        <View style={[styles.celula, styles.celTomou]}>
          <Text style={styles.txtCelTitulo}>Tomou?</Text>
        </View>
        <View style={[styles.celula, styles.celIdade, styles.celTitulo]}>
          <Text style={styles.txtCelTitulo}>Idade</Text>
        </View>
        <View style={[styles.celula, styles.celVacina, styles.celTitulo]}>
          <Text style={styles.txtCelTitulo}>Vacina</Text>
        </View>
        <View style={[styles.celula, styles.celDose, styles.celTitulo]}>
          <Text style={styles.txtCelTitulo}>Dose</Text>
        </View>
        <View style={[styles.celula, styles.celDoenca, styles.celTitulo]}>
          <Text style={styles.txtCelTitulo}>Doenças</Text>
        </View>
      </View>
      <FlatList
        data={calVac}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.linha}>
            <View style={[styles.celula, styles.celTomou]}>
              <CheckBox value={vacMarcada[index]} onValueChange={() => { marcarVacina(index) }} />
            </View>
            <View style={[styles.celula, styles.celIdade]}>
              <Text>{item.idade}</Text>
            </View>
            <View style={[styles.celula, styles.celVacina]}>
              <Text>{item.vacina}</Text>
            </View>
            <View style={[styles.celula, styles.celDose]}>
              <Text>{item.dose}</Text>
            </View>
            <View style={[styles.celula, styles.celDoenca]}>
              <Text>{item.doencas.map((doenca, i, array) => {
                if (i >= array.length - 2) {
                  if (i == array.length - 1) {
                    return doenca
                  }
                  return doenca + " e "
                }
                return doenca + ", "
              })}</Text>
            </View>
          </View>
        )} />

      <Modal visible={mdVisivel}>
        <View style={styles.modalView}>
          <View style={styles.espacoBotoes}>
            <Pressable onPress={() => { irCalendario("Jovem") }}>
              <View style={styles.botaoModal}>
                <Text>criança e jovem</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => { irCalendario("Adulto") }}>
              <View style={styles.botaoModal}>
                <Text>adulto e idoso</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => { irCalendario("Gestante") }}>
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