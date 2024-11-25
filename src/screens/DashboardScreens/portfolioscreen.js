import * as React from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StatusBar, Platform } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { darkgrey, grey, primaryColor } from '../../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from 'react-native-elements/dist/helpers';

const styles = require('../../stylesheet/styles');

const Portfolio = ({ navigation }) => {


    return (
        <SafeAreaView style={[styles.safeAreaView, { backgroundColor: "#6DB049", marginBottom: Platform.OS == "ios" ? -35 : 0 }]}>
            <StatusBar barStyle="light-content" backgroundColor="#6DB049" />
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={[styles.h3, { color: "#fff", letterSpacing: 1, marginTop: 10, marginLeft: 10 }]}>Portfolio</Text>
                </View>
                <ScrollView>
                    <View style={[styles.box, { width: Dimensions.get('window').width / 1.1, alignItems: "flex-start", flexDirection: "column" }]}>
                        <View>
                            <Text style={{ ...styles.smallHeading, color: grey }}>Total Portfolio Value</Text>
                            <Text style={{ ...styles.h1, color: darkgrey, marginTop: -5 }}>₹ 5000.85</Text>
                        </View>

                        <View>
                            <Text style={{ ...styles.h5, color: grey }}>Carbon Holdings</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ ...styles.h4, color: darkgrey, marginTop: -5 }}>₹ 5000.85</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.box, {
                        flexDirection: "row", justifyContent: "space-between",
                        width: Dimensions.get('window').width / 1.1,
                    }]}>
                        <View style={{ width: "10%", alignItems: "center" }}>
                            <Text style={[styles.h2, { color: darkgrey }]}>₹</Text>
                        </View>

                        <View style={{ width: "20%" }}>
                            <Text style={[styles.h4, { color: darkgrey }]}>INR</Text>
                            <Text style={[styles.h4, { color: darkgrey }]}>Rupee</Text>
                        </View>
                        <View style={{ width: "70%", alignItems: "flex-end", paddingRight: 10 }}>
                            <Text style={{ ...styles.h3, color: darkgrey }}>₹ 5000</Text>
                            <Text style={{ ...styles.h6, color: primaryColor }}>+ DEPOSIT</Text>
                        </View>

                    </View>

                    <View style={[styles.box, { flexDirection: "column", width: Dimensions.get('window').width / 1.1 }]}>
                        <Text style={[styles.h4, { color: "#5d5d5d", alignSelf: "flex-start", paddingLeft: 10 }]}>Purchase History</Text>
                        <TouchableOpacity style={[styles.box, {
                            flexDirection: "row", justifyContent: "space-between",
                            width: Dimensions.get('window').width / 1.2,
                        }]} onPress={() => navigation.navigate("PurchaseHistoryDetailsScreen")}>
                            <View>
                                <Text style={[styles.h4, { color: "#5d5d5d" }]}>Credit</Text>
                            </View>
                            <View>
                                <Text style={styles.h4}>₹ 5000</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.box, {
                            flexDirection: "row", justifyContent: "space-between",
                            width: Dimensions.get('window').width / 1.2,
                        }]}  onPress={() => navigation.navigate("PurchaseHistoryDetailsScreen")}>
                            <View>
                                <Text style={[styles.h4, { color: "#5d5d5d" }]}>Carbon Credit</Text>
                            </View>
                            <View>
                                <Text style={styles.h4}>₹ 5000</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.box, {
                            flexDirection: "row", justifyContent: "space-between",
                            width: Dimensions.get('window').width / 1.2,
                        }]}  onPress={() => navigation.navigate("PurchaseHistoryDetailsScreen")}>
                            <View>
                                <Text style={[styles.h4, { color: "#5d5d5d" }]}>Credit</Text>
                            </View>
                            <View>
                                <Text style={styles.h4}>₹ 5000</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.box, {
                            flexDirection: "row", justifyContent: "space-between",
                            width: Dimensions.get('window').width / 1.2,
                        }]} onPress={() => navigation.navigate("PurchaseHistoryDetailsScreen")}>
                            <View>
                                <Text style={[styles.h4, { color: "#5d5d5d" }]}>Carbon Credit</Text>
                            </View>
                            <View>
                                <Text style={styles.h4}>₹ 5000</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    );
};

export default Portfolio;