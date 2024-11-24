import * as React from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StatusBar, Platform } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { grey } from '../../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from 'react-native-elements/dist/helpers';

const styles = require('../../stylesheet/styles');

const Portfolio = ({ navigation }) => {


    return (
        <SafeAreaView style={[styles.safeAreaView, { backgroundColor: "#6DB049",marginBottom: Platform.OS == "ios" ? -35 : 0}]}>
            <StatusBar barStyle="light-content" backgroundColor="#6DB049" />
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={[styles.h4, { color: "#fff", letterSpacing: 1, marginTop: 5 }]}>Portfolio</Text>
                </View>
                <ScrollView>
                    <View style={[styles.box, { width: Dimensions.get('window').width / 1.1, flexDirection: "column" }]}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={[styles.h4, { color: "#5d5d5d" }]}>Total Portfolio Value</Text>
                            <Text style={[styles.h4, { color: "#5d5d5d" }]}>₹ 54,900.50</Text>
                        </View>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <Text style={[styles.h4, { color: "#5d5d5d" }]}>Carbon Holdings</Text>
                            <Text style={[styles.h4, { color: "#5d5d5d" }]}>₹ 5000 (Today)</Text>
                        </View>
                    </View>

                    <View style={[styles.box, {
                        flexDirection: "row", justifyContent: "space-between",
                        width: Dimensions.get('window').width / 1.1,
                    }]}>
                        <View>
                            <Text style={[styles.h4, { color: "#5d5d5d" }]}>INR</Text>
                        </View>
                        <View>
                           <Text style={styles.h4}>₹ 5000</Text>
                           <Text style={[styles.h6,{color:"#6DB049"}]}>+ Deposit</Text>
                        </View>
                    </View>

                    <View style={[styles.box,{flexDirection:"column",width: Dimensions.get('window').width / 1.1}]}>
                    <Text style={[styles.h4, { color: "#5d5d5d",alignSelf:"flex-start", paddingLeft: 10 }]}>Purchase History</Text>
                    <View style={[styles.box, {
                        flexDirection: "row", justifyContent: "space-between",
                        width: Dimensions.get('window').width / 1.2,}]}>
                        <TouchableOpacity onPress={()=>navigation.navigate("PurchaseHistoryDetailsScreen")}>
                            <Text style={[styles.h4, { color: "#5d5d5d" }]}>Credit</Text>
                        </TouchableOpacity>
                        <View>
                           <Text style={styles.h4}>₹ 5000</Text>
                        </View>
                    </View>
                    <View style={[styles.box, {
                        flexDirection: "row", justifyContent: "space-between",
                        width: Dimensions.get('window').width / 1.2,}]}>
                        <TouchableOpacity onPress={()=>navigation.navigate("PurchaseHistoryDetailsScreen")}>
                            <Text style={[styles.h4, { color: "#5d5d5d" }]}>Carbon Credit</Text>
                        </TouchableOpacity>
                        <View>
                           <Text style={styles.h4}>₹ 5000</Text>
                        </View>
                    </View>
                    <View style={[styles.box, {
                        flexDirection: "row", justifyContent: "space-between",
                        width: Dimensions.get('window').width / 1.2,}]}>
                        <TouchableOpacity onPress={()=>navigation.navigate("PurchaseHistoryDetailsScreen")}>
                            <Text style={[styles.h4, { color: "#5d5d5d" }]}>Credit</Text>
                        </TouchableOpacity>
                        <View>
                           <Text style={styles.h4}>₹ 5000</Text>
                        </View>
                    </View>
                    <View style={[styles.box, {
                        flexDirection: "row", justifyContent: "space-between",
                        width: Dimensions.get('window').width / 1.2,}]}>
                        <TouchableOpacity onPress={()=>navigation.navigate("PurchaseHistoryDetailsScreen")}>
                            <Text style={[styles.h4, { color: "#5d5d5d" }]}>Carbon Credit</Text>
                        </TouchableOpacity>
                        <View>
                           <Text style={styles.h4}>₹ 5000</Text>
                        </View>
                    </View>
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    );
};

export default Portfolio;