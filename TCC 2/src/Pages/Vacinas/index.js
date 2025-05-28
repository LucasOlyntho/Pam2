import { CheckBox, FlatList, Modal, ScrollView, Text, View, StyleSheet, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const vacinas = {
  Jovem: [
    { idade: 1, vacina: "BCG", dose: "única", doencas: ["Tuberculose"] },
    { idade: 2, vacina: "Hepatite B", dose: "3 doses", doencas: ["Hepatite B"] },
    { idade: 3, vacina: "DTP (Difteria, Tétano e Coqueluche)", dose: "3 doses", doencas: ["Difteria", "Tétano", "Coqueluche"] },
    { idade: 4, vacina: "Meningocócica C", dose: "única", doencas: ["Meningite"] },
    { idade: 5, vacina: "Rotavírus", dose: "3 doses", doencas: ["Gastroenterite viral"] },
  ],
  Adulto: [
    { idade: 20, vacina: "Hepatite B", dose: "2 doses", doencas: ["Hepatite B"] },
    { idade: 30, vacina: "Influenza (Gripe)", dose: "Anual", doencas: ["Influenza"] },
    { idade: 40, vacina: "Tétano", dose: "3 doses", doencas: ["Tétano"] },
    { idade: 50, vacina: "DTP (Difteria, Tétano e Coqueluche)", dose: "Reforço a cada 10 anos", doencas: ["Difteria", "Tétano", "Coqueluche"] },
    { idade: 60, vacina: "Pneumocócica 23-valente", dose: "Única", doencas: ["Pneumonia"] },
  ],
  Gestante: [
    { idade: 20, vacina: "dTpa (Difteria, Tétano e Coqueluche)", dose: "Única", doencas: ["Difteria", "Tétano", "Coqueluche"] },
    { idade: 30, vacina: "Influenza (Gripe)", dose: "Anual", doencas: ["Influenza"] },
    { idade: 40, vacina: "Hepatite B", dose: "3 doses", doencas: ["Hepatite B"] },
  ],
};

export default function Index() {
  const [mdVisivel, setMdVisivel] = useState(true);
  const [faixaEtaria, setFaixaEtaria] = useState("");
  const [vacinasMarcadas, setVacinasMarcadas] = useState(Array(5).fill(false)); 
  const [calVac, setCalVac] = useState([]);

  useEffect(() => {
    if (faixaEtaria) {
      const fetchData = async () => {
        const chave = `${faixaEtaria}Vac`;
        const storedData = await AsyncStorage.getItem(chave);
        const vacinasMarcadas = storedData
          ? storedData.split(',').map(v => v === 'true')
          : Array(calVac.length).fill(false); 
        setVacinasMarcadas(vacinasMarcadas);
      };
      fetchData();
    }
  }, [faixaEtaria, calVac]);

  const irCalendario = (calendario) => {
    setFaixaEtaria(calendario);
    setCalVac(vacinas[calendario]);
    setMdVisivel(false);
  };

  const marcarVacina = (index) => {
    const updatedVacinasMarcadas = [...vacinasMarcadas];
    updatedVacinasMarcadas[index] = !updatedVacinasMarcadas[index];
    setVacinasMarcadas(updatedVacinasMarcadas);

    const chave = `${faixaEtaria}Vac`;
    AsyncStorage.setItem(chave, updatedVacinasMarcadas.join(','))
      .then(() => console.log('Dados armazenados com sucesso!'))
      .catch(error => console.error('Erro ao cadastrar vacinas', error));
  };

  const renderDoencas = (doencas) => {
    if (doencas.length === 1) {
      return doencas[0];  
    }
    return doencas.slice(0, -1).join(', ') + ' e ' + doencas[doencas.length - 1];
  };

  const voltar = () => {
    setMdVisivel(true);
  };

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
      <ScrollView>
        <FlatList
          data={calVac}
          renderItem={({ item, index }) => (
            <View style={styles.linha}>
              <View style={[styles.celula, styles.celTomou]}>
                <CheckBox value={vacinasMarcadas[index]} onValueChange={() => marcarVacina(index)} />
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
                <Text>{renderDoencas(item.doencas)}</Text>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
      <View style={styles.depoisLista}>
        <Pressable onPress={() => voltar()}>
          <View style={styles.botaoVoltar}>
            <Text>Voltar</Text>
          </View>
        </Pressable>
      </View>

      <Modal visible={mdVisivel} transparent={true}>
        <View style={styles.modalView}>
          <View style={styles.espacoBotoes}>
            <Pressable onPress={() => irCalendario("Jovem")}>
              <View style={styles.botaoModal}>
                <Text>Jovem</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => irCalendario("Adulto")}>
              <View style={styles.botaoModal}>
                <Text>Adulto</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => irCalendario("Gestante")}>
              <View style={styles.botaoModal}>
                <Text>Gestante</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
