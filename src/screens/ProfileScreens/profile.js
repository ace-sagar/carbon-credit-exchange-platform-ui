import * as React from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StatusBar, FlatList, Platform } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { darkgrey, grey, pastelGreen, primaryColor, secondaryColor, white } from '../../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from 'react-native-elements/dist/helpers';
import { LineChart, PieChart, BarChart } from "react-native-chart-kit";
import LinearGradient from 'react-native-linear-gradient';
import { PoppinsSemiBold } from '../../constants/fonts';

const styles = require('../../stylesheet/styles');

const Profile = ({ navigation }) => {

    const dataVideo = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
            {
                data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                ],
                color: (opacity = 1) => `rgb(41, 110, 132)`, // optional
                // color: (opacity = 1) => `rgba(86, 75, 173,1)`, // optional
                strokeWidth: 2
            }
        ],
    };

    const chartConfig = {
        backgroundGradientFrom: primaryColor,
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: primaryColor,
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        propsForBackgroundLines: {
            strokeWidth: 0
        },
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 15
        },
        propsForDots: {
            r: "5",
            strokeWidth: "2",
            stroke: secondaryColor
        },
        propsForLabels: {
            fontFamily: PoppinsSemiBold,
            fontSize: RFValue(9, 580),
        }
    
    }

    return (
        <SafeAreaView style={[styles.safeAreaView, { backgroundColor: primaryColor, marginBottom: Platform.OS == "ios" ? -35 : 0 }]}>
            <StatusBar barStyle="light-content" backgroundColor={primaryColor} />
            <View style={[styles.container, {}]}>

                <View style={{ ...styles.header, height: 60, }}>
                    <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 10 }}>
                        <Icon name="arrow-back-outline" type="ionicon" color="white" size={25} onPress={() => navigation.goBack()} />
                        <Text style={[styles.h4, { color: white, letterSpacing: 0.5, marginLeft: 10 }]}>Profile</Text>
                    </View>
                </View>

                <ScrollView>
                    <View style={{
                        ...styles.carousel, alignSelf: "center", justifyContent: "space-between", borderRadius: 20, height: 80, marginTop: 20, flexDirection: "row",
                        backgroundColor: pastelGreen, width: Dimensions.get('window').width / 1.1
                    }}>
                        <View>
                            <Text style={[styles.h3, { color: darkgrey, marginLeft: 10 }]}>Sunaina</Text>
                            <Text style={[styles.h5, { color: darkgrey, marginLeft: 10 }]}>+91 1234567890</Text>
                        </View>

                        <TouchableOpacity style={{ alignSelf: "center" }} onPress={() => navigation.navigate('SignInScreen')}>
                            <Icon name="log-out-outline" type="ionicon" color={darkgrey} size={30} />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        ...styles.carousel, alignSelf: "center", borderRadius: 20, height:300, marginTop: 20,
                        backgroundColor: pastelGreen, width: Dimensions.get('window').width / 1.1
                    }}>
                        {/* <View style={{justifyContent:"space-between", flexDirection:"row"}}>
                        <View>
                            <Text style={{...styles.h6, marginLeft: 10}}>10 Nov, 24</Text>
                            <Text style={{...styles.h6, marginLeft: 10,color:darkgrey}}>Updated On</Text>
                        </View>

                        <View style={{alignItems:"flex-end"}}>
                            <Text style={{...styles.h6, marginLeft: 10}}>↓ 100 kgs</Text>
                            <Text style={{...styles.h6, marginLeft: 10,color:darkgrey}}>Since Last Update</Text>
                        </View>
                        </View> */}

                        <View
                            style={{
                                width: 180, height: 180, borderRadius: 100, backgroundColor: primaryColor, opacity: 0.2,
                                position: "absolute", alignSelf: "center", top:30
                            }} />

                        <View
                            style={{
                                width: 140, height: 140, borderRadius: 100, backgroundColor: primaryColor, opacity: 0.2,
                                position: "absolute", alignSelf: "center", top: 50
                            }} />
                        
                        <View style={{
                            width: 120, height: 120, borderRadius: 100, backgroundColor: white, opacity: 0.7,
                            position: "absolute", alignSelf: "center", top: 60, justifyContent: "center", alignItems: "center"
                        }} >
                            <Text style={[styles.h6, { color: darkgrey }]}>
                                Co2e/Annual
                            </Text>
                            <Text style={[styles.h4, { color: darkgrey }]}>
                                18,852 Kgs
                            </Text>
                        </View>

                        <View style={{ ...styles.pillButton, marginTop: 20, position: "absolute", top:210}}>
                            <Text style={{ ...styles.h4, color: white }}>Check your Report</Text>
                        </View>
                    </View>

                    <Text style={[styles.h4, { marginLeft: 20,marginTop:20 }]}>Co2 Statics</Text>
                    <Text style={[styles.h6, { marginLeft: 20, color:darkgrey}]}>Nov 15 - Nov 30</Text>
                    <BarChart
                                style={{
                                    marginVertical: 10,
                                    borderRadius: 15,
                                    alignSelf: "center"
                                }}
                                data={dataVideo}
                                width={Dimensions.get("window").width/1.1}
                                height={270}
                                yAxisLabel="$"
                                chartConfig={chartConfig}
                                verticalLabelRotation={30}
                            />
                </ScrollView>

            </View>

        </SafeAreaView>
    );
};

export default Profile;