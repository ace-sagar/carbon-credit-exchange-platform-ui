import * as React from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StatusBar, FlatList } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { darkgrey, grey, pastelGreen, pastelPink, pastelRed, primaryColor, white } from '../../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from 'react-native-elements/dist/helpers';

const styles = require('../../stylesheet/styles');

const data = [
    {'title':"Calculate your carbon footprint", 'image':require('../../assets/images/carbonFootprint.webp'), color:pastelGreen},
    {'title':"Learn more about green action", 'image':require('../../assets/images/greenAction.webp'),color:pastelPink},
    {'title':"Learn more about carbon credits", 'image':require('../../assets/images/cc.webp'),color:pastelRed},
]

const RealTimeTrading = ({ navigation }) => {

    const renderItem = () => {
        return (
            <View style={[styles.box, {
                flexDirection: "row", justifyContent: "space-between",
                width: Dimensions.get('window').width / 1.1,
            }]}>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require('../../assets/images/abc.png')} style={{ width: 50, height: 50 }} />
                    <View style={{paddingLeft: 10}}>
                        <Text style={[styles.h4, { color: "#5d5d5d" }]}>Carbon Credit</Text>
                        <Text style={[styles.h5, { color: "#5d5d5d", fontSize:RFValue(10,580) }]}>₹ 500 | ↑ 50%</Text></View>
                </View>
                <View>
                    <TouchableOpacity style={styles.smallButton} onPress={() => { navigation.navigate('TopTabs') }}>
                        <Text style={styles.h5}>Buy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.smallButton, { marginTop: 5 }]} onPress={() => { navigation.navigate('TopTabs') }}>
                        <Text style={styles.h5}>Sell</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderItemData = ({item}) => {
        return(
            <View style={{...styles.carousel,backgroundColor:item.color}}>
                <Image source={item.image} style={{height:80, width:80}}/>
                <Text style={[styles.h6,{color: darkgrey, }]}>{item.title}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={[styles.safeAreaView, { backgroundColor: primaryColor}]}>
            <StatusBar barStyle="light-content" backgroundColor={primaryColor}/>
            <View style={styles.container}>

                {/* View for header */}
                <View style={[styles.header, { flexDirection: "row" }]}>
                    <View style={{ width: "80%" }}>
                        <Text numberOfLines={1} style={[styles.h3, { color: white, letterSpacing: 1, paddingHorizontal: 10, marginTop: 5 }]}>Hi, Sunaina</Text>
                        <Text style={[styles.h5, { color: white, letterSpacing: 0.5, paddingHorizontal: 10 }]}>Let's neutralize your carbon footprint</Text>
                    </View>
                    <View style={{ width: "20%", justifyContent: "center" }}>
                        <Icon onPress={() => { navigation.navigate('ProfileScreen') }} name="person-circle-outline" color={white} type="ionicon" size={40} />
                    </View>
                </View>

                <View>
                    <FlatList 
                    data={data}
                    renderItem={renderItemData}
                    horizontal
                    style={{marginTop:10}}
                    showsHorizontalScrollIndicator={false}
                    />
                </View>

                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: 10, alignSelf: "center" }}
                />
            </View>

        </SafeAreaView>
    );
};

export default RealTimeTrading;