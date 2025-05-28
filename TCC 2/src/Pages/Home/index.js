import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

export default function Home() {
  const navigation = useNavigation();

  const tabs = [
    {
      img: require('./../../../assets/Imc.png'),
      nome: "IMC",
      desc: "Verifique seu Imc",
      page: "Imc"
    },
    {
      img: require('./../../../assets/Beber-Agua.png'),
      nome: "Beber água",
      desc: "descrição",
      page: "BeberAgua"
    },
    {
      img: require('./../../../assets/Tomar-Remedio.png'),
      nome: "Tomar Remédio",
      desc: "descrição",
      page: "TomarRemedio"
    },
    {
      img: require('./../../../assets/Vacinas.png'),
      nome: "Vacinas",
      desc: "Sua carteira de vacinação própria",
      page: "Vacinas"
    },
    {
      img: require('./../../../assets/Meditacao.png'),
      nome: "Meditação",
      desc: "descrição",
      page: "Meditacao"
    },
    {
      img: require('./../../../assets/Controle-de-Diabetes.png'),
      nome: "Controle de Diabetes",
      desc: "descrição",
      page: "ControleDiabetes"
    },
    {
      img: require('./../../../assets/Pressao.png'),
      nome: "Pressão",
      desc: "descrição",
      page: "Pressao"
    },
    {
      img: require('./../../../assets/Frutas.png'),
      nome: "Frutas e Suas Informações",
      desc: "descrição",
      page: "FrutasInformacoes"
    },
    {
      img: require('./../../../assets/Frases-Motivacionais.png'),
      nome: "Frases Motivacionais",
      desc: "descrição",
      page: "FrasesMotivacionais"
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={{flex: 5, justifyContent: 'center', alignItems: 'center', }}>
          <Text style={{ color: '#fff', fontSize: 18,  fontWeight: 'bold',  }}>U-Health</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
          <Pressable onPress={() => navigation.navigate("Conta")}>
            <Image style={styles.imageUsuario} source={require('./../../../assets/Usuario.png')} />
          </Pressable>
        </View>
      </View>

      <View style={{ flex: 10 }}>
        <FlatList
          data={tabs}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            <Pressable onPress={() => navigation.navigate(item.page)}>
              <View style={styles.tab}>
                <View style={styles.icon}>
                  <Image style={styles.image} source={item.img} />
                </View>
                <View style={styles.content}>
                  <Text style={styles.nome}>{item.nome}</Text>
                  <Text style={styles.desc}>{item.desc}</Text>
                </View>
              </View>
            </Pressable>
          }
        />
      </View>
    </View>
  );
}
