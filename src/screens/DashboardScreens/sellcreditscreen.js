import * as React from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StatusBar, FlatList } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { darkgrey, grey } from '../../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from 'react-native-elements/dist/helpers';

const styles = require('../../stylesheet/styles');

const SellCredit = ({ navigation }) => {

    const [quantity, setQuantity] = React.useState('0');
    const [amount, setAmount] = React.useState('0');

    return (
        <SafeAreaView style={[styles.safeAreaView, { backgroundColor: "#6DB049", marginBottom: Platform.OS == "ios" ? -35 : 0 }]}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" />

            <View style={styles.container}>
                <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 20 }}>
                    <Image source={require('../../assets/images/abc.png')} style={{ width: 50, height: 50 }} />
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={[styles.h4, { color: "#5d5d5d" }]}>Carbon Credit</Text>
                        <Text style={[styles.h5, { color: "#5d5d5d", fontSize: RFValue(10, 580) }]}>₹ 500 | ↑ 50%</Text></View>
                </View>
                <View style={{
                    width: Dimensions.get('window').width / 1.1, alignSelf: "center", marginTop: 20,
                    flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: Dimensions.get('window').width / 1.1
                }}>
                    <Text style={[styles.smallHeading, {}]}>Quantity :</Text>
                    <TextInput
                        placeholder='0'
                        placeholderTextColor={grey}
                        keyboardType='numeric'
                        value={quantity.toString()}
                        onChangeText={(text) => setQuantity(text)}
                        style={[styles.smallInput, { paddingTop: 5, paddingBottom: 5, paddingLeft: 10 }]}
                    />
                </View>

                <View style={{
                    width: Dimensions.get('window').width / 1.1, alignSelf: "center", marginTop: 20,
                    flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: Dimensions.get('window').width / 1.1
                }}>
                    <Text style={[styles.smallHeading, {}]}>Amount :</Text>
                    <TextInput
                        placeholder='0'
                        placeholderTextColor={grey}
                        keyboardType='numeric'
                        value={amount.toString()}
                        onChangeText={(text) => setAmount(text)}
                        style={[styles.smallInput, { paddingTop: 5, paddingBottom: 5, paddingLeft: 10 }]}
                    />
                </View>

                <View style={{
                    position: "absolute", bottom: 20, borderTopWidth: 1, borderTopColor: grey,
                    width: Dimensions.get('window').width / 1.1, alignSelf: "center"
                }}>
                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
                        <Text style={[styles.h6, { color: darkgrey }]}>Balance: ₹ 0 </Text>
                        <Text style={[styles.h6, { color: darkgrey }]}>Required: ₹ {amount} </Text>
                    </View>

                    <View>
                        <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={() => navigation.navigate("TabNavigator")}>
                            <Text style={{ ...styles.h4, color: "white" }}>Sell</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* <View style={[styles.container,{alignItems:"center"}]}>

                <View style={[styles.box,{flexDirection:"column",marginTop:20,paddingVertical:20, width:Dimensions.get('window').width/1.1}]}>
                <Text style={[styles.h3,{color:"#5d5d5d"}]}>Enter Amount</Text>
                <View style={{flexDirection: "row", alignItems: "center",alignSelf:"center"}}>
                    <Text style={[styles.h2,{color:"#5d5d5d"}]}>₹</Text>
                    <TextInput style={{borderBottomColor: "#5d5d5d", borderBottomWidth: 2,
                        width: Dimensions.get('window').width / 1.5, fontSize: RFValue(20, 580), 
                        fontFamily: "Poppins-SemiBold", color: "#5d5d5d", }} />
                </View>
                </View>

                <View style={[styles.box,{marginTop:20,paddingVertical:20, width:Dimensions.get('window').width/1.1}]}>
                        <Text style={[styles.h4,{color:"#5d5d5d"}]}>Current Balance : 5 Carbon Credit</Text>
                </View>

                <TouchableOpacity
                            onPress={() => {  }}
                            style={[styles.button,{marginTop:20}]}>
                            <Text style={{ ...styles.h4, color: '#fff' }}>Review</Text>
                        </TouchableOpacity>
            </View> */}

        </SafeAreaView>
    );
};

export default SellCredit;