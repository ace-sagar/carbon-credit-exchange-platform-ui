import * as React from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { grey } from '../../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from 'react-native-elements/dist/helpers';

const styles = require('../../stylesheet/styles');

const Transactions = ({ navigation }) => {


    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <ScrollView>
                  
                </ScrollView>
            </View>

        </SafeAreaView>
    );
};

export default Transactions;