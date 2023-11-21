import React from "react";
import { StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
import { User } from "../src/User";
import { View } from "react-native";
import { ScrollView } from "react-native";
import { Text } from 'react-native-paper';
const Userdata = () => {
  return (
    <DataTable style={styles.container}>
     <Text variant="titleMedium">ScrollView</Text>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>ID</DataTable.Title>
        <DataTable.Title>FIRSTNAME</DataTable.Title>
        <DataTable.Title>LASTNAME</DataTable.Title>
        <DataTable.Title>COURSE</DataTable.Title>
        <DataTable.Title>YEAR & SECTION</DataTable.Title>
      </DataTable.Header>
      <ScrollView>
        {User.map((Users) => (
          <DataTable.Row key={Users.id}>
            <DataTable.Cell>{Users.id}</DataTable.Cell>
            <DataTable.Cell>{Users.name.firstname}</DataTable.Cell>
            <DataTable.Cell>{Users.name.lastname}</DataTable.Cell>
            <DataTable.Cell>{Users.course}</DataTable.Cell>
            <DataTable.Cell>{Users.yearsection}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </ScrollView>
    </DataTable>
  );
};

export default Userdata;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: "#FFBFA9",
  },
});
