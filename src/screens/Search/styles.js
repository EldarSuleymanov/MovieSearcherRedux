import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginBottom: 100,
  },
  row: {
    flexDirection: 'row',
  },
  textInputs: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 0.9,
    backgroundColor: '#dedae3',
  },
  button: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    fontSize: 30,
    backgroundColor: '#dedae3',
  },
});
