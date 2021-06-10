import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fafae8',
  },
  container: {},
  imageBlock: {
    borderBottomWidth: 0.6,
    borderColor: 'black',
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBlock: {
    alignItems: 'flex-start',
    justifyContent: 'center',

    marginLeft: 60,
    flex: 1,
  },

  description: {
    paddingVertical: 20,
    paddingHorizontal: 60,
    textAlign: 'center',
    alignItems: 'center',
  },
  headerDiscr: {
    marginTop: 10,
    fontSize: 40,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    marginLeft: 10,
  },
  descriptionInput: {
    fontSize: 18,
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 0.8,
    marginVertical: 17,
    marginHorizontal: 20,
    padding: 15,
    paddingHorizontal: 18,
    color: 'gray',
    backgroundColor: 'white',
  },
  inputBlock: {
    paddingBottom: 5,
    justifyContent: 'center',
  },
});
