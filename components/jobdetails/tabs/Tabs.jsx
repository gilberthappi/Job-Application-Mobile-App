import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";

const TabButton = ({ tabName, activeTab, setActiveTab }) => (
  <TouchableOpacity
    style={styles.btn(tabName, activeTab)}
    onPress={() => setActiveTab(tabName)}
  >
    <Text style={styles.btnText(tabName, activeTab)}>{tabName}</Text>
  </TouchableOpacity>
);

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            tabName={item}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
