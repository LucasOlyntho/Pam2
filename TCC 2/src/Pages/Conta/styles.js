import { StyleSheet } from 'react-native';

const COLORS = {
  primary: "#3040b0",
  secondary: "#707888",
  accent: "#40a8ff",
  translucentWhite: 'rgba(255, 255, 255, 0.5)',
  white: "#fff",
  black: "#000",
  blue: "#139DF2",
  gray: '#f4f4f4',
  red: 'ff0000',
};

const SPACING = {
  xSmall: 5,
  small: 10,
  medium: 15,
  large: 20,
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: COLORS.red,
    marginBottom: SPACING.small,
    textAlign: 'center',
  },
  usuarioContainer: {
    marginTop: SPACING.large,
    padding: SPACING.small,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    borderWidth: 2,
    width: '100%',
  },
  modalView: {
    flex: 1,
    backgroundColor: COLORS.translucentWhite,
    justifyContent: 'center',
    padding: SPACING.medium,
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.gray,
    marginHorizontal: '5%',
    marginVertical: '15%',
    padding: SPACING.large,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: SPACING.small,
    textAlign: 'center',
    borderBottomWidth: 1.5,
  },
  input: {
    backgroundColor: COLORS.white,
    marginBottom: SPACING.medium,
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    width: '100%',
  },
  button: {
    backgroundColor: COLORS.accent, 
    paddingVertical: SPACING.medium,
    width: 100,
    borderRadius: SPACING.small,
    marginBottom: SPACING.large,
    marginHorizontal: SPACING.small,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

