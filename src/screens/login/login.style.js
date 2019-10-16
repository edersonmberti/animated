import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '75%',
    height: 50,
    borderColor: '#999',
    borderWidth: 1,
    paddingLeft: 20,
    marginTop: 15,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    height: 50,
    backgroundColor: '#999',
    marginTop: 15,
  },
  buttonText: {
    fontWeight: '500',
    color: '#fff',
  },
});

export default styles;
