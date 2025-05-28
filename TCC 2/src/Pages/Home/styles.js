import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  teste: {
    backgroundColor: '#1C9AFA',
    width: 100,
    height: 100,
  },
  tab: {
    height: 100,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    flexDirection: 'row',
    backgroundColor: "#f4f4f4", 
    alignItems: 'center', 
    padding: 10,
  },
  nome: {
    textAlign: "center",
    textTransform: "capitalize",
    color: "#1C9AFA",
    fontWeight: 'bold', 
    fontSize: 16,
  },
  desc: {
    textAlign: "center",
    textTransform: "capitalize",
    color: "#555", 
    marginTop: 5,
    fontSize: 14,
  },
  icon: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  Image: {
    width: 80, 
    height: 80, 
    resizeMode: 'contain', 
  },
  content: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center", 
  },
  textBox: {
    width: 100,
    height: 25,
  },
  nav: {
    width: "100%",
    height: 50,
    backgroundColor: '#1C9AFA', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
});
