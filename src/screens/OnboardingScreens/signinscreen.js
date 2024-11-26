import * as React from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { grey } from '../../constants/colors';
import CustomInput from '../../components/custominput';
import Toast from 'react-native-root-toast';


const styles = require('../../stylesheet/styles');

const SigninScreen = ({ navigation }) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [secureText, setSecureText] = React.useState(true);

    const togglePasswordVisibility = () => {
        setSecureText(!secureText);
    };

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

    const onSignIn = () => {
        let regexEmail = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        if (isNullorUndefined(email) || isNullorUndefined(password)) {
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
                        <Text style={styles.h3}>Welcome Back!</Text>
                        <Text style={{ ...styles.h5, color:grey }}>Enter your email and password</Text>


                        <CustomInput 
                        placeholder="Email" 
                        placeholderTextColor={grey} 
                        value={email} 
                        keyboardType="email-address"
                        secureTextEntry={false}
                        style={{ ...styles.inputText, paddingLeft: 10,color:grey }}
                        onChangeText={(e) => { setEmail(e) }} />
                        {/* <TextInput
                            keyboardType="email-address"
                            returnKeyType='done'
                            placeholderTextColor={grey}
                            placeholder='Email'
                            onChangeText={(e) => { setEmail(e) }}
                            value={email}
                            style={{ ...styles.inputText, paddingLeft: 10,color:grey }} /> */}
                        
                        <TextInput
                            keyboardType='default'
                            returnKeyType='done'
                            placeholderTextColor={grey}
                            placeholder='Password'
                            onChangeText={(e) => { setPassword(e) }}
                            value={password}
                            secureTextEntry={secureText}
                            style={{ ...styles.inputText, paddingLeft: 10,color:grey }} />

                        <Text onPress={() => { navigation.navigate("ForgotPasswordScreen") }} style={[styles.h5, { color: grey, alignSelf: "flex-end", marginTop: 20 }]}>
                            Forgot Password?
                        </Text>

                        <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={()=>onSignIn()}>
                            <Text style={{ ...styles.h4, color: "white" }}>Sign In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {navigation.navigate("SignUpScreen")}}>
                           <Text style={[styles.h5, { color: grey, alignSelf: "center", marginTop: 20 }]}> Don't have an account? Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>

        </SafeAreaView>
    );
};

export default SigninScreen;