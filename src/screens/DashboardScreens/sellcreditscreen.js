import * as React from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StatusBar, FlatList } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { grey } from '../../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from 'react-native-elements/dist/helpers';

const styles = require('../../stylesheet/styles');

const SellCredit = ({ navigation }) => {


    return (
        <SafeAreaView style={[styles.safeAreaView, { backgroundColor: "#6DB049",marginBottom: Platform.OS == "ios" ? -35 : 0 }]}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" />
            <View style={[styles.container,{alignItems:"center"}]}>

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
            </View>

        </SafeAreaView>
    );
};

export default SellCredit;