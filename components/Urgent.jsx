import {
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import DonationTypes from "./DonationTypes";

const UrgentFundraising = () => {
  return (
    <View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <TextInput
          theme={{
            colors: {
              primary: "#15b257",
            },
          }}
          style={styles.input}
          width="100%"
          mode="flat"
          backgroundColor="#f4f7fa"
          placeholder="Search"
          placeholderTextColor="#a6aaaf"
          color="#595b5f"
          paddingLeft={10}
          underlineColor="#f4f6f9"
          textColor="#868889"
          right={
            <TextInput.Icon
              icon="magnify"
              color="#b6b9be"
              backgroundColor="#f4f6f9"
            />
          }
        />
      </View>
      <DonationTypes />
      <ScrollView>
        <View style={styles.card}>
          <Image
            source={{
              uri: `https://media.istockphoto.com/id/538570416/photo/poor-indian-family-on-the-street-in-allahabad-india.jpg?s=612x612&w=0&k=20&c=QNKeBwf1_YIE_d9MYwoySEZ9VZq-wa1MTsy0QEizwFY=`,
            }}
            style={styles.cardImage}
          />
          <View style={{ marginTop: 20 }}>
            <Text
              style={{ color: "#000", fontWeight: "bold", marginBottom: 5 }}
            >
              Help overcome malnutrition
            </Text>
            <Text>
              <Text style={{ color: "#6bd19b" }}>$8755 </Text>
              <Text>Funds raised from $10540</Text>
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: `https://www.shutterstock.com/image-photo/happy-african-male-doctor-examining-600nw-133030739.jpg`,
            }}
            style={styles.cardImage}
          />
          <View style={{ marginTop: 20 }}>
            <Text
              style={{ color: "#000", fontWeight: "bold", marginBottom: 5 }}
            >
              Help Improve Child Health
            </Text>
            <Text>
              <Text style={{ color: "#6bd19b" }}>$2277 </Text>
              <Text>Funds raised from $6310</Text>
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4m4eLKFNjt3MSvij7ZUTdrAJf3dJ5CXeSmQ&usqp=CAU`,
            }}
            style={styles.cardImage}
          />
          <View style={{ marginTop: 20 }}>
            <Text
              style={{ color: "#000", fontWeight: "bold", marginBottom: 5 }}
            >
              Help Improve Healthy Food
            </Text>
            <Text>
              <Text style={{ color: "#6bd19b" }}>$2277 </Text>
              <Text>Funds raised from $6310</Text>
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: `https://www.shutterstock.com/image-photo/happy-african-male-doctor-examining-600nw-133030739.jpg`,
            }}
            style={styles.cardImage}
          />
          <View style={{ marginTop: 20 }}>
            <Text
              style={{ color: "#000", fontWeight: "bold", marginBottom: 5 }}
            >
              Help Overcome Malnutrition
            </Text>
            <Text>
              <Text style={{ color: "#6bd19b" }}>$2277 </Text>
              <Text>Funds raised from $6310</Text>
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: `https://www.shutterstock.com/image-photo/happy-african-male-doctor-examining-600nw-133030739.jpg`,
            }}
            style={styles.cardImage}
          />
          <View style={{ marginTop: 20 }}>
            <Text
              style={{ color: "#000", fontWeight: "bold", marginBottom: 5 }}
            >
              Help Improve Child Health
            </Text>
            <Text>
              <Text style={{ color: "#6bd19b" }}>$2277 </Text>
              <Text>Funds raised from $6310</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UrgentFundraising;

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 5,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#f7f9fc",
    gap: 10,
  },
  cardImage: {
    width: "40%",
    height: 120,
    resizeMode: "cover",
  },
});
