import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import BuyCredit from "../screens/DashboardScreens/buycreditscreen";
import SellCredit from "../screens/DashboardScreens/sellcreditscreen";

const Tabs = createMaterialTopTabNavigator();

const TopTabNavigator =()=>{
    return(
        <Tabs.Navigator
        initialRouteName="Buy"
        tabBarPosition="top"
        lazy="true"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#6DB049",
          tabBarInactiveTintColor: "#c0c0c0",
          tabBarIndicatorStyle: { backgroundColor: "#6DB049" },
          tabBarLabelStyle: { fontSize: RFValue(12,580), fontFamily: "Poppins-SemiBold" },
        })}
      >
        <Tabs.Screen name="Buy" component={BuyCredit} props={this.props} />
        <Tabs.Screen name="Sell" component={SellCredit} props={this.props} />
      </Tabs.Navigator>
    )
}

export default TopTabNavigator;