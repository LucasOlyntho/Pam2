import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Button, Pressable, TextInput, Modal } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import styles from './styles';

export default function Conta() {

  const apiUrl = 'http://localhost:8000/api/usuario'; // Use o IP local

  const [usuarios, setUsuarios] = useState([]); // Lista de usuários
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro

  const [dadosForm, setdadosForm] = useState({
    nome: '',
    senha: '',
    email: '',
    dataNasc: '',
    genero: '',
    foto: 'lol',
    altura: 0,
    peso: 0,
  });

  const [mdVisivel, setMdVisivel] = useState(false);

  // Carregar os usuários ao iniciar o componente
  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        console.log('Resposta da API:', response.data); // Verificando a estrutura dos dados da API
        setUsuarios(response.data); // Armazenando os dados na variável usuarios
      })
      .catch(err => {
        setError('Erro ao carregar dados: ' + err.message);
      })
      .finally(() => {
        setLoading(false); // Finaliza o carregamento
      });
  }, []);

  // Função de cadastro de usuário
  const CadastrarUsuario = async () => {

    if (!dadosForm.genero) {
      alert('Por favor, insira um gênero válido!');
      return;
    }

    try {
      const response = await axios.post(apiUrl, dadosForm);
      alert('Usuário cadastrado com sucesso!');
      setUsuarios(prev => [...prev, response.data]);
      setdadosForm({
        nome: '',
        senha: '',
        email: '',
        dataNasc: '',
        genero: '',
        foto: 'lol',
        altura: 0,
        peso: 0,
      });
      navigation.navigate("Home")
    } catch (err) {
      console.error(err);
      alert('Erro ao cadastrar usuário: ' + err.message);
    }
  };

  const abrirModal = () => {
    setMdVisivel(true)
  }

  const fecharModal = () => {
    setdadosForm({
      nome: '',
      senha: '',
      email: '',
      dataNasc: '',
      genero: '',
      foto: 'lol',
      altura: 0,
      peso: 0,
    });

    setMdVisivel(false)
  }

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />} {/* Indicador de carregamento */}
      {error && <Text style={styles.error}>{error}</Text>} {/* Exibindo erro */}
      {!loading && !error && (
        <FlatList
          data={usuarios} // Passando os dados dos usuários
          keyExtractor={(item) => (item.id ? item.id.toString() : 'default-key')}
          renderItem={({ item }) => {
            console.log('Renderizando item:', item); // Verificando o item que está sendo renderizado
            return (
              <View style={styles.usuarioContainer}>
                <Text style={styles.title}>Nome: {item.nomeUsuario || 'N/A'}</Text>
                <Text>Email: {item.emailUsuario || 'N/A'}</Text>
                <Text>Data de Nascimento: {item.dataNascUsuario || 'N/A'}</Text>
                <Text>Gênero: {item.generoUsuario || 'N/A'}</Text>
                <Text>Altura: {item.alturaUsuario || 'N/A'} m</Text>
                <Text>Peso: {item.pesoUsuario || 'N/A'} kg</Text>
              </View>
            );
          }}
        />
      )}
      <Pressable onPress={abrirModal} style={({ pressed }) => [
        styles.button,
        { opacity: pressed ? 0.7 : 1 }
      ]}>
        <Text>Novo Usuario</Text>
      </Pressable>
      <Modal visible={mdVisivel} transparent={true}>
        <View style={styles.modalView}>
          <View style={styles.form}>
            <Text style={styles.title}>Cadastro de Usuário</Text>

            <TextInput
              placeholder="Nome"
              value={dadosForm.nome}
              onChangeText={(text) => setdadosForm({ ...dadosForm, nome: text })}
              style={styles.input}
            />

            <TextInput
              placeholder="Senha"
              secureTextEntry
              value={dadosForm.senha}
              onChangeText={(text) => setdadosForm({ ...dadosForm, senha: text })}
              style={styles.input}
            />

            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              value={dadosForm.email}
              onChangeText={(text) => setdadosForm({ ...dadosForm, email: text })}
              style={styles.input}
            />

            <TextInput
              placeholder="Data de Nascimento (YYYY-MM-DD)"
              value={dadosForm.dataNasc}
              onChangeText={(text) => setdadosForm({ ...dadosForm, dataNasc: text })}
              style={styles.input}
            />

            <TextInput
              placeholder="Gênero"
              value={dadosForm.genero}
              onChangeText={(text) => setdadosForm({ ...dadosForm, genero: text })}
              style={styles.input}
            />

            <TextInput
              placeholder="Altura (m)"
              keyboardType="decimal-pad"
              value={dadosForm.altura}
              onChangeText={(text) => setdadosForm({ ...dadosForm, altura: text ? parseFloat(text) : '' })}
              style={styles.input}
            />

            <TextInput
              placeholder="Peso (kg)"
              keyboardType="numeric"
              value={dadosForm.peso}
              onChangeText={(text) => setdadosForm({ ...dadosForm, peso: text ? parseFloat(text) : '' })}
              style={styles.input}
            />

            <View style={{ flexDirection: 'row' }}>
              <Pressable onPress={CadastrarUsuario} style={({ pressed }) => [
                styles.button,
                { opacity: pressed ? 0.7 : 1 }
              ]}>
                <Text>Cadastrar</Text>
              </Pressable>
              <Pressable onPress={fecharModal} style={({ pressed }) => [
                styles.button,
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