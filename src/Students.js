import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { DataTable , Text} from "react-native-paper";
import { User } from "../src/User";
import { View } from "react-native";
import { ScrollView } from "react-native";

const Studentdata = () => {
    const studentUsers = User.filter((user) => user.usertype === "STUDENT");
  return (
    <DataTable style={styles.container}>
      <Text variant="titleMedium">FlatList</Text>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>ID</DataTable.Title>
        <DataTable.Title>NAME</DataTable.Title>
        <DataTable.Title>COURSE</DataTable.Title>
      </DataTable.Header>

      <FlatList
      data={studentUsers}
      renderItem={({ item }) => (
        <DataTable.Row key={item.id}>
          <DataTable.Cell>{item.id}</DataTable.Cell>
          <DataTable.Cell>{`${item.name.firstname} ${item.name.lastname}`}</DataTable.Cell>
          <DataTable.Cell>{item.course}</DataTable.Cell>
        </DataTable.Row>
      )}
      keyExtractor={(item) => item.id.toString()}
    />

    </DataTable>
  );
};

export default Studentdata;

const styles = StyleSheet.create({
  container: {
    padding: 15,  
  },
  tableHeader: {
    backgroundColor: "#FFACAC",
    
  },
});
