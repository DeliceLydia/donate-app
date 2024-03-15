import { Text, ScrollView, StyleSheet, View } from "react-native";

const DonationTypes = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContent} horizontal>
        <Text style={styles.all}>All</Text>
        <Text style={styles.item}>Medical</Text>
        <Text style={styles.item}>Disaster</Text>
        <Text style={styles.item}>Education</Text>
        <Text style={styles.item}>Malnutrition</Text>
      </ScrollView>
    </View>
  );
};

export default DonationTypes;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 20
  },
  item: {
    paddingLeft: 30,
    paddingRight: 30
  },
  all: {
    backgroundColor: '#15b257',
    color: "#fff",
    paddingLeft:30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    paddingRight: 30
  },
  item: {
    marginRight: 10,
    marginLeft: 10,
    paddingLeft:20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    paddingRight:20,
    borderWidth: 2,
    color: "#15b257",
    borderColor: "#15b257"
  }

})
