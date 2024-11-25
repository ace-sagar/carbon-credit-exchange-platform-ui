import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import RealTimeTrading from "../screens/DashboardScreens/realtimetradingscreen";
import Portfolio from "../screens/DashboardScreens/portfolioscreen";
import Transactions from "../screens/DashboardScreens/transactionscreen";
import MarketAnalysis from "../screens/DashboardScreens/marketanalysisscreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: "#6DB049",
                tabBarLabelPosition: "below-icon",
                tabBarInactiveTintColor: '#c0c0c0',
                tabBarStyle: {
                    backgroundColor: 'white',
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontFamily: "Poppins-SemiBold",
                    fontSize: 12,
                },
            })}

        >
            <Tab.Screen name="Home" component={RealTimeTrading}
                options={{ tabBarIcon: ({ focused }) => (<Icon name="home-outline" color={focused ? "#6DB049" : '#c0c0c0'} type="ionicon" size={25} />) }} />
            <Tab.Screen name="Portfolio" component={Portfolio}
                options={{ tabBarIcon: ({ focused }) => (<Icon name="grid-outline" color={focused ? "#6DB049" : '#c0c0c0'} type="ionicon" size={25} />) }} />
            {/* <Tab.Screen name="Transactions" component={Transactions}
                options={{ tabBarIcon: ({ focused }) => (<Icon name="receipt-outline" color={focused ? "#6DB049" : '#c0c0c0'} type="ionicon" size={25} />) }} /> */}
            <Tab.Screen name="MarketAnalysis" component={MarketAnalysis}
                options={{ tabBarIcon: ({ focused }) => (<Icon name="analytics-outline" color={focused ? "#6DB049" : '#c0c0c0'} type="ionicon" size={25} />) }} />
           
        </Tab.Navigator>
    );
}

export default TabNavigator;