import * as React from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { darkgrey, grey, pastelGreen, primaryColor, secondaryColor, white } from '../../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from 'react-native-elements/dist/helpers';
import { StatusBar } from 'react-native';

const styles = require('../../stylesheet/styles');

const data = [
    {'title':"Sell your carbon credits", 'image':require('../../assets/images/money.png',), 'name':"Sell"},
    {'title':"Exchange your carbon credits", 'image':require('../../assets/images/agreement.png'), 'name':'Deals'},
    {'title':"Invest in green projects", 'image':require('../../assets/images/investment.png'),'name':'Invest'},
    {'title':"Find your past transactions", 'image':require('../../assets/images/history.png'), 'name':'History'},
]

const MarketAnalysis = ({ navigation }) => {

    const renderItemData = ({item}) => {
        return(
            <TouchableOpacity onPress={() => { navigation.navigate('TopTabs') }}
             style={{...styles.carousel,width:Dimensions.get('window').width/2.3,height:160, backgroundColor:pastelGreen}}>
                <Image source={item.image} style={{height:60, width:60}}/>
                <Text style={{...styles.h4, marginTop: 10}}>{item.name}</Text>
                <Text style={[styles.h6,{color: darkgrey, }]}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={[styles.safeAreaView, { backgroundColor: primaryColor, marginBottom: Platform.OS == "ios" ? -35 : 0 }]}>
            <StatusBar barStyle="light-content" backgroundColor={primaryColor} />
            <View style={styles.container}>
                <View style={{ ...styles.header, height: 60, }}>
                    <Text style={[styles.h4, { color: "#fff", letterSpacing: 0.5, marginTop: 10, marginLeft: 10 }]}>My Carbon Rewards</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* Card */}
                    <View style={{
                        ...styles.carousel, alignSelf: "center", borderRadius: 20, height: 160, marginTop: 20,
                        backgroundColor: secondaryColor, width: Dimensions.get('window').width / 1.1
                    }}>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Image source={require('../../assets/images/leaves.png')} style={{ height: 60, width: 60 }} />
                            <Text style={{ ...styles.h2, marginTop: 20, marginLeft: 10 }} >500 Credits</Text>
                        </View>

                        <View style={{ ...styles.pillButton, marginTop: 20 }}>
                            <Text style={{ ...styles.h4, color: white }}>Earn More Credit</Text>
                        </View>
                    </View>

                    {/* express Checkout section */}
                    <Text style={[styles.h4, { marginLeft: 20, marginTop: 10 }]}>Express Checkout</Text>
                    <View style={{ ...styles.box, width: Dimensions.get('window').width / 1.1, alignItems: "flex-start", flexDirection: "column" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={require('../../assets/images/leaves.png')} style={{ height: 30, width: 30 }} />
                            <Text style={{ ...styles.smallHeading, color: darkgrey, marginTop: 7, marginLeft: 10 }}>Carbon Credits</Text>
                        </View>

                        <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ width: "50%" }}>
                                <Text style={{ ...styles.h4, color: darkgrey, marginTop: 7, marginLeft: 10 }}>₹ 500 / tCO2e</Text>
                                <Text style={{ ...styles.h6, color: darkgrey, marginLeft: 10 }}>Current Price</Text>
                            </View>

                            <View style={{ width: "50%", alignItems: "flex-end", flexDirection: "column" }}>
                                <Text style={{ ...styles.h4, color: darkgrey, marginTop: 7, marginLeft: 10 }}>↑ + 4.78%</Text>
                                <TouchableOpacity style={{ ...styles.smallButton, marginTop: 10, alignSelf: "flex-end" }} onPress={() => { navigation.navigate('TopTabs') }}>
                                    <Text style={styles.h5}>Sell</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* My Assets */}
                    <Text style={[styles.h4, { marginLeft: 20, marginTop: 10 }]}>My Assets</Text>
                    <View style={{ ...styles.box, width: Dimensions.get('window').width / 1.1, alignItems: "flex-start", justifyContent:"space-between" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={require('../../assets/images/rupee.png')} style={{ height: 30, width: 30, alignSelf: "center" }} />
                            <View>
                                <Text style={{ ...styles.smallHeading, color: darkgrey, marginTop: 7, marginLeft: 10 }}>Balance</Text>
                                <Text style={{ ...styles.h5, color: darkgrey, marginLeft: 10 }}>INR</Text>
                            </View>
                        </View>

                        <View style={{alignSelf:"center"}}>
                            <Text style={{...styles.h4, color: darkgrey,}}>₹ 500</Text>
                        </View>
                    </View>

                    {/* My Services */}
                    <FlatList 
                    data={data}
                    renderItem={renderItemData}
                    style={{marginTop:10}}
                    contentContainerStyle={{alignSelf:"center"}}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    />
                </ScrollView>
            </View>

        </SafeAreaView>
    );
};

export default MarketAnalysis;