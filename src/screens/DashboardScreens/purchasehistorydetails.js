import * as React from 'react';
import { View, Text,useWindowDimensions, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StatusBar, Platform } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { darkgrey, grey } from '../../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from 'react-native-elements/dist/helpers';
import { TabView, SceneMap } from 'react-native-tab-view';

const styles = require('../../stylesheet/styles');

const PurchaseHistoryDetails = ({ navigation }) => {

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);

    const renderScene = ({ route }) => {
        switch (route.key) {
          case 'first':
            return <FirstRoute/>;
          case 'second':
            return <SecondRoute />;
          default:
            return null;
        }
      };
      
      const routes = [
        { key: 'first', title: 'Transactions' },
        { key: 'second', title: 'Exchange' },
      ];

    return (
        <SafeAreaView style={[styles.safeAreaView, { backgroundColor: "#6DB049", marginBottom: Platform.OS == "ios" ? -35 : 0 }]}>
            <StatusBar barStyle="light-content" backgroundColor="#6DB049" />
            <View style={styles.container}>

                <View style={[styles.header, { flexDirection: "row", alignItems: "center" }]}>
                    <Icon name="arrow-back" color="#fff" type="ionicon" size={22} onPress={() => { navigation.goBack() }} />
                    <Text style={[styles.h4, { color: "#fff", letterSpacing: 1, marginTop: 5, marginLeft: 10 }]}>Purchase History Detail</Text>
                </View>
                <ScrollView>
                    <View style={[styles.box, { width: Dimensions.get('window').width / 1.1, flexDirection: "column" }]}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={[styles.h4, { color: grey }]}>Carbon Credit</Text>
                            <Text style={[styles.h2, { color: darkgrey }]}>89,000 Credits</Text>
                            <Text style={[styles.h4, { color: grey }]}>₹ 50,000</Text>
                        </View>
                    </View>

                    <View style={[styles.box, {
                        flexDirection: "row", justifyContent: "space-between",
                        width: Dimensions.get('window').width / 1.1,
                    }]}>
                        <View onPress={() => navigation.navigate("PurchaseHistoryDetailsScreen")}>
                            <Text style={[styles.h4, { color: "#5d5d5d" }]}>Available Credit</Text>
                        </View>
                        <View>
                            <Text style={styles.h4}>89,000</Text>
                        </View>
                    </View>

                    <View style={[styles.box, {
                        flexDirection: "row", justifyContent: "space-between",
                        width: Dimensions.get('window').width / 1.1,
                    }]}>
                        <View onPress={() => navigation.navigate("PurchaseHistoryDetailsScreen")}>
                            <Text style={[styles.h4, { color: "#5d5d5d" }]}>In Order</Text>
                        </View>
                        <View>
                            <Text style={styles.h4}>10 Credit</Text>
                        </View>
                    </View>

                    <View>
                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            initialLayout={{ width: layout.width }}
                            commonOptions={{ headerShown: false,
                             tabBarActiveTintColor: '#6DB049',
                             tabBarInactiveTintColor: 'grey',
                             tabBarIndicatorStyle: { backgroundColor: '#6DB049' },
                             }}
                        />
                    </View>

                </ScrollView>
            </View>

        </SafeAreaView>
    );
};

export default PurchaseHistoryDetails;

const FirstRoute = () => (
    <View style={[styles.box, { width: Dimensions.get('window').width / 1.1, flexDirection: "column" }]}>
        <View style={{ alignItems: "center" }}></View>
            <Text style={[styles.h4, { color: grey }]}>Carbon Credit</Text>
            <Text style={[styles.h2, { color: darkgrey }]}>89,000 Credits</Text>
            <Text style={[styles.h4, { color: grey }]}>₹ 50,000</Text>
    </View>
);

const SecondRoute = () => (
    <View style={[styles.box, { width: Dimensions.get('window').width / 1.1, flexDirection: "column" }]}>
        <View style={{ alignItems: "center" }}>
            <Text style={[styles.h4, { color: grey }]}>Carbon Credit</Text>
            <Text style={[styles.h2, { color: darkgrey }]}>89,000 Credits</Text>
            <Text style={[styles.h4, { color: grey }]}>₹ 50,000</Text>
    </View>
    </View>
)