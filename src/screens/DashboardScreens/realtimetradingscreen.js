import * as React from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StatusBar, FlatList } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { grey, white } from '../../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from 'react-native-elements/dist/helpers';

const styles = require('../../stylesheet/styles');

const data = [
    {'title':"Calculate your carbon footprint", 'image':require('../../assets/images/abc.png'), color:"#6DB049"},
    {'title':"Learn more about green action", 'image':require('../../assets/images/abc.png'),color:"#6DB049"},
    {'title':"Learn more about green action", 'image':require('../../assets/images/abc.png'),color:"#6DB049"},
]

const RealTimeTrading = ({ navigation }) => {

    const renderItem = () => {
        return (
            <View style={[styles.box, {
                flexDirection: "row", justifyContent: "space-between",
                width: Dimensions.get('window').width / 1.1,
            }]}>
                {/* <View>
                    <Image source={require('../../assets/images/abc.png')} style={{ width: 40, height: 40 }}/>
                    <Text style={[styles.h4, { color: "#5d5d5d" }]}>Carbon Credit</Text>
                    <Text style={[styles.h6, { color: "#5d5d5d" }]}>₹ 500 | ↑ 50%</Text>
                </View> */}
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
            // <View style={{...styles.squareBox,}}>
            //     <Image source={require('../../assets/images/abc.png')} style={{ width: 40, height: 40 }} />
            //     <Text style={styles.h5}>Carbon Credit</Text>
            // </View>
        )
    }

    const renderItemData = ({item}) => {
        return(
            <View style={{...styles.squareBox,backgroundColor:item.color}}></View>
        )
    }

    return (
        <SafeAreaView style={[styles.safeAreaView, { backgroundColor: "#6DB049" }]}>
            <StatusBar barStyle="light-content" backgroundColor="#6DB049" />
            <View style={styles.container}>

                <View style={[styles.header, { flexDirection: "row" }]}>
                    <View style={{ width: "80%" }}>
                        <Text numberOfLines={1} style={[styles.h3, { color: white, letterSpacing: 1, paddingHorizontal: 10, marginTop: 5 }]}>Hi, Sunaina</Text>
                        <Text style={[styles.h5, { color: white, letterSpacing: 0.5, paddingHorizontal: 10 }]}>Let's neutralize your carbon footprint</Text>
                    </View>
                    <View style={{ width: "20%", justifyContent: "center" }}>
                        <Icon name="person-circle-outline" color={white} type="ionicon" size={40} />
                    </View>
                </View>

                <View>
                    <FlatList 
                    data={data}
                    renderItem={renderItemData}
                    horizontal/>
                </View>

                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    // numColumns={2}
                    style={{ marginTop: 10, alignSelf: "center" }}
                />
            </View>

        </SafeAreaView>
    );
};

export default RealTimeTrading;