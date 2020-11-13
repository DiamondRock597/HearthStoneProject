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

    marginLeft: 40,
    flex: 1,
  },
  textBlockWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    paddingLeft: 4,
    fontSize: 18,
    fontWeight: '700',
  },
  icon: {
    width: 18,
    height: 18,
  },
  answer: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  block: {
    paddingBottom: 10,
  },
  discription: {
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
});
