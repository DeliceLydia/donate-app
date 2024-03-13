import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'center',
    height: "100%",
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20
  },
  input: {
    height: 50,
    borderRadius: 20,
    marginTop: 30,
    width: "65%",
    color: "white",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: '#ebecee',
    marginBottom: 12,
  },
  get: {
    width: '65%',
    marginTop: 30
  },
  icon: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 30,
    gap: 80
  },
google: {
    width: 30,
    height: 30
  },
  bg: {
    backgroundColor: '#fcfcfc',
    // width: 60,
    // height: 60,
    // paddingLeft: 15,
    // paddingTop: 2,
    // borderRadius: 60
  },
  link: {
    flexDirection: 'row',
    gap: 10
  }
})

export default styles;
