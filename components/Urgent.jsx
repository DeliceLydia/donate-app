import React, { useEffect, useState } from "react";
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
import { readData } from "../firestore/firebase";
import Icon from "react-native-vector-icons/Ionicons";

const UrgentFundraising = () => {
  const [fundraisingData, setFundraisingData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await readData();
        setFundraisingData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 15,
          marginTop: 30,
          paddingVertical: 20,
        }}
      >
        <Icon
          name="arrow-back"
          style={{ color: "white", color: "#25c067", fontSize: 20 ,marginLeft:5}}
        />
        <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
        Urgent Fundraising
        </Text>
      </View>
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
          <View style={styles.data}>
            {fundraisingData && fundraisingData.map((item, index) => (
              <View key={index} style={styles.dataContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.tDonation}>Total Donation: {item.Tdonation}</Text>
                <Text>Donate</Text>
              </View>
            ))}
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
  dataContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    color: '#434952',
    fontWeight: "bold",
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    marginBottom: 5,
  },
  tDonation: {
    fontSize: 14,
  }
});
