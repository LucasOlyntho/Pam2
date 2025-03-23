import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    modalView: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    espacoBotoes: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    botaoModal: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        margin: 10,
    },
    linha: {
        flexDirection: 'row',
    },
    celula: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    celTopo: {
        backgroundColor: "#0000ff",
        borderWidth: 0,
    },
    txtTopo: {
        color: '#fff',
        fontSize: 20,
    },
    celTitulo: {
        backgroundColor: "#808080",
    },
    txtCelTitulo: {
        color: '#fff',
    },
    celTomou: {
        flex: 3,
        backgroundColor: "#1b98fa",
    },
    celIdade: {
        flex: 2,
    },
    celVacina: {
        flex: 4,
    },
    celDose: {
        flex: 3,
    },
    celDoenca: {
        flex: 8,
    },
})