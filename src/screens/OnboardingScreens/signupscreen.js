import * as React from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { grey } from '../../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from 'react-native-elements/dist/helpers';

const styles = require('../../stylesheet/styles');

const SignupScreen = ({ navigation }) => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <ScrollView>
                    <Image source={require('../../assets/images/signin.webp')} style={{ ...styles.image, marginTop: 20 }} />

                    <View style={{ padding: 20 }}>
                        <Text style={styles.h3}>Become a member!</Text>
                        <Text style={{ ...styles.h5, color: grey }}>Enter your credentials to continue</Text>

                        <TextInput
                            keyboardType="default"
                            returnKeyType='done'
                            placeholderTextColor={grey}
                            placeholder='Name'
                            onChangeText={(e) => { setName(e) }}
                            value={name}
                            style={{ ...styles.inputText, paddingLeft: 10,color:grey }} />

                        <TextInput
                            keyboardType="email-address"
                            returnKeyType='done'
                            placeholderTextColor={grey}
                            placeholder='Email'
                            onChangeText={(e) => { setEmail(e) }}
                            value={email}
                            style={{ ...styles.inputText, paddingLeft: 10,color:grey }} />

                        <TextInput
                            keyboardType='default'
                            returnKeyType='done'
                            placeholderTextColor={grey}
                            placeholder='Password'
                            onChangeText={(e) => { setPassword(e) }}
                            value={password}
                            style={{ ...styles.inputText, paddingLeft: 10,color:grey }} />

                        <TextInput
                            keyboardType='default'
                            returnKeyType='done'
                            placeholderTextColor={grey}
                            placeholder='Confirm password'
                            onChangeText={(e) => { setConfirmPassword(e) }}
                            value={confirmPassword}
                            style={{ ...styles.inputText, paddingLeft: 10,color:grey }} />


                        <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={()=>navigation.navigate("TabNavigator")}>
                            <Text style={{ ...styles.h4, color: "white" }}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("SignInScreen")}}>
                           <Text style={[styles.h5, { color: grey, alignSelf: "center", marginTop: 20 }]}> Already have an account? Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>

        </SafeAreaView>
    );
};

export default SignupScreen;