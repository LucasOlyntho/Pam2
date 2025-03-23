import { CheckBox, FlatList, Modal, Text, View, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
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

  const [vacMarcada, setVacMarcada] = useState([])

  const [calVac, setCalVac] = useState([])

  const irCalendario = (calendario) => {

    setFaixaEtaria(calendario)

    if (calendario == "Jovem") {

      setCalVac(calVacJovem)

      AsyncStorage.getItem('VacJovem').then(value => {
        if (value !== null && value !== "") {

          let valorListaStr = value.split(',')
          let valorlistaBool = []

          valorListaStr.map((str, i, array) => {
            if (str == 'true') {
              valorlistaBool.push(true)
            } else {
              valorlistaBool.push(false)
            }
          })

          setVacMarcada(valorlistaBool)

        } else {

          let listaMarcadas = []

          for (let i = 0; i < calVacJovem.length; i++) {
            listaMarcadas.push(false)
          }

          setVacMarcada(listaMarcadas)

        }
      })

    } else if (calendario == "Adulto") {

      setCalVac(calVacAdulto)

      AsyncStorage.getItem('VacAdulto').then(value => {
        if (value !== null && value !== "") {

          let valorListaStr = value.split(',')
          let valorlistaBool = []

          valorListaStr.map((str, i, array) => {
            if (str == 'true') {
              valorlistaBool.push(true)
            } else {
              valorlistaBool.push(false)
            }
          })

          setVacMarcada(valorlistaBool)

        } else {

          let listaMarcadas = []

          for (let i = 0; i < calVacAdulto.length; i++) {
            listaMarcadas.push(false)
          }

          setVacMarcada(listaMarcadas)

        }
      })

    } else if (calendario == "Gestante") {

      setCalVac(calVacGest)

      AsyncStorage.getItem('VacGest').then(value => {
        if (value !== null && value !== "") {

          let valorListaStr = value.split(',')
          let valorlistaBool = []

          valorListaStr.map((str, i, array) => {
            if (str == 'true') {
              valorlistaBool.push(true)
            } else {
              valorlistaBool.push(false)
            }
          })

          setVacMarcada(valorlistaBool)

        } else {

          let listaMarcadas = []

          for (let i = 0; i < calVacGest.length; i++) {
            listaMarcadas.push(false)
          }

          setVacMarcada(listaMarcadas)

        }
      })
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

    if (faixaEtaria == "Jovem") {
      AsyncStorage.setItem('VacJovem', novaVacMarcada).then(() => { console.log('Dados armazenados com sucesso!') }).catch(error => { console.error('Erro ao cadastrar vacinas de jovem'); });
    } else if (faixaEtaria == "Adulto") {
      AsyncStorage.setItem('VacAdulto', novaVacMarcada).then(() => { console.log('Dados armazenados com sucesso!') }).catch(error => { console.error('Erro ao cadastrar vacinas de adulto'); });
    } else if (faixaEtaria == "Gestante") {
      AsyncStorage.setItem('VacGest', novaVacMarcada).then(() => { console.log('Dados armazenados com sucesso!') }).catch(error => { console.error('Erro ao cadastrar vacinas de gestante'); });
    }

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