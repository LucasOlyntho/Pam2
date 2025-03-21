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
    }
})