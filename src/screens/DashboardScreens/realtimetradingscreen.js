import * as React from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StatusBar, FlatList } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { grey } from '../../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from 'react-native-elements/dist/helpers';

const styles = require('../../stylesheet/styles');

const RealTimeTrading = ({ navigation }) => {

    const renderItem = () => {
        return (
            <View style={[styles.box, {
                flexDirection: "row", justifyContent: "space-between",
                width: Dimensions.get('window').width / 1.1,
            }]}>
                <View>
                    <Text style={[styles.h4, { color: "#5d5d5d" }]}>Carbon Credit</Text>
                    <Text style={[styles.h6, { color: "#5d5d5d" }]}>₹ 500 | ↑ 50%</Text>
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

    return (
        <SafeAreaView style={[styles.safeAreaView, { backgroundColor: "#6DB049" }]}>
            <StatusBar barStyle="light-content" backgroundColor="#6DB049" />
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={[styles.h3, { color: "#fff", letterSpacing: 1, marginTop: 5 }]}>Hi, User</Text>
                </View>
                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    renderItem={renderItem}
                />
            </View>

        </SafeAreaView>
    );
};

export default RealTimeTrading;