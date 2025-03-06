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
      },
      nome:{
        textAlign: "center",
        textTransform: "capitalize",
        color: "#1C9AFA",
      },
      desc:{
        textAlign: "center",
        textTransform: "capitalize",
        color: "#1C9AFA",
        marginTop: 10,
      },
      icon: {
        flex:1
      },
      Image :{
        maxHeight: "100%",
        maxWidth: "100%"
      },
      content: {
        flex: 3
      },
      textBox: {
        width: 100,
        height: 25,
      },
      nav: {
        width: "100%",
        height: 50,
        backgroundColor: 'powderblue',
        flex: 1,
        justifyContent: 'center',
      }
});

