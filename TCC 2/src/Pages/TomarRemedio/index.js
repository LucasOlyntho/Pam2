import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Button, Pressable, TextInput, Modal } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import styles from './styles';

export default function TomarRemedio() {

  const apiUrl = 'http://localhost:8000/api/remedio'; // Use o IP local

  const [remedios, setRemedios] = useState([]); // Lista de remedios
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro

  const [dadosForm, setdadosForm] = useState({
    nome: '',
    dose: 0,
    tratamento: '',
    horario: '',
  });

  const [mdVisivel, setMdVisivel] = useState(false);

  // Carregar os remedios ao iniciar o componente
  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        console.log('Resposta da API:', response.data); // Verificando a estrutura dos dados da API
        setRemedios(response.data); // Armazenando os dados na variável remedios
      })
      .catch(err => {
        setError('Erro ao carregar dados: ' + err.message);
      })
      .finally(() => {
        setLoading(false); // Finaliza o carregamento
      });
  }, []);

  // Função de cadastro de usuário
  const CadastrarRemedio = async () => {

    try {
      const response = await axios.post(apiUrl, dadosForm);
      alert('Remédio cadastrado com sucesso!');
      setRemedios(prev => [...prev, response.data]);
      setdadosForm({
        nome: '',
        dose: 0,
        tratamento: '',
        horario: '',
      });
      navigation.navigate("Home")
    } catch (err) {
      console.error(err);
      alert('Erro ao cadastrar remédio: ' + err.message);
    }
  };

  const abrirModal = () => {
    setMdVisivel(true)
  }

  const fecharModal = () => {
    setdadosForm({
      nome: '',
      dose: 0,
      tratamento: '',
      horario: '',
    });

    setMdVisivel(false)
  }

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />} {/* Indicador de carregamento */}
      {error && <Text style={styles.error}>{error}</Text>} {/* Exibindo erro */}
      {!loading && !error && (
        <FlatList
          data={remedios} // Passando os dados dos remedios
          keyExtractor={(item) => (item.id ? item.id.toString() : 'default-key')}
          renderItem={({ item }) => {
            console.log('Renderizando item:', item); // Verificando o item que está sendo renderizado
            return (
              <View style={styles.usuarioContainer}>
                <Text style={styles.title}>Remédio: {item.nomeRemedio || 'N/A'}</Text>
                <Text>Dose: {item.doseRemedio || 'N/A'}</Text>
                <Text>Tratamento: {item.tratamentoRemedio || 'N/A'}</Text>
                <Text>Horário: {item.horarioRemedio || 'N/A'}</Text>
              </View>
            );
          }}
        />
      )}
      <Pressable onPress={abrirModal} style={({ pressed }) => [
        styles.button,
        { opacity: pressed ? 0.7 : 1 }
      ]}>
        <Text>Adicionar Remédio</Text>
      </Pressable>
      <Modal visible={mdVisivel} transparent={true}>
        <View style={styles.modalView}>
          <View style={styles.form}>
            <Text style={styles.title}>Cadastro de Usuário</Text>

            <TextInput
              placeholder="Remédio"
              value={dadosForm.nome}
              onChangeText={(text) => setdadosForm({ ...dadosForm, nome: text })}
              style={styles.input}
            />

            <TextInput
              placeholder="Dose"
              keyboardType="decimal-pad"
              value={dadosForm.dose}
              onChangeText={(text) => setdadosForm({ ...dadosForm, dose: text ? parseFloat(text) : '' })}
              style={styles.input}
            />  

            <TextInput
              placeholder="Tratamento"
              value={dadosForm.tratamento}
              onChangeText={(text) => setdadosForm({ ...dadosForm, tratamento: text })}
              style={styles.input}
            />

            <TextInput
              placeholder="Horário (HH:MM:SS)"
              value={dadosForm.horario}
              onChangeText={(text) => setdadosForm({ ...dadosForm, horario: text })}
              style={styles.input}
            />

            <View style={{ flexDirection: 'row' }}>
              <Pressable onPress={CadastrarRemedio} style={({ pressed }) => [
                styles.buttonCad,
                { opacity: pressed ? 0.7 : 1 }
              ]}>
                <Text>Cadastrar</Text>
              </Pressable>
              <Pressable onPress={fecharModal} style={({ pressed }) => [
                styles.buttonCad,
                { opacity: pressed ? 0.7 : 1 }
              ]}>
                <Text>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}