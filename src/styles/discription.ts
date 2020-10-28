import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fafae8',
  },
  container: {},
  imageBlock: {
    borderWidth: 1,
    borderColor: 'black',
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBlock: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 8,
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
    alignItems: 'center',
  },
});
