import * as React from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { grey } from '../../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from 'react-native-elements/dist/helpers';
import CustomInput from '../../components/custominput';
import Toast from 'react-native-root-toast';

const styles = require('../../stylesheet/styles');

const SignupScreen = ({ navigation }) => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const isNullorUndefined = (val) => {
        try {
            const item =
                val === null ||
                val === undefined ||
                val === 'undef' ||
                val === 'undefined' ||
                val === '' ||
                Object.keys(val).length === 0;
            return item;
        } catch (err) {
            return true;
        }
    }

    const onSignUp = () => {
        let regexEmail = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        if (isNullorUndefined(email) || isNullorUndefined(password) || isNullorUndefined(name) || isNullorUndefined(confirmPassword)) {
            Toast.show("Please fill all the fields")
        }
        else if (!email.match(regexEmail)) {
            Toast.show("Please enter valid email")
        }
        else{
            navigation.navigate("TabNavigator");
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <ScrollView>
                    <Image source={require('../../assets/images/signin.webp')} style={{ ...styles.image, marginTop: 20 }} />

                    <View style={{ padding: 20 }}>
                        <Text style={styles.h3}>Become a member!</Text>
                        <Text style={{ ...styles.h5, color: grey }}>Enter your credentials to continue</Text>

                        <CustomInput
                            placeholder="Name"
                            placeholderTextColor={grey}
                            value={name}
                            keyboardType="default"
                            secureTextEntry={false}
                            style={{ ...styles.inputText, paddingLeft: 10, color: grey }}
                            onChangeText={(e) => { setName(e) }} />

                        <CustomInput
                            placeholder="Email"
                            placeholderTextColor={grey}
                            value={email}
                            keyboardType="email-address"
                            secureTextEntry={false}
                            style={{ ...styles.inputText, paddingLeft: 10, color: grey }}
                            onChangeText={(e) => { setEmail(e) }} />

                        <TextInput
                            keyboardType='default'
                            returnKeyType='done'
                            placeholderTextColor={grey}
                            placeholder='Password'
                            onChangeText={(e) => { setPassword(e) }}
                            value={password}
                            secureTextEntry={true}
                            style={{ ...styles.inputText, paddingLeft: 10, color: grey }} />

                        <TextInput
                            keyboardType='default'
                            returnKeyType='done'
                            placeholderTextColor={grey}
                            placeholder='Confirm password'
                            onChangeText={(e) => { setConfirmPassword(e) }}
                            value={confirmPassword}
                            secureTextEntry={true}
                            style={{ ...styles.inputText, paddingLeft: 10, color: grey }} />


                        <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={() => onSignUp()}>
                            <Text style={{ ...styles.h4, color: "white" }}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("SignInScreen") }}>
                            <Text style={[styles.h5, { color: grey, alignSelf: "center", marginTop: 20 }]}> Already have an account? Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>

        </SafeAreaView>
    );
};

export default SignupScreen;