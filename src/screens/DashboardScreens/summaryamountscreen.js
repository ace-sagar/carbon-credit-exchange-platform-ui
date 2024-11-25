import * as React from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StatusBar, FlatList, Platform } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { darkgrey, grey, primaryColor, white } from '../../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from 'react-native-elements/dist/helpers';

const styles = require('../../stylesheet/styles');

const SummaryAmount = ({ navigation }) => {

    const [quantity, setQuantity] = React.useState('0');
    const [amount, setAmount] = React.useState('0');

    return (
        <SafeAreaView style={[styles.safeAreaView, { backgroundColor: primaryColor, marginBottom: Platform.OS == "ios" ? -35 : 0 }]}>
            <StatusBar barStyle="light-content" backgroundColor={primaryColor} />
            <View style={[styles.container, {}]}>
                <View style={{ ...styles.header, height: 60, }}>
                    <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 10 }}>
                        <Icon name="arrow-back-outline" type="ionicon" color="white" size={25} onPress={() => navigation.goBack()} />
                        <Text style={[styles.h4, { color: "#fff", letterSpacing: 0.5, marginLeft: 10 }]}>Summary</Text>
                    </View>
                </View>

                <View style={[styles.box, {
                    width: Dimensions.get('window').width / 1.1,
                    height: 200, flexDirection: "column", borderRadius: 20,
                }]}>
                    <View style={{ alignItems: "center" }}>
                        <Text style={[styles.h4, { color: grey }]}>Your earnings will be</Text>
                        <Text style={[styles.h1, { color: darkgrey, marginTop: 20 }]}>₹ 50,000</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    <View
                        style={{ ...styles.box, flexDirection: "column", borderRadius: 15, width: Dimensions.get('window').width / 2.3, height: 120, }}>
                        <Text style={{ ...styles.h5, marginTop: 10 }}>Current Price</Text>
                        <Text style={[styles.h4, { color: darkgrey, }]}>₹ 500 /tCO2e</Text>
                    </View>

                    <View
                        style={{ ...styles.box, flexDirection: "column", borderRadius: 15, width: Dimensions.get('window').width / 2.3, height: 120, }}>
                        <Text style={{ ...styles.h5, marginTop: 10 }}>Carbon Credit Sold</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={require('../../assets/images/leaves.png')} style={{ width: 30, height: 30 }} />
                            <Text style={[styles.h4, { color: darkgrey, marginTop: 5, marginLeft: 5 }]}>200</Text>
                        </View>
                    </View>
                </View>

                <View style={{
                    position: "absolute", bottom: 20,
                    width: Dimensions.get('window').width / 1.1, alignSelf: "center"
                }}>
                    <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={() => navigation.navigate("TabNavigator")}>
                        <Text style={{ ...styles.h4, color: "white" }}>Sell</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
};

export default SummaryAmount;