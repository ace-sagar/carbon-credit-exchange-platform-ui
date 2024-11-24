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
        tabBarOptions={
          {
            tabStyle: { marginTop: 30 },
            labelPosition: "below-icon",
            activeTintColor: "#6DB049",
            inactiveTintColor: "#c0c0c0",
            indicatorStyle: { backgroundColor: "#6DB049", height: 2 },
            style: {
              backgroundColor: "white",
              marginTop: 15
              // height:55,

            },

            labelStyle: {
              fontSize: RFValue(12, 580),
              fontFamily: "Poppins-SemiBold",
            },
          }}
      >
        <Tabs.Screen name="Buy" component={BuyCredit} props={this.props} />
        <Tabs.Screen name="Sell" component={SellCredit} props={this.props} />
      </Tabs.Navigator>
    )
}

export default TopTabNavigator;