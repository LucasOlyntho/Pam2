import { StyleSheet } from 'react-native';

const COLORS = {
  primary: "#3040b0",
  secondary: "#707888",
  accent: "#40a8ff",
  translucentWhite: 'rgba(255, 255, 255, 0.5)',
  white: "#fff",
  black: "#000",
};

const SPACING = {
  xSmall: 5,
  small: 10,
  medium: 15,
  large: 20,
};

export default StyleSheet.create({
  // Container Principal
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  modalView: {
    flex: 1,
    backgroundColor: COLORS.translucentWhite,
    justifyContent: 'center',
    padding: SPACING.medium,
  },

  // Botões do Modal
  espacoBotoes: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap', // Para garantir que os botões se ajustem bem se houver muitos
    paddingHorizontal: SPACING.small,
  },
  botaoModal: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 10,
    margin: SPACING.small,
    backgroundColor: COLORS.accent, // Uma cor de fundo mais visível para os botões
  },

  // Linhas e células da Tabela
  linha: {
    flexDirection: 'row',
    //paddingHorizontal: SPACING.small,
    //marginVertical: SPACING.small, // Espaçamento vertical entre as linhas
  },

  // Células
  celula: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xSmall,
    borderWidth: 1,
    borderColor: COLORS.black,
    wordBreak:'break-word',
  },

  // Células de cabeçalho
  celTopo: {
    backgroundColor: COLORS.primary,
    borderWidth: 0,
  },
  txtTopo: {
    color: COLORS.white,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  celTitulo: {
    backgroundColor: COLORS.secondary,
  },
  txtCelTitulo: {
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  // Estilos de células específicas
  celTomou: {
    flex: 3,
    backgroundColor: COLORS.accent,
  },
  celIdade: {
    flex: 3,
  },
  celVacina: {
    flex: 4,
  },
  celDose: {
    flex: 3,
  },
  celDoenca: {
    flex: 7,
  },

  depoisLista: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60,
  },

  botaoVoltar: {
    width: 100,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 10,
    margin: SPACING.small,
    backgroundColor: COLORS.accent, // Uma cor de fundo mais visível para os botões
  },

});
